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
import { consolidatedAnnualData } from "../../config/chartsData";

const ConsolidatedAnnualBarChart = () => {
  return (
    <div className="w-full">
      <BarChart
        width={1000}
        height={600}
        data={consolidatedAnnualData}
        className="w-full"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="quarter" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Total Income" fill="#8884d8">
          <LabelList dataKey="Total Income" position="top" />
        </Bar>
        <Bar dataKey="Reported Profit After Tax" fill="#82ca9d">
          <LabelList dataKey="Total Income" position="top" />
        </Bar>
      </BarChart>
    </div>
  );
};

export default ConsolidatedAnnualBarChart;
