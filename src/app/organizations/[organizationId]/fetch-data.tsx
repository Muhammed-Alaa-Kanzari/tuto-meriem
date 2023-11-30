export async function getOrganizationData() {
    const res = await fetch('http://localhost:5000/organizations', {
        cache: 'no-store',
    })
    const data = await res.json()
    console.log(data)
    return data
}

export async function getJobsData() {
    const res = await fetch('http://localhost:5000/jobs', { cache: 'no-store' })
    const data = await res.json()
    //console.log(data)
    return data
}
async function PublicOrganizationFetchData() {
    return
}

export default PublicOrganizationFetchData
