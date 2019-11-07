import React from 'react';
import matrixMovie from '../images/matrix-movie.jpg';
import fullMetalMovie from '../images/fullmetal.png';
import bleachMovie from '../images/bleach-movie.jpg';
import ironMan4Movie from '../images/iron-man-4.jpg';
import avengersEndgameMovie from '../images/avengers-endgame.png';
import blackPantherMovie from '../images/black-panther.jpg';
import TvShow from '../TvShow/TvShow'

let movieData = [
    {title: 'The Matrix', img:matrixMovie, id:'matrix'},
    {title: 'Full Metal Alchemist', img:fullMetalMovie, id:'fullMetal'},
    {title: 'Bleach', img:bleachMovie, id:'bleach'},
    {title: 'Iron Man 4', img:ironMan4Movie, id:'ironMan4'},
    {title: 'Avenges Endgame', img:avengersEndgameMovie, id:'avengersEndgame'},
    {title: 'Black Panther', img:blackPantherMovie, id:'blackPanther'}
];


export default function MovieFn() {
    return movieData.map(movie => {
        return <TvShow id={movie.id} movieImage={movie.img} movieName={movie.title} />
    });
  }
//   export default movieData;