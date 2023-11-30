'use client'
import { PlusSquareIcon } from '@chakra-ui/icons'
import { Heading, HStack } from '@chakra-ui/react'
import { Link } from '@/components/link'
import { Loading } from '@/components/loading'
import { Seo } from '@/components/seo'
import { JobsList } from '@/features/jobs'
import { useJobs, useUser } from '@/testing/test-data'
import { useEffect, useState } from 'react'

const DashboardJobsPage = () => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
        console.log(isClient)
    }, [])
    const user = useUser()

    const jobs = useJobs(user.data?.organizationId ?? '')

    if (jobs.isLoading) return <Loading />

    if (!user.data) return null

    return (
        <>
            <Seo title="Jobs" />
            <HStack mb="8" align="center" justify="space-between">
                <Heading>Jobs</Heading>
                <Link
                    icon={<PlusSquareIcon />}
                    variant="solid"
                    href="/dashboard/jobs/create"
                >
                    Create Job
                </Link>
            </HStack>
            <JobsList
                jobs={jobs.data || []}
                isLoading={jobs.isLoading}
                organizationId={user.data.organizationId}
                type="dashboard"
            />
            <time dateTime="2023-11-27" suppressHydrationWarning />
        </>
    )
}
export default DashboardJobsPage
