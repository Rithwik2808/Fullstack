import { Link } from "react-router-dom";

export default function StudentLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <div className="w-64 bg-green-700 text-white flex flex-col justify-between p-6">

        {/* TOP */}
        <div>
          <h1 className="text-xl font-bold mb-8">Student Portal</h1>

          <nav className="flex flex-col gap-4 text-sm">

            <Link to="/student-dashboard" className="hover:text-gray-200">
              🏠 Dashboard
            </Link>

            <Link to="/student-performance" className="hover:text-gray-200">
              📊 My Performance
            </Link>

            <Link to="/student-reports" className="hover:text-gray-200">
              📄 Reports
            </Link>

            <Link to="/profile" className="hover:text-gray-200">
              👤 Profile
            </Link>

            <Link to="/settings" className="hover:text-gray-200">
              ⚙️ Settings
            </Link>

          </nav>
        </div>

        {/* BOTTOM */}
        <div>
          <button className="text-red-300 hover:text-red-500 text-sm">
            🚪 Logout
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6">
        {children}
      </div>

    </div>
  );
}