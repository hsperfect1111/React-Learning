// 12.36.41
// const LoadingSpinner = () => {
//   return <h1>Loading...</h1>;
// };

// export default LoadingSpinner;

// 12.39.59
const LoadingSpinner = () => {
  return (
    // bootstrap spinner code
    <div className="d-flex justify-content-center spinner">
      <div
        className="spinner-border"
        // add style for spinner size
        // style is JSX so convert kr liya bootstrap code ko in object by {}.
        style={{ width: "5rem", height: "5rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
