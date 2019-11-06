import React from 'react';
import { Link } from 'react-router-dom';
import './Details.css';
export default function Details() {
    return (
      <div>
        <h1>Movie Details Page</h1>
        <div className='detailsContainer'>
          <p className='item'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate rhoncus facilisis. Aliquam in mauris ut augue mattis pretium. Aenean vel elit urna. Fusce sit amet metus volutpat, efficitur lectus a, vestibulum nisi. Duis mollis nibh id venenatis blandit. Cras pharetra purus in arcu scelerisque, a pulvinar odio ullamcorper. Maecenas at lectus pulvinar, cursus purus ac, aliquet diam. In at venenatis dolor. Sed tincidunt imperdiet risus non semper.</p>
          <p className='item'>Quisque diam odio, cursus et ante a, varius commodo libero. Fusce eget metus urna. Vestibulum vulputate finibus tortor, sed vestibulum quam volutpat eget. Praesent consequat sapien ac porta fermentum. Proin vestibulum augue sit amet auctor scelerisque. Etiam euismod dignissim mauris ac commodo</p>
        </div>
        <Link to='/'>Back to homepage</Link>
      </div>
    )
  }