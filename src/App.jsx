import "./App.css";
import PriceOptions from "./components/PriceOptions/PriceOptions";
import Navbar from "./components/Navbar/Navbar";
import Chart from "./components/Chart/Chart";
import Spinner from "./components/Spinner/Spinner";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <Chart></Chart>
      <Spinner></Spinner>
    </>
  );
}

export default App;
