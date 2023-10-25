import React from 'react';
import './App.css';
    function Navbar() {
      return (
        <div className="nav">
        <div className="nav-title-container">
          <a href= "/" className="site-title"> CRW </a>
        </div>
        <ul>
            <a href= "/about"> <li>About </li></a>
            <a href= "/home"> <li> Recent Articles </li></a>
        </ul>
      </div>
    )
  }

 export default Navbar