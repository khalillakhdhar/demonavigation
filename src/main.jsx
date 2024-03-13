import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




import Accueil from "./routes/Accueil.jsx";
import Propos from "./routes/Propos.jsx";
import Elements from "./routes/Elements.jsx";
import Details from "./routes/Details.jsx";
import Navig from "./routes/Container.jsx";
const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<Navig></Navig>,
      children:
      [
        {
          path:"/home",
          element:<Accueil></Accueil>
        },
        {
          path:"/propos",
          element:<Propos></Propos>
        },
        {
          path:"/elements",
          element:<Elements></Elements>,
          
          
          
        },
        {
          path:"details/:id",
          element:<Details></Details>
        }
      
      ]
    }
 

]
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
