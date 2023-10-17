import React from 'react';
import './App.css';
import Riley from './pages/riley.jsx';
import Calvin from './pages/calvin.jsx';
import Home from './pages/home.jsx';
import Navbar from './Navbar';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/riley',
    element: <Riley />,
  },
  {
    path: '/calvin',
    element: <Calvin />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
