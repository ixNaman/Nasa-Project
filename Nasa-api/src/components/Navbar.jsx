import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarStyle = {
    backgroundImage: "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "7rem",
  };

  return (
    <nav className="p-4 text-white opacity-90" style={navbarStyle}>
      <ul className="flex items-center justify-end p-4  text-xl opacity-90 h-full">
        <li className="mr-10">
          <Link to="/" className="hover:text-gray-300">Home</Link>
        </li>
        <li className="mr-10">
          <Link to="/Nasa" className="hover:text-gray-300 ">Nasa</Link>
        </li>
        <li className="mr-10">
          <Link to="/MarsPhotos" className="hover:text-gray-300">MarsPhotos</Link>
        </li>
        <li>
          <Link to="/Moon" className="hover:text-gray-300">Moon</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
