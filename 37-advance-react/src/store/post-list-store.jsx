// import { createContext, useReducer } from "react";

// export const PostList = createContext({
//   postList: [],
//   addPost: () => {},
//   deletePost: () => {},
// });

// // koi bhi cheez dispatch (neeche addPost me dispatch hua hai woh yaha aayega) hoti hai to yaha aati hai reducer ke paas
// const postListReducer = (currPostList, action) => {
//   let newPostList = currPostList;
//   if (action.type === "DELETE_POST") {
//     newPostList = currPostList.filter(
//       (post) => post.id !== action.payload.postId,
//     );
//   }
//   // Check if the dispatched action is "ADD_POST"
//   // Create a new array
//   else if (action.type === "ADD_POST") {
//     newPostList = [action.payload, ...currPostList];
//   }
//   return newPostList;
// };

// const PostListProvider = ({ children }) => {
//   const [postList, dispatchPostList] = useReducer(
//     postListReducer,
//     // 11.58.48
//     // yaha array blank de diya
//     [],
//   );

//   const addPost = (userId, postTitle, postBody, reactions, tags) => {
//     // implementing addpost
//     dispatchPostList({
//       type: "ADD_POST",
//       payload: {
//         // google search : generate random id in js
//         id: Date.now(),
//         title: postTitle,
//         body: postBody,
//         reactions: reactions,
//         userId: userId,
//         tags: tags,
//       },
//     });
//   };

//   const deletePost = (postId) => {
//     dispatchPostList({
//       type: "DELETE_POST",
//       payload: {
//         postId,
//       },
//     });
//   };

//   return (
//     <PostList.Provider value={{ postList, addPost, deletePost }}>
//       {children}
//     </PostList.Provider>
//   );
// };

// export default PostListProvider;

// 12.8.16
// import { createContext, useReducer } from "react";

// export const PostList = createContext({
//   postList: [],
//   addPost: () => {},
//   // PostList context create kar rahe hain aur uski default values define kar rahe hain addInitialPosts
//   addInitialPosts: () => {},
//   deletePost: () => {},
// });

// const postListReducer = (currPostList, action) => {
//   let newPostList = currPostList;
//   if (action.type === "DELETE_POST") {
//     newPostList = currPostList.filter(
//       (post) => post.id !== action.payload.postId,
//     );
//   } else if (action.type === "ADD_INITIAL_POSTS") {
//     // Payload me mili saari posts ko new post list assign kar rahe hain
//     newPostList = action.payload.posts;
//   } else if (action.type === "ADD_POST") {
//     newPostList = [action.payload, ...currPostList];
//   }
//   return newPostList;
// };

// const PostListProvider = ({ children }) => {
//   const [postList, dispatchPostList] = useReducer(postListReducer, []);

//   const addPost = (userId, postTitle, postBody, reactions, tags) => {
//     dispatchPostList({
//       type: "ADD_POST",
//       payload: {
//         id: Date.now(),
//         title: postTitle,
//         body: postBody,
//         reactions: reactions,
//         userId: userId,
//         tags: tags,
//       },
//     });
//   };

//   // 12.8.38
//   const addInitialPosts = (posts) => {
//     dispatchPostList({
//       // type batata hai ki kaunsa kaam (action) karna hai reducer me
//       type: "ADD_INITIAL_POSTS",
//       // Ye action ka data (payload) hota hai jo reducer tak bheja ja raha hai.
//       // payload = wo actual data jo action ke saath send karte hain
//       payload: {
//         // API se fetch hui posts
//         posts,
//       },
//     });
//   };

//   const deletePost = (postId) => {
//     dispatchPostList({
//       type: "DELETE_POST",
//       payload: {
//         postId,
//       },
//     });
//   };

//   return (
//     <PostList.Provider
//       // value me hum wo data (addInitialPosts, etc) aur functions de rahe hain jo poore app me share honge.
//       value={{ postList, addPost, addInitialPosts, deletePost }}
//     >
//       {children}
//     </PostList.Provider>
//   );
// };

// export default PostListProvider;

// 13.11.34 (Notes only)
// const add = (num1, num2) => num1 + num2;
// undefined
// const add2 = (num1, num2) => num1 + num2;
// undefined
// add === add2
// false

