import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = props => {
  const dataValues = props.data.map(item => item.value);
  const max = Math.max(...dataValues);
  return <div className="chart">
    {
      props.data.map(item =>
        <ChartBar
          key={item.id}
          value={item.value}
          maxValue={max}
          label={item.label}
      />)
    }
  </div>
};

export default Chart;
