import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import TeacherLogin from "./Pages/TeacherLogin";
import StudentLogin from "./Pages/StudentLogin";

import TeacherDashboard from "./Pages/TeacherDashboard";
import StudentDashboard from "./Pages/StudentDashboard";

import Students from "./Pages/student";
import Reports from "./Pages/Report";
import Settings from "./Pages/Settings";

import StudentReports from "./Pages/StudentReports";

import StudentPerformance from "./Pages/StudentPerformance";
import Profile from "./Pages/Profile";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/students" element={<Students />} />
        <Route path="/student-reports" element={<StudentReports />} />
        <Route path="/student-performance" element={<StudentPerformance />} />
<Route path="/profile" element={<Profile />} />
<Route path="/reports" element={<Reports />} />
<Route path="/settings" element={<Settings />} />
        <Route path="/" element={<Home />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
      <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
<Route path="/students" element={<Students />} />
<Route path="/reports" element={<Reports />} />
<Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;