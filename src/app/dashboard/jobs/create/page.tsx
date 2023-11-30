'use client'
import { Heading } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { Seo } from '@/components/seo'
import { CreateJobForm } from '@/features/jobs'
const DashboardCreateJobPage = () => {
    const router = useRouter()

    const onSuccess = () => {
        router.push(`/dashboard/jobs`)
    }

    return (
        <>
            <Seo title="Create Job" />
            <Heading mb="8">Create Job</Heading>
            <CreateJobForm onSuccess={onSuccess} />
        </>
    )
}

export default DashboardCreateJobPage
