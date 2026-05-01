import { useState } from "react";
import { useNavigate } from "react-router-dom";

function StudentLogin() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/students");
      const data = await res.json();

      const student = data.find(
        (s) => s.name.toLowerCase() === name.toLowerCase()
      );

      if (student) {
        localStorage.setItem("loggedInStudent", JSON.stringify(student));
        navigate("/student-dashboard");
      } else {
        alert("Student not found");
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to backend");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-600">

      <div className="bg-white p-8 rounded-xl shadow-xl w-96">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Student Login
        </h2>

        <input
          type="text"
          placeholder="Enter Name"
          className="w-full p-3 border rounded mb-6"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default StudentLogin;