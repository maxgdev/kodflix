import React from 'react';
import './GalleryComponent.css';
import MoviesFn from '../MovieData/MovieFn';
import getMovies from '../MovieData/getMovies';

export default function GalleryComponent() {
  return (
    <div>
      <h1>Kodiri Kodflix App</h1>
      <div className="container">
        <MoviesFn data={getMovies}/>
      </div>
    </div>
  )
}