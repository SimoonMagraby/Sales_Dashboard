// src/components/SalesBarChart.jsx
import React from "react";

import { ResponsiveBar } from "@nivo/bar";
import businessData from "../data/businessData";

const BarChart = () => {
  // Transform for Nivo
  const data = businessData.map((entry) => ({
    month: entry.month,
    Sales: entry.sales,
    Purchases: entry.purchases,
  }));

  return (
    
      
      <ResponsiveBar
        data={data}
        keys={["Sales", "Purchases"]}
        indexBy="month"
        margin={{ top: 60, right: 30, bottom: 50, left: 60 }}
        padding={0.3}
        innerPadding={10}
        groupMode="grouped"
        colors={({ id }) => id === "Sales" ? "#1e75ff" : "#3BCD92"}
        borderColor={{ from: "color", modifiers: [["darker", 1.2]] }}
        borderRadius={10}

        // ✅ Show axes with labels but no grid
        axisBottom={{
          tickSize: 0,
          tickPadding: 10,
          tickRotation: 0,
          legend: "Month",
          legendPosition: "middle",
          legendOffset: 36
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 10,
          tickRotation: 0,
          legend: "Amount",
          legendPosition: "middle",
          legendOffset: -50
        }}

        // ✅ No grid lines
        enableGridX={false}
        enableGridY={false}

        // ✅ Hide labels on columns
        enableLabel={false}

        // ✅ Top-center legend
        legends={[
          {
            dataFrom: "keys",
            anchor: "top",
            direction: "row",
            justify: false,
            translateY: -40,
            translateX: 0,
            itemsSpacing: 8,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            symbolSize: 12,
            symbolShape: "circle",
            effects: [{ on: "hover", style: { itemTextColor: "#fff" } }],
          },
        ]}

        animate={true}
        motionConfig="gentle"

        theme={{
          axis: {
            domain: { line: { stroke: "transparent" } },
            ticks: {
              line: { stroke: "#fff", strokeWidth: 1 },
              text: { fill: "#fff" }
            },
            legend: {
              text: { fill: "#fff" }
            }
          },
          legends: {
            text: { fill: "#fff" }
          },
          tooltip: {
            container: {
              background: "#13131a",
              color: "#fff"
            }
          }
        }}
      />
  );
};

export default BarChart;
