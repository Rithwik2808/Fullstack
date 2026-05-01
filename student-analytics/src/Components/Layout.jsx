import { useNavigate } from "react-router-dom";

function Layout({ children }) {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen">

      <div className="w-64 bg-indigo-700 text-white p-6">
        <h2 className="text-2xl font-bold mb-10">EduAnalytics</h2>

        <ul className="space-y-4">
          <li onClick={() => navigate("/teacher-dashboard")} className="cursor-pointer">Dashboard</li>
          <li onClick={() => navigate("/students")} className="cursor-pointer">Students</li>
          <li onClick={() => navigate("/reports")} className="cursor-pointer">Reports</li>
          <li onClick={() => navigate("/settings")} className="cursor-pointer">Settings</li>
          <li onClick={() => navigate("/")} className="cursor-pointer text-red-300 mt-10">Logout</li>
        </ul>
      </div>

      <div className="flex-1 p-10 bg-gray-100">
        {children}
      </div>

    </div>
  );
}

export default Layout;