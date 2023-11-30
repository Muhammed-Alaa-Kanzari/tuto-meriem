import { PublicLayout } from '@/layout/publicLayout'
import { ReactNode } from 'react'

// This is a Server Component
export default function Layout({ children }: { children: ReactNode }) {
    return <PublicLayout>{children}</PublicLayout>
}
