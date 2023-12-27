import React from "react";
import CategoriesChart from "../components/CategoriesChart";
import SalesProgress from "../components/SalesProgress";
import MainListLayout from "../layout/MainListLayout";
import NewArrivals from "../components/NewArrivals";

const DashBoardContainer = () => {
  return (
    <div className="w-[90%] my-3 h-auto  flex flex-row flex-wrap justify-between  ">
      <CategoriesChart />
      <SalesProgress />

      <MainListLayout
        title={"New Arrivals"}
        description={"More than 400+ new members"}
        insideContainerDashBoard={true}
      >
        <NewArrivals />
      </MainListLayout>
    </div>
  );
};

export default DashBoardContainer;
