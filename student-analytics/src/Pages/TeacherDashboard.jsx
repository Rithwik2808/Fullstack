import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TeacherDashboard() {
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    name: "",
    studentClass: "",
    average: "",
  });
  const [editId, setEditId] = useState(null);

  const API = "http://localhost:8080/api/students";

  // FETCH STUDENTS
  const fetchStudents = () => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // ADD STUDENT
  const handleAdd = async () => {
    if (!newStudent.name || !newStudent.studentClass || !newStudent.average) {
      alert("Please fill all fields");
      return;
    }

    try {
      await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newStudent.name,
          studentClass: newStudent.studentClass,
          average: Number(newStudent.average), // IMPORTANT FIX
        }),
      });

      fetchStudents();

      setNewStudent({
        name: "",
        studentClass: "",
        average: "",
      });

    } catch (err) {
      console.error(err);
      alert("Error adding student");
    }
  };

  // DELETE
  const handleDelete = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });
    fetchStudents();
  };

  // EDIT
  const handleEdit = (student) => {
    setNewStudent({
      name: student.name,
      studentClass: student.studentClass,
      average: student.average,
    });
    setEditId(student.id);
  };

  // UPDATE
  const handleUpdate = async () => {
    await fetch(`${API}/${editId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newStudent.name,
        studentClass: newStudent.studentClass,
        average: Number(newStudent.average),
      }),
    });

    setEditId(null);
    setNewStudent({
      name: "",
      studentClass: "",
      average: "",
    });

    fetchStudents();
  };

  // CALCULATIONS
  const classAverage =
    students.length > 0
      ? (
          students.reduce((sum, s) => sum + s.average, 0) /
          students.length
        ).toFixed(2)
      : 0;

  const topPerformer =
    students.length > 0
      ? students.reduce((prev, curr) =>
          curr.average > prev.average ? curr : prev
        )
      : null;

 return (
  <div className="flex min-h-screen bg-gray-100">

    {/* Sidebar */}
    <div className="w-64 bg-indigo-800 text-white p-6">
      <h2 className="text-2xl font-bold mb-10">EduAnalytics</h2>

      <ul className="space-y-4">
        <li onClick={() => navigate("/teacher-dashboard")} className="hover:bg-indigo-600 p-2 rounded cursor-pointer">Dashboard</li>
        <li onClick={() => navigate("/students")} className="hover:bg-indigo-600 p-2 rounded cursor-pointer">Students</li>
        <li onClick={() => navigate("/reports")} className="hover:bg-indigo-600 p-2 rounded cursor-pointer">Reports</li>
        <li onClick={() => navigate("/settings")} className="hover:bg-indigo-600 p-2 rounded cursor-pointer">Settings</li>
      </ul>
    </div>

    {/* Main */}
    <div className="flex-1 p-10">

      <h1 className="text-3xl font-bold mb-6">Teacher Dashboard</h1>

      {/* Add Student */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Add Student</h2>

        <div className="flex gap-4 flex-wrap">
          <input
            className="border p-3 rounded-lg w-64"
            placeholder="Name"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          />

          <input
            className="border p-3 rounded-lg w-40"
            placeholder="Class"
            value={newStudent.studentClass}
            onChange={(e) => setNewStudent({ ...newStudent, studentClass: e.target.value })}
          />

          <input
            className="border p-3 rounded-lg w-40"
            placeholder="Average"
            value={newStudent.average}
            onChange={(e) => setNewStudent({ ...newStudent, average: e.target.value })}
          />

          <button
            onClick={editId ? handleUpdate : handleAdd}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
          >
            {editId ? "Update Student" : "Add Student"}
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <p className="text-gray-600">Class Average</p>
          <p className="text-3xl font-bold text-indigo-600">{classAverage}%</p>
        </div>
        {topPerformer && (
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <p className="text-gray-600">Top Performer</p>
            <p className="text-3xl font-bold text-green-600">{topPerformer.name}</p>
            <p className="text-sm text-gray-500">{topPerformer.average}%</p>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Student Performance</h2>

        <table className="w-full text-center border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Name</th>
              <th>Class</th>
              <th>Average</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s) => (
              <tr key={s.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{s.name}</td>
                <td>{s.studentClass}</td>
                <td>{s.average}%</td>

                <td>
                  {s.average < 50 ? (
                    <span className="text-red-500">Needs Improvement</span>
                  ) : (
                    <span className="text-green-600">Good</span>
                  )}
                </td>

                <td className="flex justify-center gap-2 p-3">
                  <button onClick={() => handleEdit(s)} className="bg-yellow-400 px-3 py-1 rounded">
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(s.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  </div>
);
}

export default TeacherDashboard;