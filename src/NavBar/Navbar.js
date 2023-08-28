import React from 'react';
import './Navbar.css';

function Navbar({theme, toggleTheme}) {
  return (
    <div className={`Nav ${theme}`}>
      <button className="drktheme" onClick={toggleTheme}>
        <h5>{theme==="light"?"Dark Theme":"Light Theme"}</h5>
      </button>
    <a href="/" ><h5 className="navitems">Home</h5></a>
   <a href="/" ><h5 className="navitems1">About</h5></a>
    <a href="/" ><h5 className="navitems2">Contact Us</h5></a>
    </div>
  );
}

export default Navbar;
