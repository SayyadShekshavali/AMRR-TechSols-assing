import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/item/${id}`);
        setItem(res.data);
      } catch (err) {
        setError("Failed to fetch item.");
      }
    };

    fetchItem();
  }, [id]);

  if (error) return <p className="text-red-600">{error}</p>;
  if (!item) return <p>Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <img
        src={`http://localhost:8080/uploads/${item.photo}`}
        alt={item.name}
        className="w-full h-80 object-cover rounded-md mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{item.name}</h1>
      <p className="text-gray-700 mb-2">{item.description}</p>
      <p className="text-blue-500 text-sm">{item.type}</p>
    </div>
  );
}

export default ItemDetail;
