"use client"
import React from 'react';
import { useSelector } from 'react-redux'

const DetailsPage = ({ movieDetails }) => {
  const imageURL = useSelector(state => state.movieData.imageURL);

  return (
    <div className="details-page">
      <div className="banner relative">
        <img className="w-full h-96 object-cover" src={`${imageURL}${movieDetails?.backdrop_path}`} alt={movieDetails?.name} />
        <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
        <div className="movie-name-container absolute inset-x-0 bg-opacity-50">
          <p className='text-sm text-gray-400'>MaileHereko / Movies</p>
          <h1 className="text-xl font-medium rounded my-2">
            {movieDetails?.name || movieDetails?.title}
          </h1>
        </div>
      </div>
      <div className="movie-details p-16">
        <div className="mt-12 flex flex-col lg:flex-row gap-12">
          <div className="flex-1 flex items-stretch">
            <img className="w-auto object-cover rounded" src={`${imageURL}${movieDetails?.backdrop_path}`} alt={movieDetails?.name} />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">{movieDetails?.name || movieDetails?.title}</h2>
              <p className="text-gray-500 my-8">
                {movieDetails?.overview || "Overview not available for this movie."}
              </p>
              <div className="w-20 rounded mb-4 flex items-center justify-center bg-black py-1 gap-1 mb-8 text-orange-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                {(movieDetails?.vote_average)?.toFixed(1)}
              </div>
              <p className="text-gray-500 mb-1">
                Type
              </p>
              <p className="text-gray-300 mb-6">
                {movieDetails?.type || 'Scripted'}
              </p>
              <p className="text-gray-500 mb-1">
                Release Date:
              </p>
              <p className="text-gray-300 mb-6">
                {movieDetails?.first_air_date || movieDetails?.release_date}
              </p>
              <p className="text-gray-500 mb-1">
                Status
              </p>
              <p className="text-gray-300 mb-6">
                {movieDetails?.status}
              </p>
              <p className="text-gray-500 mb-1">
                Genres
              </p>
              <p className="text-gray-300 flex">
                {
                  movieDetails?.genres?.map((item) => (
                    <span>{item?.name}, &nbsp;</span>
                  ))
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
