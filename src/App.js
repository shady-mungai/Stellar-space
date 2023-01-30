

import { Routes, Route } from "react-router-dom";
import "./App.css";
import Mars from "./components/Mars";
import Navbar from "./components/Navbar";
import MarsWeather from "./components/MarsWeather";
import Home from "./views/Home";
import Footer from "./views/Footer";
import DayPic from './components/DayPic';
import Earth from './components/Earth'
import AsteroidsMap from "./components/AsteroidsMap";



function App() {
  return (
<div>
  <Navbar/>
  <Routes>
    <Route path="/earth" element={<Earth/>} />


    <Route path="/daypic" element={<DayPic/>} />


    <Route path="/" element={<Home/>} />

    <Route path="/AsteroidsMap" element={<AsteroidsMap/>} />


    <Route path="/Mars" element={<Mars/>} />
    
    <Route path="/MarsWeather" element={<MarsWeather/>} />

  </Routes>
  <Footer/>
</div>
  );


}
export default App;
