// 18.8.50
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./routes/App.jsx";
// // 18.12.40
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// // Double dot (..) ki jagah single dot (.) chahiye: src/main.jsx direct src folder me hai. .. likhne se ye src ke bhi bahar chala jata hai.
// import Bag from "./routes/Bag.jsx";
// import Home from "./routes/Home.jsx";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       //
//       { path: "/", element: <Home /> /*, loader: postLoader*/ },
//       {
//         path: "/bag",
//         element: <Bag />,
//         /*action: createPostAction,*/
//       },
//     ],
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>,
// );

// 18.39.14
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./routes/App.jsx";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Bag from "./routes/Bag.jsx";
// import Home from "./routes/Home.jsx";
// //
// import { Provider } from "react-redux";
// import myntraStore from "./store/index.js";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "/", element: <Home /> /*, loader: postLoader*/ },
//       {
//         path: "/bag",
//         element: <Bag />,
//         /*action: createPostAction,*/
//       },
//     ],
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     {/* Is line mein aap React Application ko Redux Store se connect kar rahe hain. */}
//     {/* Central Store Access: Iske andar poori App wrap karne se aapki application ke har ek component (jaise Home, Bag, App, etc.) ko myntraStore ka direct access mil jata hai. */}
//     <Provider store={myntraStore}>
//       <RouterProvider router={router} />
//     </Provider>
//   </StrictMode>,
// );

// 19.16.28
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./routes/Bag.jsx";
import Home from "./routes/Home.jsx";

import { Provider } from "react-redux";
import myntraStore from "./store/index.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> /*, loader: postLoader*/ },
      {
        path: "/bag",
        element: <Bag />,
        /*action: createPostAction,*/
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Is line mein aap React Application ko Redux Store se connect kar rahe hain. */}
    {/* Central Store Access: Iske andar poori App wrap karne se aapki application ke har ek component (jaise Home, Bag, App, etc.) ko myntraStore ka direct access mil jata hai. */}
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
