import React from 'react';

import MusicPlayer from '../MusicPlayer.js';

export default function MusicExamplePage(){

  return (
    <div>
      <h1 className="p-5 m-0">Music Example</h1>

      <MusicPlayer show={true} song={"https://firebasestorage.googleapis.com/v0/b/songsmith-7042e.appspot.com/o/Music%2Fhallway-battle.mp3?alt=media&token=d95f5f50-d3b5-4013-8610-9c5c803f7e91"}/>

    </div>
  );
}
