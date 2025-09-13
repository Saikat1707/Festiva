import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPages from "./Routes/MainPages";
import Authentication from "./pages/Authentication";
import Home from "./pages/Home";
import Host from "./pages/Host";
import Tickets from "./pages/Tickets";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Notification from "./pages/Notification";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import {ToastContainer} from "react-toastify"
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPages />,
    children: [
      { path: "/", element: <div className="section home_section"><Home /></div> },
      { path: "host", element: <div className="section host_section"><Host /></div> },
      { path: "ticket", element: <div className="section ticket_section"><Tickets /></div> },
      { path: "profile", element: <div className="section profile_section"><Profile /></div> },
      { path: "about", element: <div className="section about_section"><About /></div> },
      { path: "notification", element: <div className="section notification_section"><Notification /></div> },
      { path: "reviews", element: <div className="section reviews_section"><Reviews /></div> },
      { path: "contact", element: <div className="section contact_section"><Contact /></div> },
    ]
  },
  {
    path: "/auth",
    element: <Authentication />
  }
]);

const App = () => {
  return  <>
      <ToastContainer 
            position="top-right" 
            autoClose={3000} 
            hideProgressBar={false} 
            newestOnTop={false} 
            closeOnClick 
            rtl={false} 
            pauseOnFocusLoss 
            draggable 
            pauseOnHover
      />
      <RouterProvider router={router} />;
  </>
};

export default App;
