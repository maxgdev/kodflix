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
        <div className='flexItem'>
          <img src={matrixMovie}  alt="matrix movie" />
          <h3>Matrix</h3>
        </div>
        <div className='flexItem'>
        <img src={fullMetalMovie}  alt="full metal alchemist movie" />
          <h3>Full Metal Alchemist</h3>
        </div>
        <div className='flexItem'>
        <img src={bleachMovie}  alt="Bleach movie" />
          <h3>Bleach</h3>
        </div>
      </div>
      <div className="flexContianer">      
        <div className='flexItem'>
          <img src={ironMan4Movie} alt="Iron Man 4 movie" />
          <h3>Iron Man 4</h3>
        </div>
        <div className='flexItem'>
          <img src={avengersEndgameMovie}  alt="Avengers Endgame movie" />
          <h3>Iron Man 4</h3>
        </div>
        <div className='flexItem'>
          <img src={blackPantherMovie} alt="Black Panther movie" />
          <h3>Iron Man 4</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
