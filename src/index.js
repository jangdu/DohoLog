import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import NewPost from "./pages/NewPost";
import Home from "./pages/Home";
import AllPosts from "./pages/AllPosts";
import PostDetail from "./pages/PostDetail";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ProtectedRoute from "./pages/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <Home /> },
      // { path: "/products", element: <AllProducts /> },
      {
        path: "/posts/new",
        element: (
          <ProtectedRoute requireAdmin>
            <NewPost />
          </ProtectedRoute>
        ),
      },
      {
        path: "/posts",
        element: <AllPosts />,
      },
      {
        path: "/posts:id",
        element: <PostDetail />,
      },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      // { path: "/products/:id", element: <ProductDetail /> },
      // {
      //   path: "/carts",
      //   element: (
      //     <ProtectedRoute>
      //       <MyCart />
      //     </ProtectedRoute>
      //   ),
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
