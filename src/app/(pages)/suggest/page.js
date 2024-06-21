"use client"
import Card from '@/components/Card'
import useFetch from '@/hooks/useFetch'

const Suggest = () => {
  const { data: moviesTopRated, loading } = useFetch('/movie/top_rated')
  const { data: moviesData } = useFetch('/movie/popular')

  return (
    <div className="mx-auto max-w-7xl items-center justify-between lg:px-8">
      <p className='font-semibold py-4 text-xl'>All ({(moviesTopRated?.length) + (moviesData?.length)})</p>
      <div className="w-full lg:container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {loading ? (
            <p>Loading...</p>
          ) : (
            moviesTopRated.map(movie => (
              <Card key={movie.id} movie={movie} url='/suggest' />
            ))
          )}

        </div>
      </div>
    </div>
  )
}

export default Suggest
