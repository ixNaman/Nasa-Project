import React from 'react';
import "../pages/Home.css";

function background() {
  return (
    <div className="app">
      <div className="content">
        <div className="overlay"></div>
        <h1 className='flex flex-col items-center justify-center text-6xl font-bold ' style={{color:"#d8f3dc"}}>
          Welcome to NASA
        </h1>
        
      </div>
    </div>
  );
  
}

export default background;
