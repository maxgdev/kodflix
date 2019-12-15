import React, { useEffect, useState } from "react";

export default function FetchMovies() {
    
    const fetchedMovies = {};
    useEffect(() => {
        console.log('Console.log: useEffect has run');
        const getMovies = async () => {
            // const response = await fetch('/rest/shows');
            const response = await fetch('http://localhost:3001/rest/shows');
            const jsonResponse = await response.json();
            console.log(jsonResponse);
        }
        fetchedMovies = getMovies();
    }, []);

return null;
}