import React from 'react';
import matrixMovie from './matrix-movie.jpg';
import fullMetalMovie from './fullmetal.png';
import bleachMovie from './bleach-movie.jpg';
import ironMan4Movie from './iron-man-4.jpg';
import avengersEndgameMovie from './avengers-endgame.png';
import blackPantherMovie from './black-panther.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={matrixMovie}  alt="matrix movie" />
        <img src={fullMetalMovie}  alt="full metal alchemist movie" />
        <img src={bleachMovie}  alt="Bleach movie" />
        <img src={ironMan4Movie} alt="Iron Man 4 movie" />
        <img src={avengersEndgameMovie}  alt="Avengers Endgame movie" />
        <img src={blackPantherMovie} alt="Black Panther movie" />
        <h1>
          6 Favorite Movies
        </h1>
 
      </header>
    </div>
  );
}

export default App;
