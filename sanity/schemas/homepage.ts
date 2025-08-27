import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({ name: 'heroTitle', type: 'string' }),
    defineField({ name: 'heroSubtitle', type: 'text' }),
    defineField({ name: 'stats', type: 'array', of: [{
      type: 'object',
      fields: [
        { name: 'number', type: 'string' },
        { name: 'label', type: 'string' },
      ],
    }] }),
    defineField({ name: 'featuredPrograms', type: 'array', of: [{ type: 'reference', to: [{ type: 'program' }] }] }),
  ],
})


