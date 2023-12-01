'use client'

import React from 'react'
import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import {ReactQueryDevtools} from 'react-query-devtools'
export function ReactQueryProvider({ children }: { children: ReactNode }) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            },
        },
    })

    return (
        <QueryClientProvider client={queryClient}>
            {/* <ReactQueryDevtools /> */}
            {children}
        </QueryClientProvider>
    )
}
