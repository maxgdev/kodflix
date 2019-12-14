import React from 'react';

export default function Fetch() {
    function fetchMovies() {
        let fetchedMovies = fetch('http://localhost:3001/rest/shows')
            .then(response => response.json())
            .then(result => console.log(result));
        return null;
      }
    return (
        <div>
            <h1>Fetched Moviesd</h1>
            <h3>We found the following movies: </h3>
            <p>See console.log</p>
        </div>
    );
}
