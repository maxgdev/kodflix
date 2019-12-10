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
    let details = this.props.match.params.details;
    let movie = getMovies()
      .find((movie) => movie.id === details);
    this.setState({ movie });
  }
  render() {
    if(this.state.movie === undefined) {
      return <Redirect to='/not-found' />
    } else {
      return (
        <div>
          <h1>{this.state.movie.title}</h1>
          <div className='detailsContainer'>
            <div className='detailsSynopsis'>
              <p>{this.state.movie.synopsis}</p>
            </div>
            <div className='detailsImage'>
            <img src={this.state.movie.img} alt={this.state.movie.img + ' movie'} />
            </div>
          </div>
          <Link to='/'>Back to Home Page</Link>
        </div>
      )
    }
  }
}