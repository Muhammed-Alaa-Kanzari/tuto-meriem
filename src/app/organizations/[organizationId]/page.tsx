'use client'
import {
    HydrationBoundary,
    QueryClient,
    dehydrate,
} from '@tanstack/react-query'
import PublicOrganization from './public-organization'
import { getJobsData, getOrganizationData } from './fetch-data'

function PublicOrganizationPage() {
    const queryClient = new QueryClient()
    queryClient.prefetchQuery({
        queryKey: ['organization'],
        queryFn: () => getOrganizationData(),
    })
    queryClient.prefetchQuery({
        queryKey: ['jobs'],
        queryFn: () => getJobsData(),
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <PublicOrganization />
        </HydrationBoundary>
    )
}

export default PublicOrganizationPage

// type PublicOrganizationPageProps = InferGetServerSidePropsType<
//     typeof getServerSideProps
// >
// export const getServerSideProps = async ({
//     params,
// }: GetServerSidePropsContext) => {
//     const organizationId = params?.organizationId as string

//     const [organization, jobs] = await Promise.all([
//         getOrganization(organizationId).catch(() => null),
//         getJobs(organizationId).catch(() => [] as Job[]),
//     ])

//     return {
//         props: {
//             organization,
//             jobs,
//         },
//     }
// }
