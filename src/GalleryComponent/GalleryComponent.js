import React from 'react';
import './GalleryComponent.css';
import MoviesFn from '../MovieData/MovieData';
import MoviesData from '../MovieData/MovieData';
export default function GalleryComponent() {
  return (
    <div>
      <h1>Kodiri Kodflix App</h1>
      <div className="container">
        <MoviesFn data={MoviesData}/>
      </div>
    </div>
  )
}