import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './schemaTypes/structure/index'

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

  projectId: '3x5rcx8y',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
  },

  document: {
    actions: (prev) => [...prev, OpenPreviewAction],
  },
})
