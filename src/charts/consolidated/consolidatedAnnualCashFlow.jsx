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
import { consolidatedAnnualCashFlow } from "../../config/chartsData";

const ConsolidatedAnnualIncomeStatement = () => {
  return (
    <div className="w-full h-[60vh]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={1000}
          height={600}
          data={consolidatedAnnualCashFlow}
          barGap={10}
          className="w-full"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="quarter" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="Net Cash from Operating Activities"
            fill="#08ace4"
            barSize={50}
            radius={[3, 3, 0, 0]}
          >
            <LabelList
              dataKey="Net Cash from Operating Activities"
              position="top"
              className="font-semibold"
              fill="black"
              color="black"
            />
          </Bar>
          <Bar
            dataKey="Net Cash used in Investing Activities"
            fill="#ffac74"
            barSize={40}
            radius={[3, 3, 0, 0]}
          >
            <LabelList
              dataKey="Net Cash used in Investing Activities"
              position="top"
              fill="black"
              className="font-semibold"
            />
          </Bar>
          <Bar
            dataKey="Net Cash used in Financing Activities"
            fill="#08fc04"
            barSize={40}
            radius={[3, 3, 0, 0]}
          >
            <LabelList
              dataKey="Net Cash used in Financing Activities"
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

export default ConsolidatedAnnualIncomeStatement;
