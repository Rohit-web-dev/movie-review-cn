"use client"
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const Card = ({ movie, url }) => {
  const imageURL = useSelector(state => state.movieData.imageURL);
  
  return (
    <Link href={`${url}/${movie?.id}`}>
      <div className="movie-card max-w-sm rounded overflow-hidden shadow-lg bg-white p-2 relative">
        <div className="relative">
          <img className="w-full rounded" src={`${imageURL}${movie?.poster_path}`} alt={movie?.name} />
          <div className="flex align-items-center gap-2 absolute top-2 left-2 movie-card text-orange-300 text-xs px-2 py-1 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            {(movie?.vote_average)?.toFixed(1)}
          </div>
        </div>
        <div className="py-4">
          <h2 className="font-medium text-base text-gray-400">{movie?.name || movie?.title}</h2>
        </div>
      </div>
    </Link>
  )
}

export default Card
