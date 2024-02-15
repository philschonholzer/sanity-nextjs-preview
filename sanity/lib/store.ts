// ./sanity/lib/store.ts

import * as queryStore from '@sanity/react-loader'

import { client } from '@/sanity/lib/client'

export const token = process.env.SANITY_API_READ_TOKEN

queryStore.setServerClient(client.withConfig({ token }))

export const { loadQuery } = queryStore
