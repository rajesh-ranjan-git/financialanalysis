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
import { consolidatedQuarterlyBalanceSheet } from "../../config/chartsData";

const ConsolidatedQuarterlyIncomeStatement = () => {
  return (
    <div className="w-full h-[60vh]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={1000}
          height={600}
          data={consolidatedQuarterlyBalanceSheet}
          barGap={10}
          className="w-full"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="quarter" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="Total Assets"
            fill="#08ace4"
            barSize={50}
            radius={[3, 3, 0, 0]}
          >
            <LabelList
              dataKey="Total Assets"
              position="top"
              className="font-semibold"
              fill="black"
              color="black"
            />
          </Bar>
          <Bar
            dataKey="Total Shareholder's Funds"
            fill="#ffac74"
            barSize={40}
            radius={[3, 3, 0, 0]}
          >
            <LabelList
              dataKey="Total Shareholder's Funds"
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

export default ConsolidatedQuarterlyIncomeStatement;
