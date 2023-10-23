import React from 'react';
import './App.css';
    function Navbar() {
      return (
        <div className="nav">
        <div className="nav-title-container">
          <a href= "/home" className="site-title"> CRW </a>
        </div>
        <ul>
            <a href= "/riley"> <li>About </li></a>
            <a href= "/calvin"> <li> Recent Articles </li></a>
        </ul>
      </div>
    )
  }

 export default Navbar