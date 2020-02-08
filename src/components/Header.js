import React from 'react';

import { Link } from 'react-router-dom';

export default function Header(){

  const titleStyle = {
    background: "url(../../songsmith-title.png) 50% 35% / 40% no-repeat",
    width: "100%",
    minHeight: 210
  };

  return (
    <div>
      <Link to="/">
        <div style={titleStyle} alt="title image"/>
      </Link>
    </div>
  );
}
