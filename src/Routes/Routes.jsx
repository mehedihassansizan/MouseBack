import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import MouseBack from "../Pages/Home/Home/MouseBack/MouseBack";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <MouseBack></MouseBack>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      }
    ]
  },
]);

export default router;

