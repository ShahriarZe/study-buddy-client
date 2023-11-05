import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import AuthProvider from './Providers/AuthProvider';
import CreateAssignment from './Components/CreateAssignment/CreateAssignment';
import AllAssignments from './Components/AllAssignments/AllAssignments';
import ViewAssignment from './Components/ViewAssignment/ViewAssignment';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/createAssignment",
        element: <CreateAssignment></CreateAssignment>
      },
      {
        path: "/allassignments",
        element: <AllAssignments></AllAssignments>,
        loader:()=>fetch('http://localhost:5000/assignments')
      },
      {
        path: "/viewassignment/:id",
        element: <ViewAssignment></ViewAssignment>,
        loader:()=>fetch('http://localhost:5000/assignments')
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
