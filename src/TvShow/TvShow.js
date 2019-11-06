import React from 'react';
import './TvShow.css';
export default function TvShow(props) {
    return <div className='flexItem'>
      <img src={props.movieImage} alt={props.movieName + ' movie'} />
      <div className='overlay'>{props.movieName}</div>
    </div>
  }
