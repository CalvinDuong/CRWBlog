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
          <p>Hi! I’m Riley. I love listening to indietronica, alternative rock, and digital hardcore music. Some of my favorite artists are Bladee, Alex G, The Hellp, and Crystal Castles.</p>
        </div>
        <div class='box'>
          <h2>Calvin Duong</h2>
          <img class='about-pic' src="public/calvin.png" />
          <p>Hello ! I'm Calvin, and I love listening to RNB, Indie, Hardstyle, and, Classical music. Most current favorite artists are Alex G, Childish Gambino, and The Weeknd.</p>
        </div>
        <div class='box'>
          <h2>William Nguyen</h2>
          <img class='about-pic' src="public/will_about.jpg" />
          <p> Hey there! I'm Will, and I love fast music! Some genres I love include KPOP, EDM, Pop, and Classical.</p>
        </div>
      </div>
        <br />
        <br />
        <br />
    </div>
    
  );
}
export default About