// ./nextjs-app/app/page.tsx

import Posts from '@/app/_components/Posts'
import { postsQuery } from '@/sanity/lib/queries'
import { loadQuery } from '@/sanity/lib/store'
import { SanityDocument } from 'next-sanity'
import { draftMode } from 'next/headers'
import PostsPreview from './_components/PostsPreview'

export default async function Home() {
  const initial = await loadQuery<SanityDocument[]>(
    postsQuery,
    {},
    {
      perspective: draftMode().isEnabled ? 'previewDrafts' : 'published',
    }
  )

  return draftMode().isEnabled ? (
    <PostsPreview initial={initial} />
  ) : (
    <Posts posts={initial.data} />
  )
}
