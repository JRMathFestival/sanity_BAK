const fs = require("fs")
const groq = require("groq")
const { parse, evaluate } = require("groq-js")
const ndjson = require("ndjson")

const dataset = []

const query = groq`
  *[defined(seo) && i18n_lang=="es" && !(_id in path("drafts.**"))]{
    _id,
    seo
  }
`

let counter = 0

fs.createReadStream(
  "./backup/production-export-2021-08-10t18-30-14-016z/data.ndjson"
)
  .pipe(ndjson.parse())
  .on("data", obj => {
    dataset.push(obj)
  })
  .on("end", async () => {
    let value = await evaluate(parse(query), { dataset })
    let result = await value.get()
    fs.writeFileSync("patches", JSON.stringify(result))
  })
