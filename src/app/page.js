"use client"
import React, { useState } from 'react';
import Card from "@/components/Card";

const movies = [
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
  },
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
  }
]


export default function Home() {

  const [activeTab, setActiveTab] = useState('All');

  const tabs = [
    { name: 'All', content: 'All' },
    { name: 'Movies', content: 'Movies' },
    { name: 'TV Shows', content: 'TV Shows' },
  ];

  return (
    <main className="mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">

      <div className="heading-home">
        <p className='font-semibold py-4 text-4xl'>MaileHereko</p>
        <p className='text-gray-500 py-2 text-sm'>
          List of the movies and TV Shows, I, <span className="text-violet-800">Pramod Poudel </span> have watched till date. <br />
          Explore what I have watched and also feel free to make a suggestion. 😊
        </p>
      </div>

      <div className="search-box flex items-center gap-3 border rounded-md p-3 shadow-md my-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input
          type="text"
          placeholder="Search Movie or TV Shows"
          className="outline-none flex-grow text-gray-700"
        />
      </div>

      <div className="tabs-container">
        <div className="flex space-x-4 mb-6 mt-16 tabs">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`py-2 px-6 rounded ${activeTab === tab.name ? 'bg-indigo-500 text-white' : 'text-gray-600'
                }`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="tab-content">
          {tabs.map((tab) => (
            <div key={tab.name} className={`${activeTab === tab.name ? 'block' : 'hidden'}`}>
              {tab.content}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lg:container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {movies.map(movie => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </main>
  );
}
