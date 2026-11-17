// 13.28.54 // 13.34 // 13.38 // 13.40.11
// 46 Submitting data with Fetch
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

//   //
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

//   return (
//     <PostList.Provider
//       value={{ postList, addPost, addInitialPosts, deletePost }}
//     >
//       {children}
//     </PostList.Provider>
//   );
// };

// export default PostListProvider;

// 13.43.40
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

//   // 13.43 Pehle wale parameters ki jagah poora ek post object accept karo
//   const addPost = (post) => {
//     dispatchPostList({
//       type: "ADD_POST",
//       payload: post, // Server se aaya hua response object direct yahan jayega
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

//   return (
//     <PostList.Provider
//       value={{ postList, addPost, addInitialPosts, deletePost }}
//     >
//       {children}
//     </PostList.Provider>
//   );
// };

// export default PostListProvider;

// 13.54.52
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

//   // PostList me jo hum fetch kr rahe the woh usme nhi hona chahiye...ye hona chahiye jaha data ka store hai
//   const [fetching, setFetching] = useState(false);

//   useEffect(() => {
//     setFetching(true);
//     const controller = new AbortController();
//     const signal = controller.signal;

//     fetch("https://dummyjson.com/posts", { signal })
//       .then((res) => res.json())
//       .then((data) => {
//         addInitialPosts(data.posts);
//         setFetching(false);
//       })
//       .catch((error) => {
//         if (error.name === "AbortError") {
//           console.log("Fetch aborted safely");
//         } else {
//           console.log("Actual fetch error:", error);
//           setFetching(false);
//         }
//       });

//     return () => {
//       console.log("Cleaning up UseEffect");
//       controller.abort();
//     };
//   }, []);

//   const addPost = (post) => {
//     dispatchPostList({
//       type: "ADD_POST",
//       payload: post, // Server se aaya hua response object direct yahan jayega
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

//   return (
//     <PostList.Provider
//       value={{ postList, addPost, addInitialPosts, deletePost }}
//     >
//       {children}
//     </PostList.Provider>
//   );
// };

// export default PostListProvider;

// 13.54.52
// import { useCallback, useState, createContext, useReducer } from "react";

// export const PostList = createContext({
//   postList: [],
//   addPost: () => {},
//   // addInitialPosts: () => {}, addInitial post ko bhi ab hum yaha se hata dege kyuki post krne ki jimmedari maine khud leli h to me usko public me expose nii karunga
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

//   // PostList me jo hum fetch kr rahe the woh usme nhi hona chahiye...ye hona chahiye jaha data ka store hai
//   const [fetching, setFetching] = useState(false);

//   const addPost = (post) => {
//     dispatchPostList({
//       type: "ADD_POST",
//       payload: post, // Server se aaya hua response object direct yahan jayega
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

//   // 13.56
//   // useEffect ko defination ke neeche le jata hu
//   useEffect(() => {
//     setFetching(true);
//     const controller = new AbortController();
//     const signal = controller.signal;

//     fetch("https://dummyjson.com/posts", { signal })
//       .then((res) => res.json())
//       .then((data) => {
//         addInitialPosts(data.posts);
//         setFetching(false);
//       })
//       .catch((error) => {
//         if (error.name === "AbortError") {
//           console.log("Fetch aborted safely");
//         } else {
//           console.log("Actual fetch error:", error);
//           setFetching(false);
//         }
//       });

//     return () => {
//       console.log("Cleaning up UseEffect");
//       controller.abort();
//     };
//   }, []);

//   return (
//     <PostList.Provider
//       // value={{ postList, addPost, addInitialPosts, deletePost }} // addInitial post ko bhi ab hum yaha se hata dege kyuki post krne ki jimmedari maine khud leli h to me usko public me expose nii karunga
//       value={{ postList, addPost, deletePost }}
//     >
//       {children}
//     </PostList.Provider>
//   );
// };

// export default PostListProvider;

// 13.56.31
// import { useCallback, useState, createContext, useReducer } from "react";

// export const PostList = createContext({
//   postList: [],
//   //
//   fetching: false,
//   addPost: () => {},
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

//   const [fetching, setFetching] = useState(false);

//   const addPost = (post) => {
//     dispatchPostList({
//       type: "ADD_POST",
//       payload: post, // Server se aaya hua response object direct yahan jayega
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

//   useEffect(() => {
//     setFetching(true);
//     const controller = new AbortController();
//     const signal = controller.signal;

//     fetch("https://dummyjson.com/posts", { signal })
//       .then((res) => res.json())
//       .then((data) => {
//         addInitialPosts(data.posts);
//         setFetching(false);
//       })
//       .catch((error) => {
//         if (error.name === "AbortError") {
//           console.log("Fetch aborted safely");
//         } else {
//           console.log("Actual fetch error:", error);
//           setFetching(false);
//         }
//       });

//     return () => {
//       console.log("Cleaning up UseEffect");
//       controller.abort();
//     };
//   }, []);

//   return (
//     <PostList.Provider value={{ postList, fetching, addPost, deletePost }}>
//       {children}
//     </PostList.Provider>
//   );
// };

// export default PostListProvider;

// 13.58.05
// import {
//   useCallback,
//   useState,
//   createContext,
//   useReducer,
//   useEffect,
// } from "react";

// export const PostList = createContext({
//   postList: [],
//   fetching: false,
//   addPost: () => {},
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

//   const [fetching, setFetching] = useState(false);

//   const addPost = (post) => {
//     dispatchPostList({
//       type: "ADD_POST",
//       payload: post,
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

//   useEffect(() => {
//     setFetching(true);
//     const controller = new AbortController();
//     const signal = controller.signal;

//     fetch("https://dummyjson.com/posts", { signal })
//       .then((res) => res.json())
//       .then((data) => {
//         addInitialPosts(data.posts);
//         setFetching(false);
//       })
//       .catch((error) => {
//         if (error.name === "AbortError") {
//           console.log("Fetch aborted safely");
//         } else {
//           console.log("Actual fetch error:", error);
//           setFetching(false);
//         }
//       });

//     return () => {
//       controller.abort();
//     };
//   }, []);

//   return (
//     <PostList.Provider value={{ postList, fetching, addPost, deletePost }}>
//       {children}
//     </PostList.Provider>
//   );
// };

// export default PostListProvider;

// 14.35.11
import {
  useCallback,
  useState,
  createContext,
  useReducer,
  useEffect,
} from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
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

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
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
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
