import React from 'react'; 
import Navbar from '../Navbar';
import ArticleComp from '../ArticleComp'; 
import Footer from '../footer';
function Home() {
    return (
      <div>
        <Navbar />
        <ArticleComp heading = "Article 1" description = "Calvin" href = './calvin'/>
        <ArticleComp heading = "Article 2" description = "Riley" href = './riley'/>
        <ArticleComp heading = "Article 3"/>
        <br />
        <br />
        <br />
        <br />
        <Footer/>
      </div>
      
    );
    }

    export default Home