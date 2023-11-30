import {
    HydrationBoundary,
    QueryClient,
    dehydrate,
} from '@tanstack/react-query'
import PublicJobPageClient from './client-component'
import { getJobsData, getOrganizationData } from '../../fetch-data'

export const PublicJobPage = async () => {
    const queryClient = new QueryClient()
    queryClient.prefetchQuery({
        queryKey: ['organization'],
        queryFn: () => getOrganizationData(),
    })
    queryClient.prefetchQuery({
        queryKey: ['job'],
        queryFn: () => getJobsData(),
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <PublicJobPageClient />
        </HydrationBoundary>
    )
}

export default PublicJobPage

// type PublicJobPageProps = InferGetServerSidePropsType<typeof getServerSideProps>
// export const getServerSideProps = async ({
//     params,
// }: GetServerSidePropsContext) => {
//     const organizationId = params?.organizationId as string
//     const jobId = params?.jobId as string

//     const [organization, job] = await Promise.all([
//         getOrganization(organizationId).catch(() => null),
//         getJob(jobId).catch(() => null),
//     ])

//     return {
//         props: {
//             job,
//             organization,
//         },
//     }
// }
