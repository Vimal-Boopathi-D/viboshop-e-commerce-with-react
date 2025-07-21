import React from 'react';
import ReactDOM from 'react-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'swiper/css';
import Home from './home/Home.jsx';
// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './blog/Blog.jsx';
const router = createBrowserRouter([
  {
    path: "/", element: <div><App/></div>, 
    children:[
       { path: "/", element: <Home/> } ,
       { path: "/blog", element: <Blog/> } 
        ]
  },
]);
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
