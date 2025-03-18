import ConsolidatedQuarterlyIncomeStatement from "../charts/consolidated/consolidatedQuarterlyIncomeStatement";
import ConsolidatedAnnualIncomeStatement from "../charts/consolidated/consolidatedAnnualIncomeStatement";
import StandaloneQuarterlyIncomeStatement from "../charts/standalone/standaloneQuarterlyIncomeStatement";
import StandaloneAnnualIncomeStatement from "../charts/standalone/standaloneAnnualIncomeStatement";

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

export const chartsData = [
  {
    label: "Income Statement (₹ Cr.)",
    consolidatedQuarterlyIncomeStatement: (
      <ConsolidatedQuarterlyIncomeStatement />
    ),
    consolidatedAnnualIncomeStatement: <ConsolidatedAnnualIncomeStatement />,
    standaloneQuarterlyIncomeStatement: <StandaloneQuarterlyIncomeStatement />,
    standaloneAnnualIncomeStatement: <StandaloneAnnualIncomeStatement />,
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
