import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,

  plugins: {
    background: {
      color: "white",
    },
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    // yAxes: {
    //   grid: {
    //     drawBorder: false,
    //     color: "#FFFFFF",
    //   },
    //   ticks: {
    //     beginAtZero: false,
    //     color: "white",
    //     fontSize: 12,
    //   },
    // },
    // xAxes: {
    //   grid: {
    //     drawBorder: false,
    //     color: "#FFFFFF",
    //   },
    //   ticks: {
    //     // beginAtZero: true,
    //     color: "white",
    //     fontSize: 12,
    //   },
    // },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "#D13647",
      backgroundColor: "rgb(255, 99, 132)",
    },

    // {
    //   label: "Dataset 2",
    //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    //   borderColor: "rgb(53, 162, 235)",
    //   backgroundColor: "rgba(53, 162, 235, 0.5)",
    // },
  ],
};

const LineChart = () => {
  return (
    <div className="w-full p-5 text-[#FFF]">
      <Line options={options} data={data} style={{ color: "white" }} />
    </div>
  );
};

export default LineChart;
