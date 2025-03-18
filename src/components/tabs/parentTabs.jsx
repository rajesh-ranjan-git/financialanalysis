import React, { useState } from "react";

const ParentTabs = ({ tabData }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (currentTab) => {
    setActiveTab(currentTab);
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex gap-2">
        {tabData && tabData.length
          ? tabData.map((tab, index) => (
              <div
                className="bg-blue-200 p-1 px-2 rounded font-semibold text-white transition-all cursor-pointer smooth"
                style={
                  activeTab === tab.id - 1
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

      <div className="flex justify-center items-center p-2 border border-neutral-300 rounded w-[70vw] h-[60vh]">
        {tabData[activeTab] && tabData[activeTab].content}
      </div>
    </div>
  );
};

export default ParentTabs;
