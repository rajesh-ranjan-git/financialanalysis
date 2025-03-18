import ConsolidatedAnnualBarChart from "../charts/consolidated/consolidatedAnnualBarChart";
import ConsolidatedQuarterlyBarChart from "../charts/consolidated/consolidatedQuarterlyBarChart";
import StandaloneAnnualBarChart from "../charts/standalone/standaloneAnnualBarChart";
import StandaloneQuarterlyBarChart from "../charts/standalone/standaloneQuarterlyBarChart";

export const parentTabs = [
  {
    id: "1",
    label: "Consolidated",
  },
  {
    id: "2",
    label: "Standalone",
  },
];

export const childTabs = [
  {
    id: "1",
    label: "Quarterly",
  },
  {
    id: "2",
    label: "Annual",
  },
];

export const chartHeadings = [
  {
    label: "Income Statement (₹ Cr.)",
    consolidatedQuarterlyChart: <ConsolidatedQuarterlyBarChart />,
    consolidatedAnnualChart: <ConsolidatedAnnualBarChart />,
    standaloneQuarterlyChart: <StandaloneQuarterlyBarChart />,
    standaloneAnnualChart: <StandaloneAnnualBarChart />,
  },
  {
    label: "Balance Sheet (₹ Cr.)",
    consolidatedQuarterlyChart: "Kripanidhan",
    consolidatedAnnualChart: "Rahee",
    standaloneQuarterlyChart: "Vingardium",
    standaloneAnnualChart: "Laviosa",
  },
  {
    label: "Cash Flow  (₹ Cr.)",
    consolidatedQuarterlyChart: "Sayantanee",
    consolidatedAnnualChart: "Mohanta",
    standaloneQuarterlyChart: "Expecto",
    standaloneAnnualChart: "Patronum",
  },
];
