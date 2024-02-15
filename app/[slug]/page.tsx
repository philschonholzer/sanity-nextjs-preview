// ./nextjs-app/app/[slug]/page.tsx

import { SanityDocument } from '@sanity/client'
import { draftMode } from 'next/headers'
import Post from '@/app/_components/Post'
import PreviewProvider from '@/app/_components/PreviewProvider'
import PreviewPost from '@/app/_components/PreviewPost'
import { postPathsQuery, postQuery, postsQuery } from '@/sanity/lib/queries'
import { sanityFetch, token } from '@/sanity/lib/sanityFetch'
import { client } from '@/sanity/lib/client'
import { loadQuery } from '@/sanity/lib/store'

// // Prepare Next.js to know which routes already exist
// export async function generateStaticParams() {
//   const posts = await client.fetch(postPathsQuery)

//   return posts
// }

export default async function Page({ params }: { params: any }) {
  const initial = await loadQuery<SanityDocument>(postQuery)
  // const isDraftMode = draftMode().isEnabled
  // const post = await sanityFetch<SanityDocument>({
  //   query: postQuery,
  //   params,
  // })

  // if (isDraftMode && token) {
  //   return (
  //     <PreviewProvider token={token}>
  //       <PreviewPost post={post} />
  //     </PreviewProvider>
  //   )
  // }

  return <Post post={initial.data} />
}
