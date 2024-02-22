import React from 'react';
import earth from "../assets/earth.mp4";
import "../pages/Home.css";

function background() {
  return (
    <div className="app">
      <div className="content">
        <div className="overlay"></div>
        <h1 className='flex flex-col items-center justify-center text-6xl font-bold text-white'>
          Welcome to NASA
        </h1>
        
      </div>
    </div>
  );
  
}

export default background;
