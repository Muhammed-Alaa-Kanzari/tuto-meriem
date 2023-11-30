import { ReactNode } from 'react'
import { DashboardLayout } from '../../../layout/dashboardLayout'

export default function Layout({ children }: { children: ReactNode }) {
    return <DashboardLayout>{children}</DashboardLayout>
}
