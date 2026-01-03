import {
  Pie,
  PieChart,
  Cell,
  Line,
  Bar,
  LineChart as LChart,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Tooltip,
  Area,
  AreaChart,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

const Chart = ({ isAnimationActive = true }) => {
  const subjectMarksData = [
    { id: 1, student: "Wilson", math: 40, physics: 50, chemistry: 45 },
    { id: 2, student: " Carter", math: 55, physics: 60, chemistry: 58 },
    { id: 3, student: "Brown", math: 45, physics: 48, chemistry: 50 },
    { id: 4, student: "Johnson", math: 75, physics: 70, chemistry: 68 },
    { id: 5, student: "Anderson", math: 65, physics: 68, chemistry: 72 },
    { id: 6, student: "Martinez", math: 90, physics: 88, chemistry: 85 },
    { id: 7, student: "Taylor", math: 65, physics: 60, chemistry: 63 },
    { id: 8, student: "Thompson", math: 85, physics: 80, chemistry: 78 },
    { id: 9, student: "Harris", math: 65, physics: 70, chemistry: 68 },
    { id: 10, student: "Moore", math: 90, physics: 92, chemistry: 95 },
  ];

  // Summing total marks per subject
  const totalMarks = subjectMarksData.reduce(
    (acc, curr) => {
      acc.math += curr.math;
      acc.physics += curr.physics;
      acc.chemistry += curr.chemistry;
      return acc;
    },
    { math: 0, physics: 0, chemistry: 0 }
  );

  // Prepare data for PieChart
  const pieData = [
    { name: "Math", value: totalMarks.math },
    { name: "Physics", value: totalMarks.physics },
    { name: "Chemistry", value: totalMarks.chemistry },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold ml-16">LineChart</h1>
      <LChart
        style={{
          width: "100%",
          maxWidth: "700px",
          maxHeight: "70vh",
          aspectRatio: 1.618,
        }}
        responsive
        data={subjectMarksData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <Line
          dataKey="math"
          stroke="blue"
          isAnimationActive={isAnimationActive}
        ></Line>
        <Line
          dataKey="physics"
          stroke="red"
          isAnimationActive={isAnimationActive}
        ></Line>
        <Line dataKey="chemistry"></Line>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="student" />
        <YAxis width="auto" />
        <Legend />
        <RechartsDevtools />
        <Tooltip />
      </LChart>

      <h1 className="text-3xl font-semibold ml-16">BarChart</h1>
      <BarChart
        style={{
          width: "100%",
          maxWidth: "700px",
          maxHeight: "70vh",
          aspectRatio: 1.618,
        }}
        responsive
        data={subjectMarksData}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="student" />
        <YAxis width="auto" />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="math"
          fill="#8884d8"
          isAnimationActive={isAnimationActive}
        />
        <Bar
          dataKey="physics"
          fill="#8884d8"
          isAnimationActive={isAnimationActive}
        />
        <Bar
          dataKey="chemistry"
          fill="#8884d8"
          isAnimationActive={isAnimationActive}
        />
        <RechartsDevtools />
      </BarChart>

      <h1 className="text-3xl font-semibold ml-16">AreaChart</h1>
      <AreaChart
        style={{
          width: "100%",
          maxWidth: "700px",
          maxHeight: "70vh",
          aspectRatio: 1.618,
        }}
        responsive
        data={subjectMarksData}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="student" />
        <YAxis width="auto" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="math"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
          isAnimationActive={isAnimationActive}
        />
        <Area
          type="monotone"
          dataKey="chemistry"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
          isAnimationActive={isAnimationActive}
        />

        <Area
          type="monotone"
          dataKey="physics"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
          isAnimationActive={isAnimationActive}
        />
        <RechartsDevtools />
      </AreaChart>

      <h1 className="text-3xl font-semibold ml-16">PieChart</h1>
      <PieChart width={400} height={400} className="ml-12">
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          label
          isAnimationActive={isAnimationActive}
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
      </PieChart>
    </div>
  );
};

export default Chart;
