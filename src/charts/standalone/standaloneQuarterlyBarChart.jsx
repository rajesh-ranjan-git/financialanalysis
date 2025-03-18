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
import { standaloneQuarterlyData } from "../../config/chartsData";

const StandaloneQuarterlyBarChart = () => {
  return (
    <div className="w-full">
      <BarChart
        width={1000}
        height={600}
        data={standaloneQuarterlyData}
        barGap={10}
        className="w-full"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="quarter" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="Total Income"
          fill="#08ace4"
          barSize={50}
          radius={[3, 3, 0, 0]}
        >
          <LabelList
            dataKey="Total Income"
            position="top"
            className="font-semibold"
            fill="black"
            color="black"
          />
        </Bar>
        <Bar
          dataKey="Reported Profit After Tax"
          fill="#ffac74"
          barSize={40}
          radius={[3, 3, 0, 0]}
        >
          <LabelList
            dataKey="Reported Profit After Tax"
            position="top"
            fill="black"
            className="font-semibold"
          />
        </Bar>
      </BarChart>
    </div>
  );
};

export default StandaloneQuarterlyBarChart;
