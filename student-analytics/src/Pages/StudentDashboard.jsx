import Layout from "../Components/StudentLayout";
import PerformanceChart from "../Components/PerformanceChart";

export default function StudentDashboard() {
  const student = {
    name: "Rithwik",
    class: "11A",
    average: 87.5,
    subjects: 4,
  };

  return (
    <Layout>
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          Welcome, {student.name}
        </h1>
        <p className="text-gray-500 text-sm">
          Here’s your academic overview
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="text-gray-500 text-sm">Class</p>
          <h2 className="text-xl font-semibold text-green-600">
            {student.class}
          </h2>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="text-gray-500 text-sm">Average</p>
          <h2 className="text-xl font-semibold text-purple-600">
            {student.average}%
          </h2>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="text-gray-500 text-sm">Subjects</p>
          <h2 className="text-xl font-semibold text-blue-600">
            {student.subjects}
          </h2>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-3 gap-4">
        
        {/* CHART */}
        <div className="col-span-2 bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-md font-semibold mb-3">
            Performance Overview
          </h2>

          <div className="h-[250px]">
            <PerformanceChart />
          </div>
        </div>

        {/* SIDE PANEL */}
        <div className="flex flex-col gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-sm font-semibold mb-1">Tips</h2>
            <p className="text-gray-500 text-sm">
              Focus on weak subjects and revise daily.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-sm font-semibold mb-1">Goal</h2>
            <p className="text-gray-500 text-sm">
              Reach 90% in next test
            </p>
          </div>
        </div>

      </div>
    </Layout>
  );
}