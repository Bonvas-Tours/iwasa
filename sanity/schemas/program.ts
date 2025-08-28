import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'program',
  title: 'Program',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'type', type: 'string', options: { list: ['internship', 'work', 'study'] }, validation: (r) => r.required() }),
    defineField({ name: 'location', type: 'string' }),
    defineField({ name: 'country', type: 'string' }),
    defineField({ name: 'duration', type: 'string' }),
    defineField({ name: 'durationType', type: 'string', options: { list: ['flexible', 'short', 'medium', 'long', 'package'] } }),
    defineField({ name: 'rating', type: 'number' }),
    defineField({ name: 'reviews', type: 'number' }),
    defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'description', type: 'text' }),
    defineField({ name: 'longDescription', type: 'text' }),
    defineField({ name: 'benefits', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'requirements', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'applicationProcess', type: 'array', of: [{
      type: 'object',
      fields: [
        { name: 'step', type: 'number' },
        { name: 'title', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'completed', type: 'boolean' },
      ],
    }] }),
    defineField({ name: 'deadline', type: 'string' }),
    defineField({ name: 'startDate', type: 'string' }),
    defineField({ name: 'cost', type: 'string' }),
    defineField({ name: 'paymentOptions', type: 'array', of: [{
      type: 'object',
      fields: [
        { name: 'option', type: 'string' },
        { name: 'percentage', type: 'string' },
        { name: 'amount', type: 'string' },
        { name: 'description', type: 'string' },
      ],
    }] }),
    defineField({ name: 'excluded', type: 'array', of: [{ type: 'string' }] }),
    defineField({ 
      name: 'testimonials', 
      type: 'array', 
      of: [{
        type: 'object',
        fields: [
          { name: 'name', type: 'string' },
          { name: 'role', type: 'string' },
          { name: 'image', type: 'image', options: { hotspot: true } },
          { name: 'quote', type: 'text' },
        ],
      }] 
    }),
    defineField({ name: 'featured', type: 'boolean', initialValue: false }),
  ],
})


