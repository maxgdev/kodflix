import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Details.css';

export default function Details() {
    let [message, setMessage] = useState(
      'Quisque diam odio, cursus et ante a, varius commodo libero. Fusce eget metus urna. Vestibulum vulputate finibus tortor, sed vestibulum quam volutpat eget. Praesent consequat sapien ac porta fermentum. Proin vestibulum augue sit amet auctor scelerisque. Etiam euismod dignissim mauris ac commodo'
    );
    useEffect(()=> {
      setTimeout(()=> setMessage('Coming Soon :)'), 3000);
    }, []);
    return (
      <div className='detailsContainer'>
        <h1>Movie Details Page</h1>
        <div>
          <p className='item'>{message}</p>
        </div>
        <Link to='/'>Back to homepage</Link>
      </div>
    )
  }