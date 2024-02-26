import { useState, useEffect } from "react";
import axios from "axios";
import "./Nasa.css";
import Navbar from "../components/Navbar";
import globe from "../assets/globe.gif";
import planets from "../assets/planets.jpg";

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
        console.log(data);
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
      <div className="container mx-auto my-8 p-8 rounded shadow-lg ">
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
            <div>
              <h1 className="text-center font-bold mb-4 font-serif text-5xl">
                {data.title}
              </h1>
              <p className="text-white mb-2 ">{data.date}</p>
              <p className="text-white mb-4 font-medium">{data.explanation}</p>

              {data.media_type === "image" && data.hdurl && (
                <img
                  src={data.hdurl}
                  alt={data.title}
                  className="mx-auto rounded-lg shadow-lg"
                />
              )}

              {data.media_type === "video" && data.url && (
                <div className=" flex items-center justify-center ">
                  <iframe
                    title={data.title}
                    src={data.url}
                    className="embed-responsive-item rounded-lg shadow-lg "
                    height="315"
                    width="100%"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Nasa;
