import { useEffect, useState } from "react";
import Layout from "../Components/Layout";

export default function Reports() {
  const [reports, setReports] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState(null);

  async function fetchReports() {
    const res = await fetch("http://localhost:8080/api/reports");
    const data = await res.json();
    setReports(data);
  }

  useEffect(() => {
    const loadReports = async () => {
      await fetchReports();
    };
    loadReports();
  }, []);

  async function addOrUpdateReport() {
    if (!title || !description) {
      alert("Fill all fields");
      return;
    }

    if (editingId) {
      await fetch(`http://localhost:8080/api/reports/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });
    } else {
      await fetch("http://localhost:8080/api/reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });
    }

    setTitle("");
    setDescription("");
    setEditingId(null);
    fetchReports();
  }

  async function deleteReport(id) {
    await fetch(`http://localhost:8080/api/reports/${id}`, {
      method: "DELETE",
    });
    fetchReports();
  }

  function editReport(r) {
    setTitle(r.title);
    setDescription(r.description);
    setEditingId(r.id);
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Performance Reports</h1>

      {/* FORM */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6 flex gap-4 flex-wrap">
        <input
          className="border p-2 rounded w-60"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="border p-2 rounded w-80"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          onClick={addOrUpdateReport}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          {editingId ? "Update Report" : "Add Report"}
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2">Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {reports.map((r) => (
              <tr key={r.id} className="border-b">
                <td className="py-2">{r.title}</td>
                <td>{r.description}</td>
                <td className="flex gap-2 py-2">
                  <button
                    onClick={() => editReport(r)}
                    className="bg-yellow-400 px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteReport(r.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {reports.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center py-4 text-gray-500">
                  No reports found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}