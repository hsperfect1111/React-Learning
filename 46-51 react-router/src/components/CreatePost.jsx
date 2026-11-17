// import { useContext, useRef } from "react";
// import { PostList } from "../store/post-list-store";
// const CreatePost = () => {
//   const { addPost } = useContext(PostList);

//   const userIdElement = useRef();
//   const postTitleElement = useRef();
//   const postBodyElement = useRef();
//   const reactionsElement = useRef();
//   const tagsElement = useRef();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const userId = userIdElement.current.value;
//     const postTitle = postTitleElement.current.value;
//     const postBody = postBodyElement.current.value;
//     const reactions = reactionsElement.current.value;

//     const tags = tagsElement.current.value.split(" ");

//     /*userIdElement.current.value = "";
//     postTitleElement.current.value = "";
//     postBodyElement.current.value = "";
//     reactionsElement.current.value = "";
//     tagsElement.current.value = "";*/

//     // 13.40.47
//     fetch("https://dummyjson.com/posts/add", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         title: postTitle,
//         body: postBody,
//         reactions: reactions,
//         userId: userId,
//         tags: tags,
//       }),
//     })
//       .then((res) => res.json())
//       .then(console.log);

//     addPost(userId, postTitle, postBody, reactions, tags);
//   };

//   return (
//     <form className="create-post" onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="userId" className="form-label">
//           Enter your User Id here
//         </label>
//         <input
//           type="text"
//           ref={userIdElement}
//           className="form-control"
//           id="userId"
//           placeholder="Your user Id"
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="title" className="form-label">
//           Post Title
//         </label>
//         <input
//           type="text"
//           ref={postTitleElement}
//           className="form-control"
//           id="title"
//           placeholder="How are you feeling today..."
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="body" className="form-label">
//           Post Content
//         </label>
//         <textarea
//           rows="4"
//           ref={postBodyElement}
//           className="form-control"
//           id="body"
//           placeholder="Tell us more about it"
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="reactions" className="form-label">
//           Number of reactions
//         </label>
//         <input
//           type="text"
//           ref={reactionsElement}
//           className="form-control"
//           id="reactions"
//       46 react    placeholder="How many people reacted to this post"
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="tags" className="form-label">
//           Enter your hashtags here
//         </label>
//         <input
//           type="text"
//           ref={tagsElement}
//           className="form-control"
//           id="tags"
//           placeholder="Please enter tags using space"
//         />
//       </div>
//       <button type="submit" className="btn btn-primary">
//         Post
//       </button>
//     </form>
//   );
// };
// export default CreatePost;

// 13.43.28
// import { useContext, useRef } from "react";
// import { PostList } from "../store/post-list-store";
// const CreatePost = () => {
//   const { addPost } = useContext(PostList);

//   const userIdElement = useRef();
//   const postTitleElement = useRef();
//   const postBodyElement = useRef();
//   const reactionsElement = useRef();
//   const tagsElement = useRef();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const userId = userIdElement.current.value;
//     const postTitle = postTitleElement.current.value;
//     const postBody = postBodyElement.current.value;
//     const reactions = reactionsElement.current.value;

//     const tags = tagsElement.current.value.split(" ");

//     userIdElement.current.value = "";
//     postTitleElement.current.value = "";
//     postBodyElement.current.value = "";
//     reactionsElement.current.value = "";
//     tagsElement.current.value = "";

//     // 13.40.47
//     fetch("https://dummyjson.com/posts/add", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         title: postTitle,
//         body: postBody,
//         reactions: reactions,
//         userId: userId,
//         tags: tags,
//       }),
//     })
//       // CreatePost.jsx me addPost ko kaise call karoge?
//       // Ab tum CreatePost.jsx ke andar .then() me ise aaram se call kar sakte ho:
//       .then((res) => res.json())
//       // NOTE: Tum CreatePost me API call se fetch kar rahe ho, lekin addPost function abhi
//       // bhi local data (Date.now() as ID) generate karke use state me save kar raha hai.
//       // Iska matlab server se jo actual object (jisme dummyjson apni unique id dega) ban kar
//       // aayega, uska tumhari local state se koi lena-dena nahi hoga.

//       // Solution (Short Code)
//       // addPost function ko poora object accept karne layak banao, taaki server se aane wala fresh dynamic post data (serverPost) hi direct state me insert ho sake:
//       .then((post) => addPost(post));
//   };

//   return (
//     <form className="create-post" onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="userId" className="form-label">
//           Enter your User Id here
//         </label>
//         <input
//           type="text"
//           ref={userIdElement}
//           className="form-control"
//           id="userId"
//           placeholder="Your user Id"
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="title" className="form-label">
//           Post Title
//         </label>
//         <input
//           type="text"
//           ref={postTitleElement}
//           className="form-control"
//           id="title"
//           placeholder="How are you feeling today..."
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="body" className="form-label">
//           Post Content
//         </label>
//         <textarea
//           rows="4"
//           ref={postBodyElement}
//           className="form-control"
//           id="body"
//           placeholder="Tell us more about it"
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="reactions" className="form-label">
//           Number of reactions
//         </label>
//         <input
//           type="text"
//           ref={reactionsElement}
//           className="form-control"
//           id="reactions"
//           placeholder="How many people reacted to this post"
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="tags" className="form-label">
//           Enter your hashtags here
//         </label>
//         <input
//           type="text"
//           ref={tagsElement}
//           className="form-control"
//           id="tags"
//           placeholder="Please enter tags using space"
//         />
//       </div>
//       <button type="submit" className="btn btn-primary">
//         Post
//       </button>
//     </form>
//   );
// };
// export default CreatePost;

// 14.40.19 - 14.55.31 // 15.15.07
import { Form, redirect } from "react-router-dom";
const CreatePost = () => {
  // Form component React Router ka hai.
  // Ye form submit hone par automatically route ki action() function ko call karta hai.
  // Isliye hume alag se handleSubmit likhne ki zarurat nahi padti.

  return (
    // Form submit hone par POST request bhejega,
    // jiska data createPostAction() me receive hoga.

    // use "Form" here and remove handleSubmit
    // "Form" me ek aur cheez deni padegi " method=POST "
    // kyuki ye submition type ki req hai
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User Id here
        </label>
        <input
          type="text"
          // name attribute bahut important hai.
          // Form isi name ke basis par key-value pair banata hai.
          // Example:
          // name="title" => { title: "My Post" }
          name="userId"
          className="form-control"
          id="userId"
          placeholder="Your user Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          rows="4"
          name="body"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          name="reactions"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          name="tags"
          className="form-control"
          id="tags"
          placeholder="Please enter tags using space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

// React Router action function
// Form submit hone ke baad ye function (createPostAction) automatically call hota hai.
// Isko by default ek object (yaha data attribute h woh object) milta hai jisme request available hoti hai.
export async function createPostAction(data) {
  // request se FormData nikalte hain.
  // mujhe is form ka data chahiye ?
  // use : data.request.formData();
  const formData = await data.request.formData();
  // use Object.fromEntries()
  // FormData ko normal JavaScript object me convert kar dete hain.
  // Example:
  // FormData -> { userId, title, body, reactions, tags }
  const postData = Object.fromEntries(formData);
  //
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // postData
    // use : JSON.stringify
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });

  return redirect("/");
}

export default CreatePost;
