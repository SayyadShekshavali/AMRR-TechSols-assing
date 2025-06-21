import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddItem = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    photo: null,
    type: "",
    addtional: null,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("photo", formData.photo);
    data.append("type", formData.type);
    data.append("addtional", formData.addtional);
    try {
      const res = await axios.post("http://localhost:8080/api/additem", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage(res.data.message);
      setFormData({
        name: "",
        description: "",
        photo: null,
        type: "",
        addtional: null,
      });
    } catch (err) {
      console.error("Error:", err?.response?.data?.message || err.message);
      setMessage("Failed to add item. Please try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-sm rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">
        Add Item
      </h2>
      {message && (
        <p className="mb-4 text-green-600 font-medium text-center">{message}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Item Name"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <textarea
          name="description"
          value={formData.description}
          placeholder="Description"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          rows={3}
          required
        />

        <input
          type="file"
          name="photo"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="text"
          name="type"
          value={formData.type}
          placeholder="Type (e.g. 'book', 'image', etc.)"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="file"
          name="addtional"
          placeholder="Additional Image URL"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <button
          type="submit"
          className=" ml-50 w-30 !bg-blue-600 text-white py-2 rounded hover:!bg-red-500 transition duration-1000"
          onClick={() => navigate("/")}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddItem;
