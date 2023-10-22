import React from 'react';
    function createArticle(){
        return (
            <div className = "container">
                <img class = "image" src="public/template1.jpg" />
                <div class = "date"> 
                    <h3> Jan 1 2023 </h3>
                </div> 
                <div class = "title">
                    <h1> Article 1 </h1> 
                <div class = "article_descriptionn"> 
                    <p> Article 1 text default </p> 
                </div>
                </div>
            </div>
        )
    }

export default createArticle