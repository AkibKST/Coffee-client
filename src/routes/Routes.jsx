import User from '../components/User.jsx';
import AddCoffee from '../components/AddCoffee.jsx';
import UpdateCoffee from '../components/UpdateCoffee.jsx';
import SingUp from '../components/SignUp.jsx';
import SingIn from '../components/SignIn.jsx';
import App from '../App.jsx';

import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      // errorElement:
      children: [
        {
          path: "/",
          element: <App></App>,
          loader: () => fetch('http://localhost:5000/coffee')
        },
        {
          path: "addCoffee",
          element: <AddCoffee></AddCoffee>
        },
        {
          path: "updateCoffee/:id",
          element: <UpdateCoffee></UpdateCoffee>,
          loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
        },
        {
          path: "/signup",
          element: <SingUp></SingUp>
        },
        {
          path: "/signin",
          element: <SingIn></SingIn>
        },
        {
          path: '/users',
          element: <User></User>,
          loader: () => fetch('http://localhost:5000/user')
        }
      ]
    }
  ]);

  export default router;