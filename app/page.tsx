// ./nextjs-app/app/page.tsx

import { SanityDocument } from 'next-sanity'
import Posts from '@/app/_components/Posts'
import { postsQuery } from '@/sanity/lib/queries'
import { sanityFetch, token } from '@/sanity/lib/sanityFetch'
import { draftMode } from 'next/headers'
import PreviewPosts from '@/app/_components/PreviewPosts'
import PreviewProvider from '@/app/_components/PreviewProvider'
import { loadQuery } from '@/sanity/lib/store'

export default async function Home() {
  const initial = await loadQuery<SanityDocument[]>(postsQuery)

  return <Posts posts={initial.data} />
}
