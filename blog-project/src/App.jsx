import React from 'react';
import './App.css';
import Riley from './pages/Riley.jsx';
import Calvin from './pages/calvin.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/riley',
    element: <Riley/>,
  },
  {
    path: '/calvin',
    element: <Calvin />,
  },

  {
    path: '/about',
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
