'use client'
import { theme } from '@/config/theme'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, GlobalStyle } from '@chakra-ui/react'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>
                <GlobalStyle />
                {children}
            </ChakraProvider>
        </CacheProvider>
    )
}
