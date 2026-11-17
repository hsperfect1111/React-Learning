// uthaya gaya h code // 12.39.59 se
// actually, start yaha se hua h 19.12.41
const LoadingSpinner = () => {
  return (
    // bootstrap spinner code
    <div className="d-flex justify-content-center spinner">
      <div
        className="spinner-border"
        // add style for spinner size
        // JSX style requires an object, so converted Bootstrap inline styles into an object format
        style={{ width: "5rem", height: "5rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;

// NOTE :
// JSX mein style={{ width: "5rem", height: "5rem" }} ke andar double curly braces ({{ }}) ki zaroorat isiliye padti hai kyunki yahan do alag-alag cheezein ek saath ho rahi hain:
// 1. Pehla {} (Outer Braces) — JavaScript Mode ke liye
// 2. Doosra {} (Inner Braces) — JavaScript Object ke liye
