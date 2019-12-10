import React from 'react';
import TvShow from '../TvShow/TvShow'
import movieData from './getMovies';

export default function MovieFn() {
    return movieData().map(movie => (
        <TvShow key={movie.id} id={movie.id} movieImage={movie.img} movieName={movie.title} />
     ));
  }
