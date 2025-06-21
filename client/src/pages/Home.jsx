import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ItemDetail from "./ItemDetails";
function Home() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  const fetchItems = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/fetchall");
      setItems(response.data);
    } catch (error) {
      console.error("❌ Error fetching items:", error);
      setError("Failed to fetch items.");
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className=" h-[calc(100dvh-5rem)] bg-gradient-to-br from-[rgba(175,221,229,0.2)] via-[rgba(15,164,175,0.3)] to-[rgba(0,49,53,0.1)] ">
      <h2 className="text-2xl font-bold   p-5 animate-pulse">All Items</h2>

      {error && <p className="text-red-600">{error}</p>}
      <div className="grid md:grid-cols-5 p-1">
        {items.map((item, index) => (
          <Link to={`/item/${item._id}`} key={item._id}>
            <div
              key={index}
              className="h-50 w-45 border rounded-xl shadow-lg p-1 bg-white hover:shadow-2xl transition"
            >
              <img
                src={`http://localhost:8080/uploads/${item.photo}`}
                alt={item.name}
                className="w-full h-25 object-cover rounded-md mb-4 border-1 border-black"
              />

              <h2 className="text-lg font-semibold text-gray-800 text-center">
                {item.name}
              </h2>

              <span className="text-xs text-center text-blue-500 mt-2 inline-block">
                {item.type}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
