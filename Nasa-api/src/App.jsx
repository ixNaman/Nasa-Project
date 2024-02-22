import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./pages/Nasa";
import Nasa from "./pages/Nasa";
import MarsPhotos from "./pages/MarsPhotos";
import "./components/Navbar";
import Moon from "./pages/Moon";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Nasa" element={<Nasa />} />
          <Route path="/MarsPhotos" element={<MarsPhotos />} />
          <Route path="/Moon" element={<Moon />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
