import React from 'react';
import './App.css';
import Home from './pages/home.jsx';
import About from './pages/About.jsx';
import Calvin from './pages/calvin.jsx';
import Riley from './pages/riley.jsx';
import Will from './pages/will.jsx';

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

// {category, title, subtitle, image, caption, date, content}


const router = createBrowserRouter([
  {
    //keep this blank to default to home page
    path: '',
    element: <Home />,
  },
  {
    path: '/riley',
    element: <Riley/>,
  },
  {
    path: '/calvin',
    element: <Calvin/>,
  },
  {
    path: '/will',
    element: <Will/>,
  },
  {
    path: '/about',
    element: <About/>,
  },
  {
    path: '/home',
    element: <Home/>,
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
