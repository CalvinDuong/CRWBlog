import React from 'react'; 
import Footer from '../Components/Footer';
import BlogPage from '../Components/BlogPage';


const will_data = {
    category: 'PRODUCT MANAGER',
    title: 'William Nguyen Loves Everything Nintendo',
    subtitle: 'Life is all about having fun and making memories with the people who matter.',
    image: '/public/william_blog_pic.JPG',
    date: 'October 24, 2023',
    content: 'hello world'
  }

function Will() {
    return (
        <div>
        <BlogPage blogPageData={will_data}/>
        <Footer/>
      </div>
    )
    }
export default Will