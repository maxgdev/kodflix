import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getMovies from '../MovieData/getMovies';
import './Details.css';

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      movie: {}
    };
  }

  componentDidMount() {
    let moviesId = this.props.match.params.moviesId;
    let movie = getMovies()
      .find((movie) => movie.id === moviesId);
    this.setState({ movie });
  }
  render() {
    if(this.state.movie === undefined) {
      return <Redirect to='/not-found' />
    } else {
      return (
        <div>
          <h1>{this.state.movie.name}</h1>
          <Link to='/'>Back to Home Page</Link>
        </div>
      )
    }
  }
}