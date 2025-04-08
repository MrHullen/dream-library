import client from '$lib/sanityClient'

export async function load({ params }) {
  const library = await client.fetch(`*[_type == 'collection']{
      ...,
      books[]->
    }`)

  console.dir(library)

  if (library) return { library }

  return {
    status: 500,
    body: new Error('Internal Server Error'),
  }
}
