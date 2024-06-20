import Card from '@/components/Card'
import React from 'react'

const movies = [
  {
    "id": 8,
    "name": "The Good, the Bad and the Ugly",
    "image": "https://image.tmdb.org/t/p/w500/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
    "rating": 8.8
  },
  {
    "id": 9,
    "name": "Fight Club",
    "image": "https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
    "rating": 8.8
  },
  {
    "id": 10,
    "name": "Forrest Gump",
    "image": "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    "rating": 8.8
  },
  {
    "id": 1,
    "name": "The Shawshank Redemption",
    "image": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    "rating": 9.3
  },
  {
    "id": 2,
    "name": "The Godfather",
    "image": "https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
    "rating": 9.2
  },
  {
    "id": 3,
    "name": "The Dark Knight",
    "image": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "rating": 9.0
  },
  {
    "id": 5,
    "name": "Schindler's List",
    "image": "https://image.tmdb.org/t/p/w500/c8Ass7acuOe4za6DhSattE359gr.jpg",
    "rating": 8.9
  },
  {
    "id": 6,
    "name": "The Lord of the Rings: The Return of the King",
    "image": "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    "rating": 8.9
  }
]

const Suggest = () => {
  return (
    <div className="mx-auto max-w-7xl items-center justify-between">
      <p className='font-semibold py-4 text-xl'>All</p>
      <div className="w-full lg:container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {movies.map(movie => (
            <Card key={movie.id} movie={movie} url='/suggest' />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Suggest
