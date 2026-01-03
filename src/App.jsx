import "./App.css";
import PriceOptions from "./components/PriceOptions/PriceOptions";
import Navbar from "./components/Navbar/Navbar";
import Chart from "./components/Chart/Chart";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <Chart></Chart>
    </>
  );
}

export default App;
