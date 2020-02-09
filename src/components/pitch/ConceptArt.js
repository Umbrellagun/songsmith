import React from 'react';

import { Link } from 'react-router-dom';

export default function ConceptArtPage(){

  return (
    <div>
      <h1 className="p-5 m-0">Concept Art</h1>

      <h5>Main Characters</h5>
      <Link to="/pitch/concept-art/evelyn-taggart" className="dropdown-item" style={{color: "#328096"}}>Evelyn Taggart</Link>
      <Link to="/pitch/concept-art/clint-herman" className="dropdown-item" style={{color: "#328096"}}>Clint Herman</Link>
      <Link to="/pitch/concept-art/jack-rossi" className="dropdown-item" style={{color: "#328096"}}>Jack Rossi</Link>

      <h5 style={{marginTop: 8}}>Villains</h5>
      <Link to="/pitch/concept-art/stray-notes" className="dropdown-item" style={{color: "#328096"}}>Stray Notes</Link>
    </div>
  );
}
