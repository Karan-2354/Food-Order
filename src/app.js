import { createElement as ce, lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import React from "react";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

//Default Import
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Fotter";
import About from "./components/About";
import Profile from "./components/Profile";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestrauntMenu from "./components/RestrauntMenu";
import { Provider } from "react-redux";
import store from "./utils/store";

//Named Import
import { Head } from "./components/Header";
import UserContext from "./utils/UserContext";

//Chunking
//code spiliting
//Lazy loading
//on demand loading

const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Karan Ribadiya",
    email: "karanribadiya@gmail.com",
  });
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user }}>
        <Header />
        {/*{Outlet}*/}
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

// Crete a Router
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restraunt/:id",
        element: <RestrauntMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

//passing element into root
//root.render(heading);
//root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
