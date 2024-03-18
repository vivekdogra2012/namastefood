import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import ContactUs from './components/contactus';
import Error from "./components/Error";
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import RestraurantMenu from "./components/RestraurantMenu";

function App() {
  return (
    <div className='app-main'>
      <Header />
      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
        errorElement: <Error />,
      },{
        path: '/about',
        element: <About />,
        errorElement: <Error />,
      },{
        path: '/contactus',
        element: <ContactUs />,
        errorElement: <Error />,
      },{
        path: '/restraurants/:resId',
        element: <RestraurantMenu />,
      }
    ],
  },
]);

// export default <RouterProvider router={appRouter}/>;

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
