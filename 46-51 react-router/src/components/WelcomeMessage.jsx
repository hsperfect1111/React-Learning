// WelcomeMessage component ko ek prop mil rahi hai jiska naam onGetPostsClick hai.
// Get Posts From Server se hoga kya iske liye hum ek prop add kr de rahe hai
// const WelcomeMessage = ({ onGetPostsClick }) => {
//   return (
//     // 12.01
//     // <center> tag content ko horizontally center kr dega
//     <center className="welcome-message">
//       <h1>There are no posts</h1>
//       {/* Jab user button par click karega, onGetPostsClick function call hoga. */}
//       <button
//         type="button"
//         onClick={onGetPostsClick}
//         className="btn btn-primary"
//       >
//         Get Posts From Server
//       </button>
//     </center>
//   );
// };

// export default WelcomeMessage;

// 12.15.55
const WelcomeMessage = () => {
  return (
    <center className="welcome-message">
      <h1>There are no posts</h1>
    </center>
  );
};

export default WelcomeMessage;
