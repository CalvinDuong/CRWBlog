import React from 'react'; 
import Footer from '../Components/Footer';
import BlogPage from '../Components/BlogPage';

const riley_data = {
  category: 'PRODUCT MANAGER',
  title: 'Riley Horita Loves Everything Nintendo',
  subtitle: 'Life is all about having fun and making memories with the people who matter.',
  image: '/public/william_blog_pic.JPG',
  date: 'October 24, 2023',
  content: 'hello world'
}

function Riley() {
  return (
    <div>
    <BlogPage blogPageData={riley_data}/>
    <Footer/>
  </div>
)
}
    export default Riley