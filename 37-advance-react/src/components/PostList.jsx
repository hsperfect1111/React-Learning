// import Post from "./Post";
// // Ye wali PostList aa rahi hai store usme hai post
// import { PostList as PostListData } from "../store/post-list-store";
// import { useContext } from "react";
// import WelcomeMessage from "./WelcomeMessage";

// const PostList = () => {
//   const { postList } = useContext(PostListData);

//   // 12.5
//   const handleGetPostClick = () => {
//     console.log("get posts clicked");
//   };

//   return (
//     <>
//       {/* 12.01 */}
//       {postList.length === 0 && (
//         <WelcomeMessage onGetPostsClick={handleGetPostClick} />
//       )}
//       {postList.map((post) => (
//         // Post component ke andar prop pass kar rahe hai.
//         <Post key={post.id} post={post} />
//       ))}
//     </>
//   );
// };

// export default PostList;

// 12.6.55
// import Post from "./Post";
// import { PostList as PostListData } from "../store/post-list-store";
// import { useContext } from "react";
// import WelcomeMessage from "./WelcomeMessage";

// const PostList = () => {
//   // Context se postList aur addInitialPosts function access kar rahe hain
//   const { postList, addInitialPosts } = useContext(PostListData);

//   const handleGetPostClick = () => {
//     fetch("https://dummyjson.com/posts")
//       .then((res) => res.json())
//       .then((data) => {
//         addInitialPosts(data.posts);
//       });
//   };

//   return (
//     <>
//       {postList.length === 0 && (
//         <WelcomeMessage onGetPostsClick={handleGetPostClick} />
//       )}
//       {postList.map((post) => (
//         <Post key={post.id} post={post} />
//       ))}
//     </>
//   );
// };

// export default PostList;

// 12.15.55
// import Post from "./Post";
// import { PostList as PostListData } from "../store/post-list-store";
// // import useState
// import { useContext, useState } from "react";
// import WelcomeMessage from "./WelcomeMessage";

// const PostList = () => {
//   const { postList, addInitialPosts } = useContext(PostListData);
//   // use useState
//   const [dataFetched, setDataFetched] = useState(false);

//   // dataFetched false hone par API call hogi aur fetched posts ko context me add kar diya jayega
//   if (!dataFetched) {
//     fetch("https://dummyjson.com/posts")
//       .then((res) => res.json())
//       .then((data) => {
//         addInitialPosts(data.posts);
//       });
//     setDataFetched(true);
//   }

//   return (
//     <>
//       {postList.length === 0 && <WelcomeMessage />}
//       {postList.map((post) => (
//         <Post key={post.id} post={post} />
//       ))}
//     </>
//   );
// };

// export default PostList;

// 12.22.6
// import Post from "./Post";
// import { PostList as PostListData } from "../store/post-list-store";
// import { useContext, useEffect } from "react";
// import WelcomeMessage from "./WelcomeMessage";

// const PostList = () => {
//   const { postList, addInitialPosts } = useContext(PostListData);

//   // API call sirf first render pe ho rahi hai using useEffect
//   useEffect(() => {
//     fetch("https://dummyjson.com/posts")
//       .then((res) => res.json())
//       .then((data) => {
//         addInitialPosts(data.posts);
//       });
//   }, []);

//   return (
//     <>
//       {postList.length === 0 && <WelcomeMessage />}
//       {postList.map((post) => (
//         <Post key={post.id} post={post} />
//       ))}
//     </>
//   );
// };

// export default PostList;

// 12.31
// import Post from "./Post";
// import { PostList as PostListData } from "../store/post-list-store";
// import { useContext, useEffect, useState } from "react";
// import WelcomeMessage from "./WelcomeMessage";

// const PostList = () => {
//   const { postList, addInitialPosts } = useContext(PostListData);
//   const [fetching, setFetching] = useState(false);

//   useEffect(() => {
//     setFetching(true);
//     console.log("fetch started");
//     fetch("https://dummyjson.com/posts")
//       .then((res) => res.json())
//       .then((data) => {
//         addInitialPosts(data.posts);
//         setFetching(false);
//         console.log("fetch returned");
//       });
//     console.log("fetch ended");
//   }, []);

//   return (
//     <>
//       {postList.length === 0 && <WelcomeMessage />}
//       {postList.map((post) => (
//         <Post key={post.id} post={post} />
//       ))}
//     </>
//   );
// };

// export default PostList;

// 12.38.20
// import Post from "./Post";
// import { PostList as PostListData } from "../store/post-list-store";
// import { useContext, useEffect, useState } from "react";
// import WelcomeMessage from "./WelcomeMessage";
// import LoadingSpinner from "./LoadingSpinner";

// const PostList = () => {
//   const { postList, addInitialPosts } = useContext(PostListData);
//   const [fetching, setFetching] = useState(false);

//   useEffect(() => {
//     setFetching(true);
//     fetch("https://dummyjson.com/posts")
//       .then((res) => res.json())
//       .then((data) => {
//         addInitialPosts(data.posts);
//         // server se jo aaya agar use hum empty set krde
//         // to phele Loading... likha aayega
//         // uske baad there are no post likha aa jayega
//         // addInitialPosts([]);
//         setFetching(false);
//       });
//   }, []);

//   return (
//     <>
//       {/* Agar fetching ki value true hai to mujhe spinner dikhana hai  */}
//       {fetching && <LoadingSpinner />}
//       {/* Agar fetching nhi ho rahi to WelcomeMessage aur postlist dikhao  */}
//       {!fetching && postList.length === 0 && <WelcomeMessage />}
//       {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
//     </>
//   );
// };

// export default PostList;

// 12.45
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import { useContext, useEffect, useState } from "react";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    // Create an AbortController to cancel the fetch request if needed
    // signal khud kuch nahi karta. Ye sirf fetch() ko batata hai:
    // "Agar controller bole request cancel karo, to is request ko cancel kar dena."
    const controller = new AbortController();
    const signal = controller.signal;

    // signal pass kr diya
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

    // Ye useEffect ka cleanup function hai.
    // Jab component screen se remove (unmount) hoga ya effect dobara run hone wala hoga, tab ye function automatically execute hoga.
    return () => {
      console.log("Cleaning up UseEffect");
      controller.abort();
    };
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;

// Notes :
// Ab API response aane mein 5 seconds lagte hain.

// Timeline:

// 0 sec  ---> API request start

// 2 sec  ---> User dusre page par chala gaya
//             PostList unmount ho gaya

// Cleanup function run
// controller.abort()

// 5 sec  ---> API response aata, lekin request pehle hi cancel ho chuki hai.

// Yani API ko beech mein hi rok diya.

// Agar controller.abort() na likhen to?
// 0 sec  ---> API request start

// 2 sec  ---> User page chhod deta hai

// 5 sec  ---> API response aa jata hai

// addInitialPosts()
// setFetching(false)

// Lekin PostList component to ab screen par hai hi nahi.

// Phir bhi response process hoga, jo unnecessary hai aur kuch situations mein bugs ya warnings ka reason ban sakta hai.
