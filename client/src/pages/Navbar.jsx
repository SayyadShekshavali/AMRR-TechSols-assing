import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";

function Navigation() {
  const navigate = useNavigate();

  return (
    <nav className="h-16 w-screen rounded-2xl flex justify-between items-center px-6 bg-white shadow">
      <motion.div
        animate={{ x: [0, 50, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FaReact className="text-3xl text-blue-500 animate-spin" />
      </motion.div>

      <div className="space-x-4">
        <button
          className="!bg-transparent text-blue-600 hover:border-b-4 hover:border-black "
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <button
          className="!bg-transparent text-blue-600 border-b-3 rounded-3xl hover:border-black "
          onClick={() => navigate("/additems")}
        >
          Add Item
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
