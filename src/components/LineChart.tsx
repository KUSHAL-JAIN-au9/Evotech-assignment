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

import { LineData } from "../data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



const LineChart = () => {
  return (
    <div className="w-full p-5 text-[#FFF]">
      <Line options={{
        responsive: true,
         // scales: {
  //   y: {
  //     grid: {
  //       drawBorder: false,
  //       color: "#FFFFFF",
  //     },
  //     ticks: {
  //       beginAtZero: false,
  //       color: "white",
  //       font: {
  //         size: 12,
  //       },
  //     },
  //   },
  //   x: {
  //     grid: {
  //       drawBorder: false,
  //       color: "#FFFFFF",
  //     },
  //     ticks: {
  //       color: "white",
  //       font: {
  //         size: 12,
  //       },
  //     },
  //   },
      
      
      }} data={LineData}  />
    </div>
  );
};

export default LineChart;


