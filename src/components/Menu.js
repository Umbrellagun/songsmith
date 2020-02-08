import React from 'react';

import { Link } from 'react-router-dom';

import { Nav, Button } from 'react-bootstrap';

export default function Menu(){

  // <div className="row">
  return (

      <Nav className="navbar row justify-content-center navbar-expand-lg navbar-dark bg-dark">
        <div className="col-2 d-none d-sm-block"></div>
        <div className="col p-0">

        {/*Mobile Hamburger Menu Icon*/}
        <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </Button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">

          <ul className="navbar-nav">

            <li className="nav-item active">
              <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Archives
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link to="/" className="dropdown-item">Characters</Link>
                <Link to="/" className="dropdown-item">Music</Link>
                <Link to="/" className="dropdown-item">Story</Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Pitch
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link to="/pitch/the-main-pitch" className="dropdown-item">The Main Pitch</Link>
                <Link to="/pitch/comic-excerpt" className="dropdown-item">Comic Excerpt</Link>
                <Link to="/pitch/music-example" className="dropdown-item">Music Example</Link>
                <Link to="/pitch/concept-art" className="dropdown-item">Concept Art</Link>
                <Link to="/artist-details" className="dropdown-item">Details for Artists</Link>
                <Link to="/pitch/cover-art-description" className="dropdown-item">Cover Art Description</Link>
                <Link to="/pitch/mood-board" className="dropdown-item">Mood Board</Link>
              </div>
            </li>

          </ul>
        </div>
      </div>
      <div className="col-2"></div>
      </Nav>


  );
}
// </div>
