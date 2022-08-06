import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Sports from "./components/Sports";
import Music from "./components/Music";
import Tech from "./components/Tech";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
       <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/music" element={<Music />} />
          <Route path="/tech" element={<Tech />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
