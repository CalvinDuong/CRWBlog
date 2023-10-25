import React from 'react';
import './articleComp.css';
    function createArticle({heading, description, href}){
        return (
        <div className = "container">
            <img class = "imagesss" src="public/template1.jpg" />
            <div class= "description_div">
                <div class = "date"> 
                    <h3> Jan 1 2023 </h3>
                </div> 
                <div class= 'other'>
                    <div class = "title">
                    <a href={href}>
                    <h1>{heading}</h1>
                    </a>
                    <div class = "article_description"> 
                        <p> {description} </p> 
                    </div>
                </div>
            </div>
            </div>
        </div>
        )
    }

export default createArticle