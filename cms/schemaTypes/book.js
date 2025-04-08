export default {
  name: 'book',
  title: 'Book',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cover',
      title: 'Cover',
      type: 'image',
      storeOriginalFilename: false,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'readByToyah',
      title: 'Read by Toyah',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'readByDave',
      title: 'Read by Dave',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'commentByToyah',
      title: 'Comment by Toyah',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'commentByDave',
      title: 'Comment by Dave',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
