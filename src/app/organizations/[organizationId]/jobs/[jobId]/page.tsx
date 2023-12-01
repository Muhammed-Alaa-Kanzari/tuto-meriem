import {
    HydrationBoundary,
    QueryClient,
    dehydrate,
} from '@tanstack/react-query'
import PublicJobPageClient from './public-jobs'

export const PublicJobPage = async ({
    params,
}: {
    params: { jobId: string }
}) => {
    const { jobId } = params
    const queryClient = new QueryClient()
    queryClient.prefetchQuery({
        queryKey: ['organization'],
        queryFn: () =>
            fetch('http://localhost:5000/organizations').then((res) =>
                res.json()
            ),
    })
    queryClient.prefetchQuery({
        queryKey: ['job'],
        queryFn: () =>
            fetch('http://localhost:5000/jobs').then((res) => res.json()),
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <div>
                <PublicJobPageClient jobId={jobId} />
            </div>
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
