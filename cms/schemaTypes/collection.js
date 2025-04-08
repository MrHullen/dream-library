export default {
  name: 'collection',
  title: 'Collection',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Series Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'books',
      title: 'Books',
      type: 'array',
      of: [{type: 'reference', to: {type: 'book'}}],
    },
  ],
}
