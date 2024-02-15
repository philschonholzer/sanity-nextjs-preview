// ./nextjs-app/app/[slug]/page.tsx

import Post from '@/app/_components/Post'
import { postQuery } from '@/sanity/lib/queries'
import { loadQuery } from '@/sanity/lib/store'
import { QueryParams, SanityDocument } from '@sanity/client'
import { draftMode } from 'next/headers'
import PostPreview from '../_components/PostPreview'

// // Prepare Next.js to know which routes already exist
// export async function generateStaticParams() {
//   const posts = await client.fetch(postPathsQuery)

//   return posts
// }

export default async function Page({ params }: { params: QueryParams }) {
	const initial = await loadQuery<SanityDocument>(postQuery, params, {
		// Because of Next.js, RSC and Dynamic Routes this currently
		// cannot be set on the loadQuery function at the "top level"
		perspective: draftMode().isEnabled ? 'previewDrafts' : 'published',
	})

	return draftMode().isEnabled ? (
		<PostPreview initial={initial} params={params} />
	) : (
		<Post post={initial.data} />
	)
}
