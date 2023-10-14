import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Details, ErrorPage, Home, Root } from './pages';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children:[
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/details/:name",
          element: <Details/>,
        }
      ]
    },
   
  ]);
  return (
    <>
       <RouterProvider router={router} />
       <ToastContainer />
    </>
  )
}

export default App
