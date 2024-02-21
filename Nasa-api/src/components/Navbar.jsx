import { Link } from "react-router-dom";
import planets from "../assets/planets.jpg";

const Navbar = () => {
  const navbarStyle = {
    backgroundImage: `url(${planets})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "7rem", 
    
    
  };

  return (
    <nav className="border p-4 text-white opacity-90" style={navbarStyle}>
      <ul className="flex items-center justify-end p-4 text-white text-xl opacity-90 h-full">
        <li style={{ marginRight: "20px" }}>
          <Link to="/">Nasa</Link>
        </li>
        <li>
          <Link to="/MarsPhotos">MarsPhotos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
