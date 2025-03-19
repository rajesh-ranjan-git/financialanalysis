import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { chartsData, childTabs } from "../../config/config";

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
      {chartsData.map((heading, index) => (
        <div className="rounded-md rounded-b-none w-full" key={index}>
          <div
            className={`flex justify-between border border-neutral-300 rounded-md p-2 ${
              acc === index &&
              "rounded-b-none border-b-0 bg-[#e8f4fc] text-[#42A5F5]"
            } font-bold text-xl cursor-pointer transition-all smooth`}
            onClick={() => handleAccordion(index)}
          >
            <span>{heading.label}</span>

            {acc === index ? (
              <motion.div
                initial={{
                  rotate: acc === index ? -90 : 0,
                }}
                animate={{
                  rotate: acc === index ? 0 : -90,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Minus strokeWidth={3} />
              </motion.div>
            ) : (
              <motion.div
                initial={{
                  rotate: acc === index ? -90 : 0,
                }}
                animate={{
                  rotate: acc === index ? 0 : -90,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Plus strokeWidth={3} />
              </motion.div>
            )}
          </div>

          {acc === index && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "645px" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex flex-col space-y-4 w-full"
            >
              {childTabs[childActiveTab] && (
                <div className="flex flex-col justify-between p-4 border border-neutral-300 rounded-md rounded-t-none">
                  <div className="flex gap-2">
                    {childTabs && childTabs.length
                      ? childTabs.map((tab, index) => (
                          <div
                            className="bg-blue-100/50 p-1 px-2 rounded font-semibold text-neutral-500 transition-all cursor-pointer smooth"
                            style={
                              childActiveTab === tab.id - 1
                                ? { color: "#42A5F5" }
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
                      <div className="py-4">
                        {heading.consolidatedQuarterlyChart}
                      </div>
                    )}

                  {parentLabel.label === "Consolidated" &&
                    childActiveTab === 1 && (
                      <div className="py-4">
                        {heading.consolidatedAnnualChart}
                      </div>
                    )}

                  {parentLabel.label === "Standalone" &&
                    childActiveTab === 0 && (
                      <div className="py-4">
                        {heading.standaloneQuarterlyChart}
                      </div>
                    )}

                  {parentLabel.label === "Standalone" &&
                    childActiveTab === 1 && (
                      <div className="py-4">
                        {heading.standaloneAnnualChart}
                      </div>
                    )}
                </div>
              )}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
