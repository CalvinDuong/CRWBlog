import React from 'react'; 
import Navbar from '../Navbar';
import Footer from '../footer';
import './riley.css'
function Riley() {
  return (
    <div>
      <Navbar />
      <h1>About Us</h1>
      <img class = "image" src="public/template1.jpg" />
      <h3>Hello! Welcome to our music blog. This website was created by Calvin Duong, Riley Horita, and idk. We are passionate about all things music and web development</h3>
      <br />
      <br />
      <br />
      <Footer/>
    </div>
    
  );
  }
    export default Riley