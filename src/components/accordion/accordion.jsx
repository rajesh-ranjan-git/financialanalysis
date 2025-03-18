import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

const chartHeadings = [
  {
    label: "Income Statement (₹ Cr.)",
    chart1: "Rajesh",
    chart2: "Ranjan",
    chart3: "Abra ka Dabra",
    chart4: "Gili Gili Choo",
  },
  {
    label: "Balance Sheet (₹ Cr.)",
    chart1: "Kripanidhan",
    chart2: "Rahee",
    chart3: "Vingardium",
    chart4: "Laviosa",
  },
  {
    label: "Cash Flow  (₹ Cr.)",
    chart1: "Sayantanee",
    chart2: "Mohanta",
    chart3: "Expecto",
    chart4: "Patronum",
  },
];

const childTabs = [
  {
    id: "1",
    label: "Quarterly",
  },
  {
    id: "2",
    label: "Annual",
  },
];

const Accordion = ({ parentLabel }) => {
  const [acc, setAcc] = useState(null);
  const [childActiveTab, setChildActiveTab] = useState(0);

  const handleTabChange = (currentChildTab) => {
    setChildActiveTab(currentChildTab);
  };

  const handleAccordion = (index) => {
    if (acc === index) {
      setAcc(null);
    } else {
      setAcc(index);
    }
  };

  return (
    <div className="flex flex-col items-center gap-5 rounded-md w-full">
      {chartHeadings.map((heading, index) => (
        <div className="rounded-md rounded-b-none w-full" key={index}>
          <div
            className={`flex justify-between border border-neutral-300 rounded-md p-2 ${
              acc === index && "rounded-b-none border-b-0"
            } font-semibold text-xl cursor-pointer`}
            onClick={() => handleAccordion(index)}
          >
            <span>{heading.label}</span>
            {acc === index ? <Minus /> : <Plus />}
          </div>

          {acc === index && (
            <div className="flex flex-col space-y-4 w-full">
              {childTabs[childActiveTab] && (
                <div className="flex flex-col justify-between p-4 border border-neutral-300 rounded-md rounded-t-none">
                  <div className="flex gap-2">
                    {childTabs && childTabs.length
                      ? childTabs.map((tab, index) => (
                          <div
                            className="bg-blue-200 p-1 px-2 rounded font-semibold text-white transition-all cursor-pointer smooth"
                            style={
                              childActiveTab === tab.id - 1
                                ? { backgroundColor: "#42A5F5" }
                                : null
                            }
                            key={tab.id}
                            onClick={() => handleTabChange(index)}
                          >
                            {tab.label}
                          </div>
                        ))
                      : null}
                  </div>

                  {parentLabel.label === "Consolidated" &&
                    childActiveTab === 0 && (
                      <div className="py-4">{heading.chart1}</div>
                    )}

                  {parentLabel.label === "Consolidated" &&
                    childActiveTab === 1 && (
                      <div className="py-4">{heading.chart2}</div>
                    )}

                  {parentLabel.label === "Standalone" &&
                    childActiveTab === 0 && (
                      <div className="py-4">{heading.chart3}</div>
                    )}

                  {parentLabel.label === "Standalone" &&
                    childActiveTab === 1 && (
                      <div className="py-4">{heading.chart4}</div>
                    )}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
