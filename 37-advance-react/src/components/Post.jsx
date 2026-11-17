// import { useContext } from "react";
// import { MdDelete } from "react-icons/md";
// import { PostList } from "../store/post-list-store";
// // yaha {post} props receive kar rahe hai
// const Post = ({ post }) => {
//   // Access the deletePost function from the postList context
//   const { deletePost } = useContext(PostList);
//   return (
//     <div className="card post-card" style={{ width: "30rem" }}>
//       <div className="card-body">
//         <h5 className="card-title">
//           {post.title}
//           <span
//             className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
//             // Calls deletePost function with the specific post id when the element is clicked
//             onClick={() => deletePost(post.id)}
//           >
//             <MdDelete />
//           </span>
//         </h5>
//         <p className="card-text">{post.body}</p>
//         {post.tags.map((tag) => (
//           // Render each tag as a Bootstrap badge with a unique key for React list rendering
//           <span key={tag} className="badge text-bg-primary hashtag">
//             {tag}
//           </span>
//         ))}
//         <div className="alert alert-success reactions" role="alert">
//           This post has been reacted by {post.reactions} people.
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Post;

// 12.12.21
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          {/* // Changed reactions rendering because `post.reactions` is an object
              // containing `likes` and `dislikes`. React cannot render an object
              // directly, so we now display its properties instead. */}
          This post has been liked by: {post.reactions.likes} | Disliked by:{" "}
          {post.reactions.dislikes} people.
        </div>
      </div>
    </div>
  );
};
export default Post;
