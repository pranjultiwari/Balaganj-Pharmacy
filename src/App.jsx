import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Allopathy from "./pages/Medicines/Allopathy";
import Ayurveda from "./pages/Medicines/Ayurveda";
import Lifestyle from "./pages/Medicines/Lifestyle";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home classname="home" id="home"></Home>}></Route>
          <Route path="/allopathy" element= {<Allopathy></Allopathy>}></Route>
          <Route path="/ayurveda" element={<Ayurveda></Ayurveda>}></Route>
          <Route path="/lifestyle" element={<Lifestyle></Lifestyle>}></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default App;
