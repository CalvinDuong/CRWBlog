import React from 'react'; 
import Navbar from '../Navbar';
import Footer from '../footer';
import './riley.css'
function About() {
  return (
    <div>
      <Navbar />
      <h1>About Us</h1>
      <div className="bio">
        <div className="riley">
        <img className = "image" src="public/rileypic.jpg" />
        <p> Hi I'm Riley, some music I am listening to aksjdfh;ajdf;asdnf;alskdnf;laksdf;alsdf;laskdfjaldsk </p>
        </div>
        <div className="calvin">
        <img className = "imgg" src="public/calvin.png" />
        <p> Hi I'm Calvin, some music I am listening to </p>
        </div>
        <div className="William">
        <img class = "images" src="public/template1.jpg" />
        <p>Hi I'm Calvin, some music I am listening to</p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer/>
     
    </div>
    
  );
  }
    export default About