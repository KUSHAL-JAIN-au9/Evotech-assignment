import cart from "./assets/cart.png";
import Compiling from "./assets/Compiling.png";
import Equilizer from "./assets/Equalizer.png";
import EquilizerTab from "./assets/EqualizerTab.png";
import layout from "./assets/LayoutFourBlocks.png";
import layoutTab from "./assets/LayoutTab.png";
import Search from "./assets/Search.png";
import Library from "./assets/Library.png";
import Movie from "./assets/Movie-lane.png";
import Shield from "./assets/Shield-check.png";
import faker from "faker";


export const navbarimages = [Search, Compiling, Equilizer, layout, cart];

export const subNavBtns = ["Today", "Month", "Year", "Actions"];

export const imageTabs = [
  {
    img: Library,
    title: "Saas Applications",
  },
  {
    img: layoutTab,
    title: "Main Categories",
  },
  {
    img: Movie,
    title: "Video Tutorials",
  },
  {
    img: EquilizerTab,
    title: "Sales Statistics",
  },
  {
    img: Shield,
    title: "ARC Securites",
  },
];

// interface LineChartOptions extends ChartOptions<'line'> {
//   plugins?: {
//     background: {
//       color: string;
//     };
//     legend: PluginLegendOptions<'line'> & {
//       position: 'top' | 'left' | 'right' | 'bottom' | 'center' | 'chartArea' | _DeepPartialObject<{ [scaleId: string]: number }> | undefined;
//     };
//     title: {
//       display: boolean;
//       text: string;
//     };
//     // Other plugin properties
//   };
// }

export const Lineoptions = {
  responsive: true,
  // plugins: {
  //   background: {
  //     color: 'white',
  //   },
  //   // legend: {
  //   //   position: 'top',
  //   // },
  //   title: {
  //     display: false,
  //     text: 'Chart.js Line Chart',
  //   },
  // },
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
  // },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const LineData = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "#D13647",
      backgroundColor: "#FFF",
    },
  ],
};
