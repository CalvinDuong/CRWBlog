import React from 'react'; 
import Navbar from '../Navbar';
import ArticleComp from '../Components/ArticleComp'; 
import Footer from '../Components/Footer';
function Home() {
    return (
      <div>
        <ArticleComp heading = "Childish Gambinn The Goat" description = " Blends elements of hip-hop, R&B, funk, and soul, and his lyrics often touch on themes like race, identity, and social issues." href = './calvin' artistImage = "public/childish_gambino.jpg"/>
        <ArticleComp heading = "Article 2" description = "Riley" href = './riley'/>
        <ArticleComp heading = "Article 3" description = "Will" href = './will'/>
        <br />
        <br />
        <br />
        <br />
      </div>
      
    );
    }

    export default Home