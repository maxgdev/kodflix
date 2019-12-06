import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GalleryComponent from './GalleryComponent/GalleryComponent';
import Details from './Details/Details'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={GalleryComponent} />
        <Route exact path='/:details' component={Details}/>
      </div>
    </Router>
  );
}
export default App;
