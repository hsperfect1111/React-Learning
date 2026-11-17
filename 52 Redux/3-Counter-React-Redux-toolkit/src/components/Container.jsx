// 15.49.15
// pass prop {children} here
const Container = ({ children }) => {
  return (
    // style ko obj bana diya
    // Q. width 70% dene se kya hoga ?
    // A. width: "70%" dene se yeh Container card apne parent element ki total
    // width ka sirf 70% space lega (baki 30% jagah khali reh jayegi).
    <div className="card" style={{ width: "70%" }}>
      {/* {children} */}
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Container;
