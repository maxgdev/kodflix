import React from 'react';
import matrixMovie from './images/matrix-movie.jpg';
import fullMetalMovie from './images/fullmetal.png';
import bleachMovie from './images/bleach-movie.jpg';
import ironMan4Movie from './images/iron-man-4.jpg';
import avengersEndgameMovie from './images/avengers-endgame.png';
import blackPantherMovie from './images/black-panther.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Kodiri Kodflix App v0.01</h1>
      <div className="flexContianer">
        <TvShow movieImage={matrixMovie} movieName='Matrix' />
        <TvShow movieImage={fullMetalMovie} movieName='Full Metal Alchemist' />
        <TvShow movieImage={bleachMovie} movieName='Bleach' />
      </div>
      <div className="flexContianer">
        <TvShow movieImage={ironMan4Movie} movieName='Iron Man 4' />
        <TvShow movieImage={avengersEndgameMovie} movieName='Avengers Endgame' />
        <TvShow movieImage={blackPantherMovie} movieName='Black Panther' />
      </div>
    </div>
  );
}

function TvShow(props) {
  return <div className='flexItem'>
    <img src={props.movieImage} alt={props.movieName + ' movie'} />
    <div className='overlay'>{props.movieName}</div>
  </div>
}
export default App;
