import groq from 'groq'

export const PROGRAM_CARD_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  type,
  location,
  country,
  duration,
  durationType,
  rating,
  reviews,
  "imageUrl": image.asset->url,
  description,
  benefits,
  deadline,
`

export const PROGRAM_DETAIL_FIELDS = `
  ${PROGRAM_CARD_FIELDS}
  longDescription,
  requirements,
  applicationProcess,
  startDate,
  cost,
  paymentOptions,
  excluded,
  testimonials[]{
    name,
    role,
    quote,
    "imageUrl": image.asset->url
  },
`

export const allProgramsQuery = groq`*[_type == "program"] | order(title asc){${PROGRAM_CARD_FIELDS}}`

export const featuredProgramsQuery = groq`*[_type == "program" && featured == true] | order(title asc) [0...4]{${PROGRAM_CARD_FIELDS}}`

export const programBySlugQuery = groq`*[_type == "program" && slug.current == $slug][0]{${PROGRAM_DETAIL_FIELDS}}`

export const homepageQuery = groq`*[_type == "homepage"][0]{
  heroTitle,
  heroSubtitle,
  stats,
  featuredPrograms[]->{${PROGRAM_CARD_FIELDS}}
}`


