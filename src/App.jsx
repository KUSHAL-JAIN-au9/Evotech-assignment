import "./App.css";
import CategoriesChart from "./components/CategoriesChart";
import ImageTabs from "./components/ImageTabs";
import Menubar from "./components/Menubar";
import Navbar from "./components/Navbar";
import NewArrivals from "./components/NewArrivals";
import SalesProgress from "./components/SalesProgress";
import SubNavbar from "./components/SubNavbar";
import MainListLayout from "./layout/MainListLayout";

function App() {
  return (
    <>
      <div className="w-full flex flex-row flex-wrap">
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
        <Menubar />
        <div className="w-4/5 h-screen bg-amber-950">
          <Navbar />
          <SubNavbar />
          <ImageTabs />
          <CategoriesChart />
          <SalesProgress />

          <MainListLayout
            title={"New Arrivals"}
            description={"More than 400+ new members"}
          >
            <NewArrivals />
          </MainListLayout>

          <MainListLayout
            title={"Recent Stats"}
            description={"More than 400+ new members"}
          >
            <h1>hiii</h1>
          </MainListLayout>
        </div>
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
