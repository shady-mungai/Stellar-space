import { Routes, Route } from "react-router-dom";
import "./App.css";
import Mars from "./components/Mars";
import Navbar from "./components/Navbar";
import MarsWeather from "./components/MarsWeather";
import Home from "./views/Home";


function App() {
  return (
<div>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>} />

    <Route path="/Mars" element={<Mars/>} />
    <Route path="/MarsWeather" element={<MarsWeather/>} />

  </Routes>
</div>
  );
}
export default App;
