import { Providers } from '../../providers/providers'
import { Metadata } from 'next'
import { ReactQueryProvider } from '../../providers/react-query-provider'

export const metadata: Metadata = {
    title: 'App Router Version',
    description: 'Welcome to Next.js',
}
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <ReactQueryProvider>{children}</ReactQueryProvider>
                </Providers>
            </body>
        </html>
    )
}
