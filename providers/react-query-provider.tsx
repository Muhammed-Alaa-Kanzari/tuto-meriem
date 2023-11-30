'use client'

import React from 'react'
import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import {ReactQueryDevtools} from 'react-query-devtools'
export function ReactQueryProvider({ children }: { children: ReactNode }) {
    const queryCleint = new QueryClient()

    return (
        <QueryClientProvider client={queryCleint}>
            {/* <ReactQueryDevtools /> */}
            {children}
        </QueryClientProvider>
    )
}
