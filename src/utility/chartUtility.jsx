export const formatYAxis = (tick) => `${tick / 1000}k`;

export const renderLegend = (props) => {
  const { payload } = props;
  return (
    <div className="flex justify-center gap-4 item-center">
      {payload.map((entry, index) => (
        <div key={`legend-${index}`} className="flex items-center gap-2">
          <span
            style={{
              width: 10,
              height: 10,
              backgroundColor: entry.color,
              borderRadius: "50%",
              display: "inline-block",
            }}
          />
          <span>{entry.value}</span>
        </div>
      ))}
    </div>
  );
};
