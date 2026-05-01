import Layout from "../Components/StudentLayout";

export default function StudentReports() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">My Reports</h1>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-500">
          Here you can view your personal performance reports.
        </p>

        {/* Example content */}
        <ul className="mt-4 space-y-2">
          <li className="border p-3 rounded">
            📄 Mid Term Report - 87%
          </li>
          <li className="border p-3 rounded">
            📄 Final Exam Report - 91%
          </li>
        </ul>
      </div>
    </Layout>
  );
}