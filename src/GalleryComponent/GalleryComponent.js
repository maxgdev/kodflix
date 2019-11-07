import React from 'react';
import TvShow from '../TvShow/TvShow'
import './GalleryComponent.css';
import matrixMovie from '../images/matrix-movie.jpg';
import fullMetalMovie from '../images/fullmetal.png';
import bleachMovie from '../images/bleach-movie.jpg';
import ironMan4Movie from '../images/iron-man-4.jpg';
import avengersEndgameMovie from '../images/avengers-endgame.png';
import blackPantherMovie from '../images/black-panther.jpg';
export default function GalleryComponent() {
    return (
      <div>
        <h1>Kodiri Kodflix App v0.01</h1>
        <div className="flexContianer">
          <TvShow id='matrix' movieImage={matrixMovie} movieName='Matrix' />
          <TvShow  id='fullMetal' movieImage={fullMetalMovie} movieName='Full Metal Alchemist' />
          <TvShow  id='bleach' movieImage={bleachMovie} movieName='Bleach' />
        </div>
        <div className="flexContianer">
          <TvShow movieImage={ironMan4Movie} movieName='Iron Man 4' />
          <TvShow movieImage={avengersEndgameMovie} movieName='Avengers Endgame' />
          <TvShow movieImage={blackPantherMovie} movieName='Black Panther' />
        </div>
      </div>
    )
  }