import { useState, useEffect } from "react";
import axios from "axios";
import "./Nasa.css";
import Navbar from "../components/Navbar";
import globe from "../assets/globe.gif";

const api = import.meta.env.VITE_NASA_KEY;
const baseurl = "https://api.nasa.gov/planetary/apod";

function Nasa() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNasa = async () => {
      try {
        const response = await axios.get(baseurl, {
          params: {
            api_key: api,
          },
        });
        setData(response.data);
      } catch (error) {
        console.error("Error fetching NASA data:", error);
      } finally {
        setLoading(false);
      }
    };

    getNasa();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-8 p-8 bg-white rounded shadow-lg ">
        {loading ? (
          <div className="flex items-center justify-center">
            <img
              src={globe}
              alt="Loading..."
              style={{
                width: "50px",
                height: "50px",
                transform: "rotate(0deg)",
              }}
              className=""
            />
          </div>
        ) : (
          <>
            <h1 className="text-center text-3xl font-bold mb-4">
              {data.title}
            </h1>
            <p className="text-gray-600 mb-2">{data.date}</p>
            <p className="text-gray-800 mb-4">{data.explanation}</p>
            {data.hdurl && (
              <img
                src={data.hdurl}
                alt={data.title}
                className="mx-auto rounded-lg shadow-lg"
              />
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Nasa;
