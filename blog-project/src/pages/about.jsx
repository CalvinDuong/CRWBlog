import React from 'react';
import '../About.css'
function About() {
  return (
    <div class='about-page'>
      <h1 class="about-title">About Us</h1>
      <div class='row'>
        <div class='box'>
          <h2>Riley Horita</h2>
          <img class='about-pic' src="public/rileypic.jpg" />
        </div>
        <div class='box'>
          <h2>Calvin Duong</h2>
          <img class='about-pic' src="public/calvin.png" />
        </div>
        <div class='box'>
          <h2>William Nguyen</h2>
          <img class='about-pic' src="public/rileypic.jpg" />
        </div>
      </div>
    </div>
  );
}
export default About