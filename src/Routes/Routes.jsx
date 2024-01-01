import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import MouseBack from "../Pages/Home/Home/MouseBack/MouseBack";
import Login from "../Pages/Login/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <MouseBack></MouseBack>
      }
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  }
]);

export default router;

