// 17.42
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import HomeItem from "./components/HomeItem";

// function App() {
//   const item = {
//     id: "001",
//     image: "images/1.jpg",
//     company: "Carlton London",
//     item_name: "Rhodium-Plated CZ Floral Studs",
//     original_price: 1045,
//     current_price: 606,
//     discount_percentage: 42,
//     return_period: 14,
//     delivery_date: "10 Oct 2023",
//     rating: {
//       stars: 4.5,
//       count: 1400,
//     },
//   };

//   return (
//     <>
//       <Header />
//       <main>
//         <div className="items-container">
//           <HomeItem item={item } />
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default App;

// 18.16.05
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import { Outlet } from "react-router-dom";
// function App() {
//   return (
//     <>
//       <Header />
//       <Outlet />
//       <Footer />
//     </>
//   );
// }

// export default App;

// 18.59.02
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import { Outlet } from "react-router-dom";
// import FetchItems from "../components/Fetchitems";
// function App() {
//   return (
//     <>
//       <Header />
//       <FetchItems /> {/*FetchItems import*/}
//       <Outlet />
//       <Footer />
//     </>
//   );
// }

// export default App;

// 19.13.19
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "../components/Fetchitems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;

// NOte :
// Aapne slice banate waqt name: "fetchStatus" diya hai, aur uske andar initialState mein currentlyFetching: false rakha hai.
// Jab aapne is slice ko apne main Redux store (configureStore) mein register kiya hoga (aam taur par iska naam fetchStatus rakha gaya hoga), toh Redux ne iska naam wahi set kar diya.
// Jab aap useSelector((store) => store.fetchStatus) likhte hain, toh Redux aapko wahi object deta hai jo aapne slice ki initialState mein banaya hai. Isliye store.fetchStatus.currentlyFetching likhte hi aapko true ya false milne lagta hai.
