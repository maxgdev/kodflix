import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GalleryComponent from './GalleryComponent/GalleryComponent';
import Details from './Details/Details';
import NotFound from './NotFound/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={GalleryComponent} />
          <Route exact path='/not-found' component={NotFound}/>
          <Route exact path='/:details' component={Details}/>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
