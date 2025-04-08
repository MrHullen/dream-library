import client from '$lib/sanityClient'

export async function load({ params }) {
  const collections = await client.fetch(`*[_type == 'collection']{
    ...,
    books[]->
  }`)

  const singleBooks = await client.fetch(`*[ _type == 'book']{
    ...,
    "refs": count(*[ references(^._id) ])
  }[ refs == 0 ]`)

  const rawLibrary = [...collections, ...singleBooks]

  let library = rawLibrary
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

  console.dir(library)

  if (library) return { library }

  return {
    status: 500,
    body: new Error('Internal Server Error'),
  }
}