// iska ans false kyu aaya?
// "Sir/Ma'am, iska result false aayega kyunki JavaScript me functions Objects hote hain, aur objects hamesha 'Reference' (Memory Address) se compare hote hain, 'Value' se nahi.
// Jab hum do alag-alag arrow functions banate hain, toh bhale hi unka code identical ho, par memory me unke liye do alag-alag locations allocate hoti hain.
// Kyunki add aur add2 do alag memory references ko point kar rahe hain, isliye === operator false return karta hai."

// Interviewer aapko impress karne ke liye yeh cross-question kar sakta hai: "Toh isse true kaise banayein?"
// Aapka jawaab hona chahiye:
// "Agar hum add2 = add; kar dein, toh add2 ko bhi add ka same memory reference mil jayega. Us case me add === add2 karne par true aayega."

// ab hum parent component se kisi function ko child component me as a prop pass karte hain, toh har parent re-render (repaint) par woh function
// memory me recreate ho jata hai. Is wajah se child component ko har baar ek naya reference milta hai aur woh bhi faltu me re-render hone lagta
// hai. Is unnecessary re-rendering ko avoid karne ke liye hum useCallback hook ka use karte hain, jo function ke reference ko memoize (save) kar leta hai.

// 13.13.42
// import { useCallback } from "react";
// import { createContext, useReducer } from "react";

// export const PostList = createContext({
//   postList: [],
//   addPost: () => {},
//   addInitialPosts: () => {},
//   deletePost: () => {},
// });

// const postListReducer = (currPostList, action) => {
//   let newPostList = currPostList;
//   if (action.type === "DELETE_POST") {
//     newPostList = currPostList.filter(
//       (post) => post.id !== action.payload.postId,
//     );
//   } else if (action.type === "ADD_INITIAL_POSTS") {
//     newPostList = action.payload.posts;
//   } else if (action.type === "ADD_POST") {
//     newPostList = [action.payload, ...currPostList];
//   }
//   return newPostList;
// };

// const PostListProvider = ({ children }) => {
//   const [postList, dispatchPostList] = useReducer(postListReducer, []);

//   const addPost = (userId, postTitle, postBody, reactions, tags) => {
//     dispatchPostList({
//       type: "ADD_POST",
//       payload: {
//         id: Date.now(),
//         title: postTitle,
//         body: postBody,
//         reactions: reactions,
//         userId: userId,
//         tags: tags,
//       },
//     });
//   };

//   const addInitialPosts = (posts) => {
//     dispatchPostList({
//       type: "ADD_INITIAL_POSTS",
//       payload: {
//         posts,
//       },
//     });
//   };

//   // save kr liya method memory me using useCalback
//   const deletePost = useCallback(
//     (postId) => {
//       dispatchPostList({
//         type: "DELETE_POST",
//         payload: {
//           postId,
//         },
//       });
//     },
//     [dispatchPostList],
//   );

//   return (
//     <PostList.Provider
//       value={{ postList, addPost, addInitialPosts, deletePost }}
//     >
//       {children}
//     </PostList.Provider>
//   );
// };

// export default PostListProvider;

// 13.18.24
// import { useCallback, useState } from "react";
// import { createContext, useReducer } from "react";

// export const PostList = createContext({
//   postList: [],
//   addPost: () => {},
//   addInitialPosts: () => {},
//   deletePost: () => {},
// });

// const postListReducer = (currPostList, action) => {
//   let newPostList = currPostList;
//   if (action.type === "DELETE_POST") {
//     newPostList = currPostList.filter(
//       (post) => post.id !== action.payload.postId,
//     );
//   } else if (action.type === "ADD_INITIAL_POSTS") {
//     newPostList = action.payload.posts;
//   } else if (action.type === "ADD_POST") {
//     newPostList = [action.payload, ...currPostList];
//   }
//   return newPostList;
// };

// const PostListProvider = ({ children }) => {
//   const [postList, dispatchPostList] = useReducer(postListReducer, []);

//   const addPost = (userId, postTitle, postBody, reactions, tags) => {
//     dispatchPostList({
//       type: "ADD_POST",
//       payload: {
//         id: Date.now(),
//         title: postTitle,
//         body: postBody,
//         reactions: reactions,
//         userId: userId,
//         tags: tags,
//       },
//     });
//   };

