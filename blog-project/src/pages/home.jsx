import React from 'react'; 
import Navbar from '../Navbar';
import ArticleComp from '../ArticleComp'; 
import Footer from '../footer';
function Home() {
    return (
      <div>
        <Navbar />
        <ArticleComp heading = "Article 1" description = "hi"/>
        <ArticleComp heading = "Article 2" description = "my name "/>
        <ArticleComp heading = "Article 3"/>
        <ArticleComp heading = "Article 4"/>
        <ArticleComp heading = "Article 5"/>
        <ArticleComp heading = "Article 6"/>
        <ArticleComp heading = "Article 6"/>
        <Footer/>
      </div>
      
    );
    }

    export default Home