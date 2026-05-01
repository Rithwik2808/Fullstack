import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function PerformanceChart() {
  const data = [
    { subject: "Math", marks: 95 },
    { subject: "Science", marks: 90 },
    { subject: "English", marks: 85 },
    { subject: "History", marks: 80 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <XAxis dataKey="subject" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="marks" fill="#10b981" />
      </BarChart>
    </ResponsiveContainer>
  );
}