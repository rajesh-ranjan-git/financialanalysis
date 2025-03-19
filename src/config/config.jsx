import ConsolidatedQuarterlyIncomeStatement from "../charts/consolidated/consolidatedQuarterlyIncomeStatement";
import ConsolidatedAnnualIncomeStatement from "../charts/consolidated/consolidatedAnnualIncomeStatement";
import StandaloneQuarterlyIncomeStatement from "../charts/standalone/standaloneQuarterlyIncomeStatement";
import StandaloneAnnualIncomeStatement from "../charts/standalone/standaloneAnnualIncomeStatement";
import ConsolidatedQuarterlyBalanceSheet from "../charts/consolidated/consolidatedQuarterlyBalanceSheet";
import ConsolidatedAnnualBalanceSheet from "../charts/consolidated/consolidatedAnnualBalanceSheet";
import StandaloneQuarterlyBalanceSheet from "../charts/standalone/standaloneQuarterlyBalanceSheet";
import StandaloneAnnualBalanceSheet from "../charts/standalone/standaloneAnnualBalanceSheet";
import ConsolidatedQuarterlyCashFlow from "../charts/consolidated/consolidatedQuarterlyCashFlow";
import ConsolidatedAnnualCashFlow from "../charts/consolidated/consolidatedAnnualCashFlow";
import StandaloneQuarterlyCashFlow from "../charts/standalone/standaloneQuarterlyCashFlow";
import StandaloneAnnualCashFlow from "../charts/standalone/standaloneAnnualCashFlow";

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
    consolidatedQuarterlyChart: <ConsolidatedQuarterlyIncomeStatement />,
    consolidatedAnnualChart: <ConsolidatedAnnualIncomeStatement />,
    standaloneQuarterlyChart: <StandaloneQuarterlyIncomeStatement />,
    standaloneAnnualChart: <StandaloneAnnualIncomeStatement />,
  },
  {
    label: "Balance Sheet (₹ Cr.)",
    consolidatedQuarterlyChart: <ConsolidatedQuarterlyBalanceSheet />,
    consolidatedAnnualChart: <ConsolidatedAnnualBalanceSheet />,
    standaloneQuarterlyChart: <StandaloneQuarterlyBalanceSheet />,
    standaloneAnnualChart: <StandaloneAnnualBalanceSheet />,
  },
  {
    label: "Cash Flow  (₹ Cr.)",
    consolidatedQuarterlyChart: <ConsolidatedQuarterlyCashFlow />,
    consolidatedAnnualChart: <ConsolidatedAnnualCashFlow />,
    standaloneQuarterlyChart: <StandaloneQuarterlyCashFlow />,
    standaloneAnnualChart: <StandaloneAnnualCashFlow />,
  },
];
