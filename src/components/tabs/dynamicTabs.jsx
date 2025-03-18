import ParentTabs from "./parentTabs";

const DynamicTabs = () => {
  const parentTabs = [
    {
      id: "1",
      label: "Consolidated",
    },
    {
      id: "2",
      label: "Standalone",
    },
  ];

  return <ParentTabs parentTabs={parentTabs} />;
};

export default DynamicTabs;
