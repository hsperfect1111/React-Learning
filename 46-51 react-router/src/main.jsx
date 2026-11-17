// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );

// 14.06.55
// Topic : 47 React Router
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// //
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import App from "./App.jsx";
// import CreatePost from "./components/CreatePost.jsx";

// // createBrowserRouter leta hai ek array
// const router = createBrowserRouter([
//   { path: "/", element: <App /> },
//   { path: "/create-post", element: <CreatePost /> },
// ]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     //
//     <RouterProvider router={router} />
//   </StrictMode>,
// );

// 14.13.30
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import App from "./routes/App.jsx";
// import CreatePost from "./components/CreatePost.jsx";

// const router = createBrowserRouter([
//   // me chahta hu ki router mere app ke andar jo aa raha hai sirf usko change kare pure ke pure UI ko nhi
//   { path: "/", element: <App /> }, // creating layout root for header, sidebar, footer dikhane ke liye
//   { path: "/", element: <App /> },
//   { path: "/create-post", element: <CreatePost /> },
// ]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>,
// );

// 14.15.33
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import App from "./routes/App.jsx";
// import CreatePost from "./components/CreatePost.jsx";
// import { PostList } from "./store/post-list-store.jsx";

// const router = createBrowserRouter([
//   // jo koi covering define krte hai tb isi ke andar ek dusra element define kr skte hai jiska naam hota hai children
//   // yani ki jb path "/" hoga tb App to dikhana hi dikhana aur uske children bhi dikhana
//   // children hoga ek array
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "/", element: <PostList /> },
//       { path: "/create-post", element: <CreatePost /> },
//     ],
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>,
// );

// 14.33.35 to main 14.34.42
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import App from "./routes/App.jsx";
// import CreatePost from "./components/CreatePost.jsx";
// import { PostList } from "./store/post-list-store.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       // jb bhi postList ko execute kare to phele postLoader ko excute kare
//       { path: "/", element: <PostList />, loader: postLoader },
//       { path: "/create-post", element: <CreatePost /> },
//     ],
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>,
// );

// 14.40.19
import React from "react";
import ReactDOM from "react-dom/client";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App.jsx";
import PostList, { postLoader } from "./components/PostList.jsx";

//
import CreatePost, { createPostAction } from "./components/CreatePost.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // jb bhi postList ko execute kare to phele postLoader ko excute kare
      { path: "/", element: <PostList />, loader: postLoader },
      {
        path: "/create-post",
        element: <CreatePost />,
        action: createPostAction,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
