import jwt from "jsonwebtoken"

export default function resolveProductionUrl(document) {
  let slug = document.slug !== undefined ? document.slug.current : ""

  const token = jwt.sign(
    {
      type: document._type,
      id: document._id,
      slug,
    },
    process.env.SANITY_STUDIO_PREVIEW_SECRET
  )
  return `${process.env.SANITY_STUDIO_BASE_PATH}/api/preview?token=${token}`
}
