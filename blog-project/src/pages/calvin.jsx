import React from 'react'; 
import Footer from '../Components/Footer';
import BlogPage from '../Components/BlogPage';



const calvin_data = {
  category: 'PRODUCT MANAGER',
  title: 'Calvin Duong Loves Everything Nintendo',
  subtitle: 'Life is all about having fun and making memories with the people who matter.',
  image: '/public/william_blog_pic.JPG',
  date: 'October 24, 2023',
  content: 'hello world'
}

function Calvin() {
    return (
        <div>
        <BlogPage blogPageData={calvin_data}/>
        <Footer/>
      </div>
    )
    }

    export default Calvin