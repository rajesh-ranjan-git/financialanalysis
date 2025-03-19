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
import { standaloneAnnualBalanceSheet } from "../../config/chartsData";
import { formatYAxis, renderLegend } from "../../utility/chartUtility";

const StandaloneAnnualBalanceSheet = () => {
  return (
    <div className="w-full h-[60vh]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={1000}
          height={600}
          data={standaloneAnnualBalanceSheet}
          barGap={10}
          className="w-full"
        >
          <CartesianGrid strokeDasharray="3 0" opacity={0.5} vertical={false} />
          <XAxis dataKey="quarter" />
          <YAxis axisLine={false} tickFormatter={formatYAxis} />
          <Tooltip />
          <Legend content={renderLegend} />
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

export default StandaloneAnnualBalanceSheet;
