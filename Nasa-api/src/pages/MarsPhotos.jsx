import axios from "axios";
import { useState, useEffect } from "react";
import { Card, Button } from "antd";
import Navbar from "../components/Navbar";
import "./Nasa.css";
import globe from "../assets/globe.gif";
import planets from "../assets/planets.jpg";


const baseUrl =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos";
const apiKey = import.meta.env.VITE_NASA_KEY;

const MarsPhotos = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async (page) => {
    try {
      const response = await axios.get(baseUrl, {
        params: {
          page: 1,
          sol: 1000,
          api_key: apiKey,
        },
      });
      setData(response.data.photos);
      console.log(response.data.photos)
    } catch (error) {
      console.error("Error fetching NASA data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      {loading ? (
        <div
          className="flex items-center justify-center"
          style={{ textAlign: "center", marginTop: "50px" }}
        >
          <img
            src={globe}
            alt="Loading..."
            style={{ width: "50px", height: "50px", transform: "rotate(0deg)" }}
            className=""
          />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            // backgroundImage:`url(${planets})`,
            backgroundSize: "cover",
            backgroundPosition: "center",

          }}
        >
          {data.map((info, index) => (
            <Card
              key={index}
              title={`Photo ID: ${info.id}`}
              style={{ width: 300, margin: 16 }}
            >
              <p className="font-bold">Earth Date: {info.earth_date}</p>
              <img
                className="h-128 w-124 "
                src={info.img_src}
                alt={`Mars Photo ${index}`}
              />
              <p className="font-bold">{info.rover.name}</p>
              <p className="font-bold">Camera:{info.camera.name}</p>
            </Card>
          ))}
        </div>
      )}
    </>
  );
};

export default MarsPhotos;
