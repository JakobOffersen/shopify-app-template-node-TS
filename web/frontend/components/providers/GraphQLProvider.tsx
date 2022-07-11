import React from "react"
import { QueryClient, QueryClientProvider, QueryCache, MutationCache } from "react-query"

/**
 * Sets up the QueryClientProvider from react-query.
 * @desc See: https://react-query.tanstack.com/reference/QueryClientProvider#_top
 */
export function GraphQLProvider({ children }: { children: JSX.Element }) {
	const client = new QueryClient({
		queryCache: new QueryCache(),
		mutationCache: new MutationCache(),
	})

	return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
