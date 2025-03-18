import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { consolidatedQuarterlyData } from "../../config/chartsData";

const ConsolidatedQuarterlyBarChart = () => {
  return (
    <div className="w-full h-[60vh]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={1000}
          height={600}
          data={consolidatedQuarterlyData}
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
      </ResponsiveContainer>
    </div>
  );
};

export default ConsolidatedQuarterlyBarChart;
