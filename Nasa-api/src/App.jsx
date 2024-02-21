import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './pages/Nasa'
import Nasa from './pages/Nasa';
import MarsPhotos from './pages/MarsPhotos'
import './components/Navbar'



function App() {
  return (
    <>

    

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nasa/>}/>
          <Route path="/MarsPhotos" element={<MarsPhotos />} />
   
        </Routes>
      </BrowserRouter>
    </>  
    
    

  );
}

export default App;
