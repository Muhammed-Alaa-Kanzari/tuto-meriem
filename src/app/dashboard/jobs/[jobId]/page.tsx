'use client'
import { Loading } from '@/components/loading'
import { NotFound } from '@/components/not-found'
import { Seo } from '@/components/seo'
import { DashboardJobInfo } from '@/features/jobs'
import { useJob } from '@/testing/test-data'
import { useEffect, useState } from 'react'

const DashboardJobPage = ({ params }: { params: { jobId: string } }) => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
        console.log(isClient)
    }, [])
    const { jobId } = params
    const job = useJob(jobId)

    if (job.isLoading) {
        return <Loading />
    }

    if (!job.data) {
        return <NotFound />
    }

    return (
        <>
            <Seo title={`${job.data.position} | ${job.data.location}`} />
            <DashboardJobInfo job={job.data} />
        </>
    )
}

export default DashboardJobPage
