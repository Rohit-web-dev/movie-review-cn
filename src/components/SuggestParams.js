"use client"
import useFetchDetails from '@/hooks/useFetchDetails'
import { useParams } from 'next/navigation'
import DetailsPage from './DetailsPage'

const SuggestParams = () => {
    const param = useParams()
    const { data: movieDetails, loading } = useFetchDetails(`/movie/${param?.id}`)
  
    if (loading) {
      return <p>Loading...</p>
    }
  
    if (!movieDetails) {
      return <p>No data available</p>
    }

    return <DetailsPage movieDetails={movieDetails} />;
}

export default SuggestParams
