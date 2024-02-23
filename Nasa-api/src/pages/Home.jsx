import React from "react";
import Navbar from "../components/Navbar.jsx";
import BlackHole from "../assets/Black_Hole.png";
import "../pages/Home.css";
import Background from "../components/background.jsx";

function Home() {
  return (
    <div>
      <Navbar />
      <Background />
      <div
        className="glass-container"
        style={{
          position: "absolute",
          bottom: "48%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: "16px",
          padding: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)", 
          WebkitBackdropFilter: "blur(10px)", 
        }}
      >
        <p className="text-b5e48c text-center font-bold mb-4 font-serif text-1xl" style={{color:"#d8f3dc  "}}>
          "The Universe is under no obligation to make sense to you."
        </p>
        <p className=" text-center font-bold" style={{color:"#d8f3dc"}}>— Neil deGrasse Tyson</p>
      </div>
      <img src={BlackHole} alt="Black Hole" />
    </div>
  );
}

export default Home;
