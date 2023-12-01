'use client'
import { Heading, Stack } from '@chakra-ui/react'
import { NotFound } from '@/components/not-found'
import { Seo } from '@/components/seo'
import { JobsList } from '@/features/jobs'
import { OrganizationInfo } from '@/features/organizations'
import { useQuery } from '@tanstack/react-query'

const PublicOrganization = () => {
    const { data: organization } = useQuery({
        queryKey: ['organization'],
        queryFn: () =>
            fetch('http://localhost:5000/organizations').then((res) =>
                res.json()
            ),
    })
    const { data: jobs } = useQuery({
        queryKey: ['jobs'],
        queryFn: () =>
            fetch('http://localhost:5000/jobs').then((res) => res.json()),
    })

    if (!organization) return <NotFound />

    return (
        <>
            <Seo title={organization[0].name} />
            <Stack
                spacing="4"
                w="full"
                maxW="container.lg"
                mx="auto"
                mt="12"
                p="4"
            >
                <OrganizationInfo organization={organization[0]} />
                <Heading size="md" my="6">
                    Open Jobs
                </Heading>
                <JobsList
                    jobs={jobs}
                    organizationId={organization[0].id}
                    type="public"
                />
            </Stack>
        </>
    )
}

export default PublicOrganization
