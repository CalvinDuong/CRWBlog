import React from 'react';
    function Navbar() {
      return (
        <nav className="nav">
        <div className="nav-title-container">
          <a href= "/home" className="site-title"><strong>Husband Calling </strong>&nbsp;Contest</a>
        </div>
        <ul>
          <li className= "active">
            <a href= "/riley">Riley</a>
            </li>
            <li className= "Also">
            <a href= "/calvin">Calvin</a>
          </li>
        </ul>
      </nav>
    )
  }

 export default Navbar