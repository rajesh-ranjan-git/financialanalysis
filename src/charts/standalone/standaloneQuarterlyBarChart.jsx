import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { standaloneQuarterlyData } from "../../config/chartsData";

const StandaloneQuarterlyBarChart = () => {
  return (
    <div className="w-full">
      <BarChart
        width={1000}
        height={600}
        data={standaloneQuarterlyData}
        className="w-full"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="quarter" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Total Income" fill="#8884d8" />
        <Bar dataKey="Reported Profit After Tax" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default StandaloneQuarterlyBarChart;
