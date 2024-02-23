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
      <p
        className="text-blue text-center font-bold mb-4 font-serif text-1xl"
        style={{
          position: "absolute",
          bottom: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        "The Universe is under no obligation to make sense to you."
      </p>
      <p
        className="text-blue text-center font-bold "
        style={{
          position: "absolute",
          bottom: "45%",
          left: "60%",
          transform: "translate(-50%,-50%)",
        }}
      >
         — Neil deGrasse Tyson
      </p>
      <img src={BlackHole} className="opacity-100">
      </img>
    </div>
  );
}

export default Home;
