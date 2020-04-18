import React from 'react';

import { Link } from 'react-router-dom';

export default function Header(){

  const titleStyle = {
    background: (window.screen.width <= 800) ? ("url(../../images/songsmith-title.png) center center / 100% no-repeat") : ("url(../../images/songsmith-title.png) 50% 35% / 40% no-repeat"),
    width: "100%",
    minHeight: (window.screen.width <= 800) ? (120) : (210)
  };

  return (
    <div>
      <Link to="/">
        <div style={titleStyle} alt="title image"/>
      </Link>
    </div>
  );
}
