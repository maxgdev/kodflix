import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Details.css';
export default function Details() {
    let mData = [
      {title: 'The Matrix', img: 'matrixMovie', id:'matrix'},
      {title: 'Full Metal Alchemist', img: 'fullMetalMovie', id:'fullMetal'},
      {title: 'Bleach', img: 'bleachMovie', id:'bleach'},
      {title: 'Iron Man 4', img: 'ironMan4Movie', id:'ironMan4'},
      {title: 'Avengers Endgame', img: 'avengersEndgameMovie', id:'avengersEndgame'},
      {title: 'Black Panther', img: 'blackPantherMovie', id:'blackPanther'}
    ];
    let [message, setMessage] = useState(
      'Quisque diam odio, cursus et ante a, varius commodo libero. Vestibulum vulputate finibus tortor, sed vestibulum quam volutpat eget. Praesent consequat sapien ac porta fermentum. Proin vestibulum augue sit amet auctor scelerisque. Etiam euismod dignissim mauris ac commodo'
    );
    let [movie, setMovie] = useState({});
      let { details } = useParams();
    useEffect(() => { 
        let movieObj = mData.find((movie) => {
        console.log('movie.id: '+movie.id +' details: ' + details)
        return movie.id === details;
        // return movie.id === details;
        });
        debugger
        if (movieObj === undefined) { 
          setMessage("Ooops, it looks like this page doesn't exist :(");
          setMovie({});
        } else {
          setMessage(`The movie you selected is ${movieObj.title}`)
          setMovie(movieObj);
        }


    }, []);
    return (
      <div className='detailsContainer'>
        <h1>{movie.title}</h1>
        <div>
          <p className='item'>{ message }</p>
        </div>
        <Link to='/'>Back to homepage</Link>
      </div>
    )
  }