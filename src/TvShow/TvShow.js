import React from 'react';
import { Link } from 'react-router-dom';
import './TvShow.css';
export default function TvShow(props) {
    return <Link to='/details' className='flexItem'>
      <img src={props.movieImage} alt={props.movieName + ' movie'} />
      <div className='overlay'>{props.movieName}</div>
    </Link>
  }
