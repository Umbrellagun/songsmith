import React from 'react';

import { Link } from 'react-router-dom';

export default function HomePage(){

  return (
    <div>
      <div>SONGSMITH PITCH</div>

      <div>Below is a list of resources available for anyone interested in working on this web comic. *Spoiler warning*</div>

      <Link to="/pitch/the-main-pitch">The Main Pitch</Link>

      <Link to="/pitch/comic-excerpt">Comic Excerpt</Link>

      <Link to="/pitch/music-example">Music Example</Link>

      <Link to="/pitch/concept-art">Concept Art</Link>

      <Link to="/pitch/details-for-artists">Details For Artists</Link>

      <Link to="/pitch/cover-art-description">Cover Art Description</Link>

      <Link to="/pitch/mood-board">Mood Board</Link>

    </div>
  );
}
