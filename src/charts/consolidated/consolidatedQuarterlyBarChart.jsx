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
import { consolidatedQuarterlyData } from "../../config/chartsData";

const ConsolidatedQuarterlyBarChart = () => {
  return (
    <div className="w-full">
      <BarChart
        width={1000}
        height={600}
        data={consolidatedQuarterlyData}
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

export default ConsolidatedQuarterlyBarChart;
