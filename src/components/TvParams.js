"use client"
import useFetchDetails from '@/hooks/useFetchDetails'
import { useParams } from 'next/navigation'
import DetailsPage from './DetailsPage'

const TvParams = () => {
    const param = useParams()
    const { data: movieDetails, loading } = useFetchDetails(`/tv/${param?.id}`)

    console.log(param.id);
  
    if (loading) {
      return <p>Loading...</p>
    }
  
    if (!movieDetails) {
      return <p>No data available</p>
    }

    return <DetailsPage movieDetails={movieDetails} />;
}

export default TvParams