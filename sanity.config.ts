import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './studio/schemaTypes'
import {structure} from './studio/schemaTypes/structure'

const SITE_URL = process.env.SANITY_STUDIO_SITE_URL || 'http://localhost:3000'

function OpenPreviewAction(props: any) {
  const {draft, published} = props
  const doc = draft || published
  const slug = doc?.slug?.current
  const type = doc?._type

  let url: string | null = null
  if (type === 'blogs' && slug) url = `${SITE_URL}/blog/${slug}`
  else if (slug) url = `${SITE_URL}/${slug}`

  return {
    label: 'Open Preview',
    disabled: !url,
    onHandle: () => {
      if (url) window.open(url, '_blank')
    },
  }
}

export default defineConfig({
  name: 'default',
  title: 'mikeSanity',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  basePath: '/studio',

  plugins: [structureTool({structure})],

  schema: {
    types: schemaTypes,
  },

  document: {
    actions: (prev) => [...prev, OpenPreviewAction],
  },
})
