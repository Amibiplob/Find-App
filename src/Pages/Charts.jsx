import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Charts({ ratings }) {
    // console.log(ratings)
  const data = ratings.map((rating) => ({
    name: rating.name,
    value: rating.count/1000000, 
  }));
// console.log(data)
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart
        layout="vertical"
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" />
        <Tooltip formatter={(value) => [value.toLocaleString()+" M", "Reviews"]} />
        <Bar
          dataKey="value"
          fill="#F5A623"
          activeBar={{ fill: "#82ca9d" }}
          radius={[0, 4, 4, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
