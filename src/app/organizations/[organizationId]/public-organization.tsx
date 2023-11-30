'use client'
import { Heading, Stack } from '@chakra-ui/react'
import { NotFound } from '@/components/not-found'
import { Seo } from '@/components/seo'
import { JobsList } from '@/features/jobs'
import { OrganizationInfo } from '@/features/organizations'
import { useQuery } from '@tanstack/react-query'
import { getJobsData, getOrganizationData } from './fetch-data'

const PublicOrganization = () => {
    const { data: organization } = useQuery({
        queryKey: ['organization'],
        queryFn: () => getOrganizationData(),
    })
    const { data: jobs } = useQuery({
        queryKey: ['jobs'],
        queryFn: () => getJobsData(),
    })

    if (!organization) return <NotFound />

    return (
        <>
            <Seo title={organization.name} />
            <Stack
                spacing="4"
                w="full"
                maxW="container.lg"
                mx="auto"
                mt="12"
                p="4"
            >
                <OrganizationInfo organization={organization} />
                <Heading size="md" my="6">
                    Open Jobs
                </Heading>
                <JobsList
                    jobs={jobs}
                    organizationId={organization.id}
                    type="public"
                />
            </Stack>
        </>
    )
}

export default PublicOrganization
