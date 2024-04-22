import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { HeaderComponent } from "./src/components/HeaderComponent";
import { BodyComponent } from "./src/components/BodyComponent";
import "remixicon/fonts/remixicon.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { HelpPage } from "./src/components/Help";
import { Error } from "./src/components/Error";
import { ContactPage } from "./src/components/Contact";
import { RestaurentDetailPage } from "./src/components/RestaurentDetail";
import UserLoggedData from "./src/utils/UserContext";

// I am making a whole Application component in which my header hero section and footer will come
const ApplicationMainDiv = () => {
  const [name, setName] = useState("Default");
  useEffect(() => {
    const data = {
      name: "",
    };
    setName(data.name);
  }, []);
  return (
    <>
      <UserLoggedData.Provider value={{ loggedinUser: name, setName }}>
        <HeaderComponent />

        <Outlet></Outlet>
      </UserLoggedData.Provider>
    </>
  );
};
const Aboutpage = lazy(() => import("./src/components/About"));

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <ApplicationMainDiv />,
    children: [
      {
        path: "/",
        element: <BodyComponent></BodyComponent>,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h2>Your about is loading</h2>}>
            <Aboutpage></Aboutpage>
          </Suspense>
        ),
      },
      {
        path: "/help",
        element: <HelpPage></HelpPage>,
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>,
      },
      {
        path: "/restaurent/:resId",
        element: <RestaurentDetailPage />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.querySelector(".container"));
root.render(<RouterProvider router={approuter} />);
