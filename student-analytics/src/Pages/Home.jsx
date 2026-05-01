import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="bg-white p-10 rounded-2xl shadow-2xl text-center w-96">
        <h1 className="text-2xl font-bold mb-8 text-gray-800">
          Student Performance System
        </h1>

        <button
          onClick={() => navigate("/teacher-login")}
          className="w-full mb-4 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Teacher Login
        </button>

        <button
          onClick={() => navigate("/student-login")}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
        >
          Student Login
        </button>
      </div>
    </div>
  );
}

export default Home;