"use client"
import DetailsPage from '@/components/DetailsPage'
import useFetchDetails from '@/hooks/useFetchDetails'
import { useParams } from 'next/navigation'

const page = () => {
  const param = useParams()
  const { data: movieDetails, loading } = useFetchDetails(`/movie/${param?.id}`)

  if (loading) {
    return <p>Loading...</p>
  }

  if (!movieDetails) {
    return <p>No data available</p>
  }

  return (
    <div className="mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
      <DetailsPage movieDetails={movieDetails} />
    </div>
  )
}

export default page
