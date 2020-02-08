import React    from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu                from './components/Menu.js';
import Header              from './components/Header.js';

import HomePage            from './components/HomePage.js';
import PitchMenuPage       from './components/PitchMenuPage.js';
import ArchivesMenuPage    from './components/ArchivesMenuPage.js';

//pitch
import ArtistDetails       from './components/pitch/ArtistDetails.js';
import ComicExcerpt        from './components/pitch/ComicExcerpt.js';
import ConceptArt          from './components/pitch/ConceptArt.js';
import CoverArtDescription from './components/pitch/CoverArtDescription.js';
import MainPitch           from './components/pitch/MainPitch.js';
import MoodBoard           from './components/pitch/MoodBoard.js';
import MusicExample        from './components/pitch/MusicExample.js';

import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

function App(){

  return (
    <div className="App">

      <Router>

        <div className="container-fluid">
          <Header />
          <Menu />
        </div>

        <div className="container text-center">

          <Switch>
            <Route exact path="/pitch-menu" component={PitchMenuPage}/>
            <Route exact path="/archives" component={ArchivesMenuPage}/>

            <Route exact path="/pitch/details-for-artists" component={ArtistDetails}/>
            <Route exact path="/pitch/comic-excerpt" component={ComicExcerpt}/>
            <Route exact path="/pitch/concept-art" component={ConceptArt}/>
            <Route exact path="/pitch/cover-art-description" component={CoverArtDescription}/>
            <Route exact path="/pitch/the-main-pitch" component={MainPitch}/>
            <Route exact path="/pitch/mood-board" component={MoodBoard}/>
            <Route exact path="/pitch/music-example" component={MusicExample}/>

            <Route component={PitchMenuPage}/>

          </Switch>

        </div>
      </Router>

    </div>
  );
}

export default App;
