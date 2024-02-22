import React from "react";
import Navbar from "../components/Navbar.jsx";
import earth from "../assets/earth.mp4";
import "../pages/Home.css";
import Background from "../components/background.jsx";

function Home() {
  return (
    <div>
      <Navbar />
      <Background />
      <p
        className="text-white text-center"
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
        className="text-white text-center"
        style={{
          position: "absolute",
          bottom: "45%",
          left: "60%",
          transform: "translate(-50%,-50%)",
        }}
      >
         — Neil deGrasse Tyson
      </p>
    </div>
  );
}

export default Home;
