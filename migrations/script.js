import groq from "groq"
import sanityClient from "part:@sanity/base/client"
import patches from "./patches.json"

const client = sanityClient.withConfig({ apiVersion: "2021-05-24" })

const query = groq`
 *[defined(revision)]{
   _id,
 }
`

const fetchDocuments = () => client.fetch(query)

const buildPatches = docs =>
  docs.map(doc => {
    return {
      id: doc._id,
      patch: {
        // set: {
        //   activity: doc.activity.toLowerCase(),
        //   format: doc.format.map(f => ),
        //   revision1: "activity/format patch",
        // },
        unset: ["revision"],
      },
    }
  })

const createTransaction = patches =>
  patches.reduce(
    (tx, patch) => tx.patch(patch.id, patch.patch),
    client.transaction()
  )

const commitTransaction = tx => tx.commit()

const migrateNextBatch = async () => {
  const documents = await fetchDocuments()
  const patches = buildPatches(documents)
  if (patches.length === 0) {
    console.log("No more documents to migrate")
    return null
  }
  console.log(
    `Migrating batch: \n %s`,
    patches.map(patch => `${patch.id} → ${JSON.stringify(patch.patch)}`)
  )
  const transaction = createTransaction(patches)
  await commitTransaction(transaction)
  return migrateNextBatch()
}

migrateNextBatch().catch(err => {
  console.error(err)
  process.exit(1)
})
