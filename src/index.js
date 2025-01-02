import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Semantica } from './components/Outlet/Outlet';
import { Home } from './components/Home/Home';
import { Catalog } from './components/Catalog/Catalog';
import { Sylphy } from './components/Catalog/Heroes/Sylphy/Sylphy';
import { Roxy } from './components/Catalog/Heroes/Roxy/Roxy';
import { Eris } from './components/Catalog/Heroes/Eris/Eris';
import { Info } from './components/Info/Info';


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
    },
    {
      path: '/catalog/sylphy',
      element: <Sylphy/>
    },
    {
      path: '/catalog/roxy',
      element: <Roxy/>
    },
    {
      path: '/catalog/eris',
      element: <Eris/>
    },
    {
      path: '/info',
      element: <Info/>
    }
  ]
}])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
