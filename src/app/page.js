'use client';
import React, { useState, useEffect } from 'react';
import Suggest from './(pages)/suggest/page';
import Movies from './(pages)/movies/page';
import TvShows from './(pages)/tvshows/page';
import Card from '@/components/Card';
import api from '@/hooks/api';

export default function Home() {
  const [activeTab, setActiveTab] = useState('All');
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);


  const fetchSearchResults = async (query) => {
    setLoading(true);
    try {
      const response = await api.get('/search/multi', {
        params: {
          query: query
        }
      });
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (searchInput) {
      const delayDebounceFn = setTimeout(() => {
        fetchSearchResults(searchInput);
      }, 300);

      return () => clearTimeout(delayDebounceFn);
    } else {
      setSearchResults([]);
    }
  }, [searchInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };


  const tabs = [
    { name: 'All', component: <Suggest /> },
    { name: 'Movies', component: <Movies /> },
    { name: 'TV Shows', component: <TvShows /> },
  ];

  return (
    <main className="mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">

      <div className="heading-home">
        <p className='font-semibold py-4 text-4xl'>MaileHereko</p>
        <p className='text-gray-500 py-2 text-sm'>
          List of the movies and TV Shows, I, <span className="text-violet-800">Pramod Poudel</span> have watched till date. <br />
          Explore what I have watched and also feel free to make a suggestion. 😊
        </p>
      </div>

      <form onSubmit={handleSubmit} className="search-box flex items-center gap-3 border rounded-md p-3 shadow-md my-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input
          type="text"
          placeholder="Search Movie or TV Shows"
          className="outline-none flex-grow text-gray-700"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
      </form>

      {loading && <p>Loading...</p>}
      {searchInput ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {searchResults.map((result) => (
            <Card
              key={result.id}
              movie={result}
              media_type={result.media_type}
              url={
                result.media_type === 'movie' ? '/movies'
                  : result.media_type === 'tv' ? '/tvshows'
                    : '/suggest'
              }
            />
          ))}
        </div>
      ) : (
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
                {tab.component}
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
