import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GalleryComponent from './GalleryComponent/GalleryComponent'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Kodiri Kodflix App v0.01</h1>
        <GalleryComponent />
      </div>
    </Router>
  );
}
export default App;
