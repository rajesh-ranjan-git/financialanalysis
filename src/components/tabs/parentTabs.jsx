import { useState } from "react";
import Accordion from "../accordion/accordion";
import { parentTabs } from "../../config/config";

const ParentTabs = () => {
  const [parentActiveTab, setParentActiveTab] = useState(0);

  const handleTabChange = (currentParentTab) => {
    setParentActiveTab(currentParentTab);
  };

  return (
    <div className="flex flex-col space-y-4 w-full">
      <div className="flex gap-2">
        {parentTabs && parentTabs.length
          ? parentTabs.map((tab, index) => (
              <div
                className="bg-blue-200 p-1 px-2 rounded font-semibold text-white transition-all cursor-pointer smooth"
                style={
                  parentActiveTab === tab.id - 1
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

      {parentTabs[parentActiveTab] && (
        <Accordion parentLabel={parentTabs[parentActiveTab]} />
      )}
    </div>
  );
};

export default ParentTabs;
