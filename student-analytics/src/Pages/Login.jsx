import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(`/${role}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-96">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Student Performance Analytics
        </h1>

        <label className="block mb-2 text-gray-600 font-medium">
          Select Role
        </label>

        <select
          className="w-full p-3 border rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>

        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;