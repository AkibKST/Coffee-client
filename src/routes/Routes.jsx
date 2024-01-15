import User from '../components/User.jsx';
import AddCoffee from '../components/AddCoffee.jsx';
import UpdateCoffee from '../components/UpdateCoffee.jsx';
import SingUp from '../components/SignUp.jsx';
import SingIn from '../components/SignIn.jsx';
import App from '../App.jsx';

import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from '../components/ErrorPage.jsx';
import MyCart from '../components/MyCart.jsx';
import PrivateRoute from './PrivateRoute.jsx';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <App></App>,
          loader: () => fetch('http://localhost:5000/coffee')
        },
        {
          path: "addCoffee",
          element: <PrivateRoute><AddCoffee></AddCoffee></PrivateRoute>
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
          element: <PrivateRoute><User></User></PrivateRoute>,
          loader: () => fetch('http://localhost:5000/user')
        },
        {
          path: '/mycart',
          element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
        }
      ]
    }
  ]);

  export default router;