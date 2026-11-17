// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import Sidebar from "../components/Sidebar";
// import CreatePost from "../components/CreatePost";
// import PostList from "../components/PostList";
// import { useState } from "react";
// import PostListProvider from "../store/post-list-store";

// function App() {
//   const [selectedTab, setSelectedTab] = useState("Home");
//   return (
//     // Q. yaha wrap PostList.Provider se kyu nhi kiya?
//     // A. yahan indirectly wrap kiya gaya hai
//     // {/* <PostList.Provider>ko post-list-store.jsx file me ek custom wrapper component bana diya hai: PostListProvider */}
//     // isiliye yahan indirectly wrap kiya gaya hai
//     <PostListProvider>
//       <div className="app-container">
//         <Sidebar
//           selectedTab={selectedTab}
//           setSelectedTab={setSelectedTab}
//         ></Sidebar>
//         <div className="content">
//           <Header></Header>
//           {selectedTab === "Home" ? (
//             <PostList></PostList>
//           ) : (
//             <CreatePost></CreatePost>
//           )}
//           <Footer></Footer>
//         </div>
//       </div>
//     </PostListProvider>
//   );
// }

// export default App;

// 14.4.37
// move kr diya humne App.jss aur css file ko routes folder me
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import Sidebar from "../components/Sidebar";
// import CreatePost from "../components/CreatePost";
// import PostList from "../components/PostList";
// import { useState } from "react";
// import PostListProvider from "../store/post-list-store";

// function App() {
//   const [selectedTab, setSelectedTab] = useState("Home");
//   return (
//     <PostListProvider>
//       <div className="app-container">
//         <Sidebar
//           selectedTab={selectedTab}
//           setSelectedTab={setSelectedTab}
//         ></Sidebar>
//         <div className="content">
//           <Header></Header>
//           {selectedTab === "Home" ? (
//             <PostList></PostList>
//           ) : (
//             <CreatePost></CreatePost>
//           )}
//           <Footer></Footer>
//         </div>
//       </div>
//     </PostListProvider>
//   );
// }

// export default App;

// 14.16.38
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import PostListProvider from "../store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          {/* 14.17.48
            shared element use krne hai to hume Layout Routes use krne pdte hai 
            aur use krte hai Outlet component ke base pr  */}
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
