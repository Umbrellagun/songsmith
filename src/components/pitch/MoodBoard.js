import React from 'react';

export default function MoodBoardPage(){

  // <embed src="../mood-board.pdf" width="1800px" height="2100px"/>
  return (
    <div>
      <h1 className="p-5 m-0">Mood Board</h1>

      <p>The purpose of this mood board is to show a collection of aesthetics, at a quick glance, to describe how the comic is intended to feel, the vibe it will give off and elements it will play around with on multiple levels.</p>

      <div className="p-4"></div>

      <img src="https://firebasestorage.googleapis.com/v0/b/songsmith-7042e.appspot.com/o/Pitch%2Fmood-board.jpg?alt=media&token=218ce695-e3e8-4b14-bd4e-f5e3d596f98b" class="img-fluid" alt="Mood Board"/>
    </div>
  );
}
