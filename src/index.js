import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Semantica } from './components/Outlet/Outlet';
import { Home } from './components/Home/Home';
import { Catalog } from './components/Catalog/Catalog';


const router = createBrowserRouter([{
  path: "/",
  element: <Semantica/>,
  // errorElement: <ErrorPage/>,
  children: [
    {
      path: "/",
      element: <Home/>
    },
    {
      path: '/catalog',
      element: <Catalog/>
    }
  ]
}])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
