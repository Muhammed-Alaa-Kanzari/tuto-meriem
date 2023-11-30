'use client'
import { Stack, Button } from '@chakra-ui/react'
import { NotFound } from '@/components/not-found'
import { Seo } from '@/components/seo'
import { PublicJobInfo } from '@/features/jobs'
import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getJobsData, getOrganizationData } from '../../fetch-data'

function PublicJobPageClient() {
    const { data: organization } = useQuery({
        queryKey: ['organization'],
        queryFn: () => getOrganizationData(),
    })
    const { data: job } = useQuery({
        queryKey: ['job'],
        queryFn: () => getJobsData(),
    })

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
        console.log(isClient)
    }, [])

    const isInvalid =
        !job || !organization || organization.id !== job.organizationId

    if (isInvalid) {
        return <NotFound />
    }

    return (
        <>
            <Seo title={`${job.position} | ${job.location}`} />
            <Stack w="full">
                <PublicJobInfo job={job[0]} />
                <Button
                    bg="primary"
                    color="primaryAccent"
                    _hover={{
                        opacity: '0.9',
                    }}
                    as="a"
                    href={`mailto:${organization?.email}?subject=Application for ${job.position} position`}
                    target="_blank"
                >
                    Apply
                </Button>
            </Stack>
        </>
    )
}

export default PublicJobPageClient
