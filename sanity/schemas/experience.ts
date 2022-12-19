import {defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name:'jobTitle',
      title:'JobTitle',
      type:'string'
    },
    {
      name:'companyImage',
      title:'Company Image',
      type:'image',
      options: {
        hotspot: true,
      }
    },
    {
      name:'company',
      title:'Company',
      type:'string'
    },
    {
      name:'dateStarted',
      title:'Date Started',
      type:'date'
    },
    {
      name:'dateEnded',
      title:'Date Ended',
      type:'date'
    },
    {
      name:'isCurrentlyWorkingHere',
      title:'IsCurrentlyWorkingHere',
      type:'boolean'
    },
    {
      name:'Technologies',
      title:'technologies',
      type:'array',
      of:[{type: 'reference',to:{type:'skill'}}]
    },
    {
      name:'points',
      title:'Points',
      type:'array',
      of:[{type:'skill'}]
    },
    {
      name:'heroImage',
      title:'Image',
      type:'image',
      options: {
        hotspot: true,
      }
    },
  ],

})
