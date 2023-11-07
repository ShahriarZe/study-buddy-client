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
import Update from './Components/AllAssignments/Update';
import PrivateRoute from './Routes/PrivateRoute';
import Submit from './Components/SubmitAssignment/Submit';
import SubmittedAssignment from './Components/SubmittedAssignment/SubmittedAssignment';
import MySubmission from './Components/MySubmission/MySubmission';

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
        element: <PrivateRoute>
          <CreateAssignment></CreateAssignment>
        </PrivateRoute>
      },
      {
        path: "/allassignments",
        element: <AllAssignments></AllAssignments>,
        loader: () => fetch('http://localhost:5000/assignments')
      },
      {
        path: "/viewassignment/:id",
        element: <PrivateRoute>
          <ViewAssignment></ViewAssignment>
        </PrivateRoute>,
        loader: () => fetch('http://localhost:5000/assignments')
      },
      {
        path: "/update/:id",
        element: <PrivateRoute>
          <Update></Update>
        </PrivateRoute>,
        loader: () => fetch('http://localhost:5000/assignments')
      },
      {
        path: "/submit/:id",
        element: <Submit></Submit>,
        loader: () => fetch('http://localhost:5000/assignments'),
      },
      {
        path:"/allsubmissions",
        element:<SubmittedAssignment></SubmittedAssignment>,
        loader: ()=> fetch('http://localhost:5000/submissions')
      },
      {
        path:"/mysubmissions",
        element:<MySubmission></MySubmission>,
        loader: ()=> fetch('http://localhost:5000/submissions')
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
