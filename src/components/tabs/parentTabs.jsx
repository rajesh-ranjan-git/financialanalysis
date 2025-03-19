import { useState } from "react";
import Accordion from "../accordion/accordion";
import { parentTabs } from "../../config/config";
import { ChevronsRight } from "lucide-react";

const ParentTabs = () => {
  const [parentActiveTab, setParentActiveTab] = useState(0);

  const handleTabChange = (currentParentTab) => {
    setParentActiveTab(currentParentTab);
  };

  return (
    <div className="bg-white border-t-2 border-t-black w-full">
      <div className="flex items-center font-semibold text-white">
        <span className="bg-black p-1 text-[#08ace4]">
          <ChevronsRight />
        </span>
        <span className="bg-black py-1 pr-2">FINANCIAL ANALYSIS</span>
      </div>
      <div className="flex flex-col space-y-4 p-4 w-full">
        <div className="flex gap-2">
          {parentTabs && parentTabs.length
            ? parentTabs.map((tab, index) => (
                <div
                  className="bg-blue-100/50 p-1 px-2 rounded font-semibold text-neutral-500 transition-all cursor-pointer smooth"
                  style={
                    parentActiveTab === tab.id - 1 ? { color: "#42A5F5" } : null
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
    </div>
  );
};

export default ParentTabs;
