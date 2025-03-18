import ParentTabs from "./parentTabs";

const DynamicTabs = () => {
  const tabData = [
    {
      id: "1",
      label: "Consolidated",
      content: <p>Data for Tab 1</p>,
    },
    {
      id: "2",
      label: "Standalone",
      content: <p>Data for Tab 2</p>,
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <h1 className="p-5 text-5xl">Dynamic Tabs</h1>
        <ParentTabs tabData={tabData} />
      </div>
    </>
  );
};

export default DynamicTabs;
