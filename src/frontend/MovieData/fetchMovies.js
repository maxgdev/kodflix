import React, { useEffect, useState } from "react";

export default function FetchMovies() {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        console.log('Console.log: useEffect has run');
        const getCountries = async () => {
            const response = await fetch('/rest/shows');
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            setMovies(jsonResponse);
        }
        getCountries();
    }, []);

return (
    <div className='App'>
        <ul>
            {
                movies.map(movie => {
                   return  <li key={movie.id}>{movie.title}</li>
                })
            }
        </ul>
    </div>
);
}