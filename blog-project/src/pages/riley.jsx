import React from 'react';
import Footer from '../Components/Footer';
import BlogPage from '../Components/BlogPage';

const riley_data = {
  category: 'PRODUCT MANAGER',
  title: 'Riley Horita Loves Everything Nintendo',
  subtitle: 'Life is all about having fun and making memories with the people who matter.',
  image: '/public/william_blog_pic.JPG',
  date: 'October 24, 2023',
  caption: 'hello world',
  name: 'Riley Horita',
  dateWritten: 'October 25, 2023',
  blogContent: 'Hello world! Put your blog content here!'
}

function Riley() {
  return (
    <div>
      <BlogPage blogPageData={riley_data} />
    </div>
  )
}
export default Riley