import React from "react";
import { Bar } from "react-chartjs-2";



function LineGraph(props) {
 

  const { cases, deaths, recovered, active, } = props.data
   const state = {
  labels: ["Cases", "Deaths", "Recovered", "Active"],
  datasets: [
    {
      label: "Covid-19 Statistics by State",
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [cases, deaths, recovered, active],
    },
  ],
};

  return (
    <div>
      <Bar
        data={state}
        options={{
          title: {
            display: true,
            text: "Covid-19 Statistics",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
}

export default LineGraph;
