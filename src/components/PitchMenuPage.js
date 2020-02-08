import React from 'react';

import { Link } from 'react-router-dom';

export default function HomePage(){

  return (
    <div>
      <h1 className="p-5 m-0">SONGSMITH PITCH</h1>

      <p className="">Below is a list of resources available for anyone interested in working on this web comic. *Spoiler warning*</p>

      <div className="p-4"></div>

      <p>
        <Link to="/pitch/the-main-pitch">The Main Pitch</Link>
      </p>

      <p>
        <Link to="/pitch/comic-excerpt">Comic Excerpt</Link>
      </p>

      <p>
        <Link to="/pitch/music-example">Music Example</Link>
      </p>

      <p>
        <Link to="/pitch/concept-art">Concept Art</Link>
      </p>

      <p>
        <Link to="/pitch/details-for-artists">Details For Artists</Link>
      </p>

      <p>
        <Link to="/pitch/cover-art-description">Cover Art Description</Link>
      </p>

      <p>
        <Link to="/pitch/mood-board">Mood Board</Link>
      </p>

    </div>
  );
}
