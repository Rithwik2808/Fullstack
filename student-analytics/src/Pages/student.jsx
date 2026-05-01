import { useEffect, useState } from "react";
import Layout from "../Components/Layout";

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
  const loadStudents = async () => {
    const res = await fetch("http://localhost:8080/api/students");
    const data = await res.json();
    setStudents(data);
  };

  loadStudents();
}, []);

  function getStatus(avg) {
    if (avg >= 75) return "Good";
    if (avg >= 50) return "Average";
    return "Poor";
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Student Management</h1>

      <div className="bg-white rounded-xl shadow-md p-6">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="py-2">Name</th>
              <th>Class</th>
              <th>Average</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s) => (
              <tr key={s.id} className="border-b hover:bg-gray-50">
                <td className="py-2">{s.name}</td>
                <td>{s.studentClass}</td>
                <td>{s.average}%</td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      s.average >= 75
                        ? "bg-green-100 text-green-600"
                        : s.average >= 50
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {getStatus(s.average)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}