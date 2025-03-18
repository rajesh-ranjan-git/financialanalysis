import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { standaloneAnnualData } from "../../config/chartsData";

const StandaloneAnnualBarChart = () => {
  return (
    <div className="w-full">
      <BarChart
        width={1000}
        height={600}
        data={standaloneAnnualData}
        className="w-full"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="quarter" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Total Income" fill="#8884d8">
          <LabelList
            dataKey="Total Income"
            position="top"
            className="font-semibold"
          />
        </Bar>
        <Bar dataKey="Reported Profit After Tax" fill="#82ca9d">
          <LabelList
            dataKey="Reported Profit After Tax"
            position="top"
            className="font-semibold"
          />
        </Bar>
      </BarChart>
    </div>
  );
};

export default StandaloneAnnualBarChart;
