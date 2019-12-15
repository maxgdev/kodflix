import React, { useState, useEffect } from 'react';
import './GalleryComponent.css';
import MoviesFn from '../MovieData/MovieFn';

export default function GalleryComponent() {
  const [ movies, setMovies ] = useState({});

  useEffect(() => {
    console.log('Console.log: useEffect has run');
    const getMovies = async () => {
        // const response = await fetch('/rest/shows');
        const response = await fetch('http://localhost:3001/rest/shows');
        const jsonResponse = await response.json();
        // console.log(jsonResponse);
        setMovies(jsonResponse);
    }
    getMovies();
}, []);

  return (
    <div>
      <h1>Kodiri Kodflix App</h1>
      <div className="container">
        <MoviesFn data={movies}/>
        {/* {console.log('movies object: ',movies)} */}
      </div>
    </div>
  )
}