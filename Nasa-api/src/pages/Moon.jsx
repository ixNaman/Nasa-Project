import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "antd";
import "./Nasa.css";
import Navbar from "../components/Navbar";
import globe from "../assets/globe.gif";
import "../pages/Moon.css";

const baseUrl = "https://images-api.nasa.gov/search?q=apollo%2022";

function Moon() {
  const [loading, setLoading] = useState(true);
  const [itemsArray, setItemsArray] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchMoonData = async () => {
      try {
        const response = await axios.get(`${baseUrl}`);
        const itemsArray = response.data.collection.items;

        setItemsArray(itemsArray);
      } catch (error) {
        console.error("Error fetching Moon data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMoonData();
  }, []);

  const fetchAdditionalData = async (href) => {
    try {
      const response = await axios.get(href);
      setSelectedItem(response.data);
      console.log(selectedItem);
    } catch (error) {
      console.error("Error fetching additional data:", error);
    }
  };

  return (
    <>
      <Navbar />
      {loading ? (
        <div className="loading-spinner">
          <img src={globe} alt="Loading..." />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {itemsArray.slice(0, 1).map((item, index) => (
            <Card
              key={index}
              title={item.data[0].title}
              className="glass-effect"
            >
              {" "}
              <div className="flex items-center justify-center ">
                <Button onClick={() => fetchAdditionalData(item.href)}>
                  Video
                </Button>

                {selectedItem && (
                  <iframe
                    src={selectedItem[0]}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    className="mt-6"
                    width="560"
                    height="315"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}

export default Moon;
