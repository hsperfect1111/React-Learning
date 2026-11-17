// 13.41.32
// import Post from "./Post";
// import { PostList as PostListData } from "../store/post-list-store";
// import { useContext, useEffect, useState } from "react";
// import WelcomeMessage from "./WelcomeMessage";
// import LoadingSpinner from "./LoadingSpinner";

// const PostList = () => {
//   const { postList, addInitialPosts } = useContext(PostListData);
//   const [fetching, setFetching] = useState(false);

//   /*useEffect(() => {
//     const controller = new AbortController();
//     const signal = controller.signal;

//     setFetching(true);
//     fetch("https://dummyjson.com/posts", { signal })
//       .then((res) => res.json())
//       .then((data) => {
//         addInitialPosts(data.posts);
//         setFetching(false);
//       })
//       // using Chatgpt : React Strict Mode component ko do baar mount karta hai. Is wajah se pehla fetch cancel
//       // (abort) ho jata hai, aur code me .catch() na hone ki wajah se browser me unhandled error crash dikhta hai.
//       .catch((error) => {
//         // 1. If it was aborted by React, ignore the error quietly
//         if (error.name === "AbortError") {
//           console.log("Fetch aborted safely");
//         } else {
//           // 2. If it's a real network error, log it and turn off the spinner
//           console.log("Actual fetch error:", error);
//           setFetching(false);
//         }
//       });

//     return () => {
//       console.log("Cleaning up UseEffect");
//       controller.abort();
//     };
//   }, []);*/

//   return (
//     <>
//       {fetching && <LoadingSpinner />}
//       {!fetching && postList.length === 0 && <WelcomeMessage />}
//       {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
//     </>
//   );
// };

// export default PostList;

// 13.53.31

// import Post from "./Post";
// import { PostList as PostListData } from "../store/post-list-store";
// import { useContext, useEffect, useState } from "react";
// import WelcomeMessage from "./WelcomeMessage";
// import LoadingSpinner from "./LoadingSpinner";

// const PostList = () => {
//   const { postList, addInitialPosts } = useContext(PostListData);

//   return (
//     <>
//       {fetching && <LoadingSpinner />}
//       {!fetching && postList.length === 0 && <WelcomeMessage />}
//       {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
//     </>
//   );
// };

// export default PostList;

// 13.57.21
// import Post from "./Post";
// import { PostList as PostListData } from "../store/post-list-store";
// import { useContext, useEffect, useState } from "react";
// import WelcomeMessage from "./WelcomeMessage";
// import LoadingSpinner from "./LoadingSpinner";

// const PostList = () => {
//   // fetching
//   const { postList, fetching } = useContext(PostListData);

//   return (
//     <>
//       {fetching && <LoadingSpinner />}
//       {!fetching && postList.length === 0 && <WelcomeMessage />}
//       {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
//     </>
//   );
// };

// export default PostList;

// 14.33.35
// import Post from "./Post";
// import { PostList as PostListData } from "../store/post-list-store";
// import { useContext, useEffect, useState } from "react";
// import WelcomeMessage from "./WelcomeMessage";
// import LoadingSpinner from "./LoadingSpinner";

// const PostList = () => {
//   const { postList, fetching } = useContext(PostListData);

//   return (
//     <>
//       {fetching && <LoadingSpinner />}
//       {!fetching && postList.length === 0 && <WelcomeMessage />}
//       {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
//     </>
//   );
// };

// /**
//  * React Router loader function to pre-fetch posts before rendering the route.
//  * @async
//  * @returns {Promise<Array>} Array of post objects extracted from the API response.
//  */
// export const postLoader = () => {
//   return fetch("https://dummy.json.com/posts")
//     .then((res) => res.json())
//     .then((data) => {
//       return data.posts;
//     });
// };

// export default PostList;

// 14.36.39
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import { useLoaderData } from "react-router-dom";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  // 14.37.06
  // useLoaderData() route ke loader function se aaya hua data component me access karne ke liye use hota hai.
  const postList = useLoaderData();

  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
