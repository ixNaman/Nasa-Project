import axios from "axios";
import { useState, useEffect } from "react";
import { Card, Button } from "antd";
import Navbar from "../components/Navbar";
import "./Nasa.css";
import globe from "../assets/globe.gif";

const baseUrl =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos";
const apiKey = import.meta.env.VITE_NASA_KEY;

const MarsPhotos = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async (page) => {
    try {
      const response = await axios.get(baseUrl, {
        params: {
          page: currentPage,
          sol: 1000,
          api_key: apiKey,
        },
      });
      setData(response.data.photos);
    } catch (error) {
      console.error("Error fetching NASA data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, apiKey]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(()=>{
    window.scrollTo(0,0)
  },[currentPage])

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
        <div  style={{ display: "flex", flexWrap: "wrap", justifyContent:"space-between" }}>
          {data.map((info, index) => (
            <Card
              key={index}
              title={`Photo ID: ${info.id}`}
              style={{ width: 300, margin: 16 }}
            >
              <p>Earth Date: {info.earth_date}</p>
              <img
                className="h-128 w-124 "
                src={info.img_src}
                alt={`Mars Photo ${index}`}
              />
            </Card>
          ))}
          <div className="flex justify-center items-end mt-16 ml-20 border-black">
            <Button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <p className="mx-4">Page {currentPage}</p>
            <Button onClick={() => handlePageChange(currentPage + 1)}>
              Next
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default MarsPhotos;