//   const addInitialPosts = (posts) => {
//     dispatchPostList({
//       type: "ADD_INITIAL_POSTS",
//       payload: {
//         posts,
//       },
//     });
//   };

//   const deletePost = useCallback(
//     (postId) => {
//       dispatchPostList({
//         type: "DELETE_POST",
//         payload: {
//           postId,
//         },
//       });
//     },
//     [dispatchPostList],
//   );

//   // Notes:
//   // useCallback leta hai ek function and than dependency array
//   // useCallback(() => {
//   //   function(a,b)
//   // }, [a, b]);

//   // useMemo  ek function leta hai jo value return krta ho and than dependency array
//   // useMemo(() => {
//   //   return value;
//   // }, [dependency]);

//   // 1. Performance Optimization by using useMemo
//   // Sir, sorting ek expensive operation ($O(n \log n)$ time complexity) hota hai,
//   // especially agar array ka size bada ho. Agar hum normal sorting karenge bina
//   // useMemo ke, toh component jab bhi kisi aur wajah se (jaise koi doosra state
//   // change) re-render hoga, yeh sorting logic har baar dobara chalega, jo application
//   // ko slow kar sakta hai.useMemo use karne se React is sorted array ko cache (memoize)
//   // kar leta hai. Yeh sorting tabhi dobara chalegi jab dependency array (arr) ke values
//   // sach mein change honge. Faltu ke re-renders pe computational power waste nahi hogi.
//   const arr = [5, 2, 6, 7, 4];
//   const sortedArr = useMemo(() => arr.sort(), [arr]);

//   // useCallback memoizes functions, useMemo memoizes values

//   return (
//     <PostList.Provider
//       value={{ postList, addPost, addInitialPosts, deletePost }}
//     >
//       {children}
//     </PostList.Provider>
//   );
// };

// export default PostListProvider;

// 13.22.09
// Topic : Custom Hooks

// 1. Reusable Logic
// Easy Way: Agar koi aisa kaam (logic) hai jo aapko 4 alag-alag pages/components
// mein chahiye (jaise form validation ya dark mode toggle), toh aap use 4 baar
// alag-alag nahi likhte. Us logic ko ek jagah nikaal kar Custom Hook bana dete hain
// aur charo jagah use kar lete hain.

// 2. Combining Hooks
// Easy Way: Ek Custom Hook ke andar aap React ke built-in hooks jaise useState, useEffect,
// useRef sabko ek saath mix karke ek bada automatic system bana sakte ho.
// Example: useFetch hook ke andar aap useState (data store karne ke liye) aur useEffect
// (API call karne ke liye) ko ek saath combine kar dete ho.

// 3. Custom Return Values (Jo chahiye, wo lelo)
// Easy Way: Normal hooks jaise useState hamesha ek array return karta hai [value, setValue].
// Lekin Custom Hook mein aapki marzi hai! Aap chaho toh ek single number return karo, chaho
// toh array return karo, ya fir ek bada sa object return karo. Jo aapke component ko chahiye,
// aap wahi return kar sakte ho.

// App.jsx Notes from https://www.youtube.com/shorts/3AA00CxIUNM
// import React from 'react';
// import useCounter from './useCounter.jsx';

// function App() {
//   const {Increment, Decrement, reset, count} = useCounter();
//   return (
//     <>
//     <h1>Custom Hook</h1>
//     <p>Count: {count}</p>
//     <button onClick={Increment}>Increment</button>
//     <button onClick={Decrement}>Decrement</button>
//     <button onClick={reset}>Reset</button>
//     </>
//   )
// }

// export default App;

// // useCounter.jsx file Notes from https://www.youtube.com/shorts/3AA00CxIUNM
// import {useState} from 'react';
// const useCounter = (initialValue=10) => {
//   const [count, setCount] = useState(initialValue);

//   const Increment = () => setCount(preCount => preCount+1);
//   const Decrement = () => setCount(preCount => preCount-1);
//   const reset = () => setCount(initialValue);

//   return {Increment, Decrement, reset, count};
// }

// export default useCounter;

// 13.28.54
// 46 Submitting data with Fetch
import { useCallback, useState } from "react";
import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId,
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = useCallback(
    (postId) => {
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
    },
    [dispatchPostList],
  );

  return (
    <PostList.Provider
      value={{ postList, addPost, addInitialPosts, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
