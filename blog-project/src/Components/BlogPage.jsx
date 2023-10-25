import React from 'react';
import Navbar from '../Navbar.jsx';
import './BlogPage.css';

// {category, title, subtitle, image, caption, date, content}

function BlogPage({blogPageData}) {
    return (
        <div>
            <Navbar/>
            <div class='title-section'>
                <h4 className='category'>{blogPageData.category}</h4>
                <h1 className='title'>{blogPageData.title}</h1>
                <h2 className='subtitle'>{blogPageData.subtitle}</h2>
                <img className='blog-page-image'src={blogPageData.image} alt=""/>
                <p className='blog-body'>{blogPageData.content}</p>
        </div>
        </div>
    )
}

export default BlogPage