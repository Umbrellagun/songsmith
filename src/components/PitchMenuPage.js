import React from 'react';

import { Link } from 'react-router-dom';

export default function HomePage(){

  return (
    <div>
      <h1 className="p-5 m-0">SONGSMITH PITCH</h1>

      <p className="">Below is a list of resources available for anyone interested in working on this web comic. *Spoiler warning*</p>

      <div className="p-4"></div>
      <p>
        <Link to="/pitch/the-main-pitch" className="dropdown-item" style={{color: "#328096"}}>The Main Pitch</Link>
      </p>
      <p>
        <Link to="/pitch/comic-excerpt" className="dropdown-item" style={{color: "#328096"}}>Comic Excerpt</Link>
      </p>
      <p>
        <Link to="/pitch/music-example" className="dropdown-item" style={{color: "#328096"}}>Music Example</Link>
      </p>
      <p>
        <Link to="/pitch/concept-art" className="dropdown-item" style={{color: "#328096"}}>Concept Art</Link>
      </p>
      <p>
        <Link to="/pitch/details-for-artists" className="dropdown-item" style={{color: "#328096"}}>Details For Artists</Link>
      </p>
      <p>
        <Link to="/pitch/cover-art-description" className="dropdown-item" style={{color: "#328096"}}>Cover Art Description</Link>
      </p>
      <p>
        <Link to="/pitch/mood-board" className="dropdown-item" style={{color: "#328096"}}>Mood Board</Link>
      </p>

    </div>
  );
}
