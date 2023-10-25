import React from 'react';
import './App.css';
import Riley from './pages/Riley.jsx';
import Calvin from './pages/Calvin.jsx';
import Home from './pages/home.jsx';
import About from './pages/About.jsx';
import BlogPage from './pages/BlogPage';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

// {category, title, subtitle, image, caption, date, content}

const will_data = {
  category: 'PRODUCT MANAGER',
  title: 'William Nguyen Loves Everything Nintendo',
  subtitle: 'Life is all about having fun and making memories with the people who matter.',
  image: '/public/william_blog_pic.JPG',
  date: 'October 24, 2023',
  content: 'hello world'
}

const router = createBrowserRouter([
  {
    //keep this blank to default to home page
    path: '',
    element: <Home />,
  },
  {
    path: '/riley',
    element: <BlogPage blogPageData={will_data}/>,
  },
  {
    path: '/calvin',
    element: <BlogPage blogPageData={will_data}/>,
  },
  {
    path: '/william',
    element: <BlogPage blogPageData={will_data}/>,
  },
  {
    path: '/ab',
    element: <About/>,
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
