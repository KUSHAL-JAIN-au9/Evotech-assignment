const formatView = ["Month", "Week", "Day"];

const MainListLayout = ({
  title,
  description,
  children,
  insideContainerDashBoard,
}) => {
  return (
    <div
      className={`${
        insideContainerDashBoard ? "w-full" : "w-[90%]"
      } h-auto  my-3 bg-[#FFF]  rounded-xl`}
    >
      <div className="w-full  p-3 flex flex-row justify-between items-center">
        <div className="w-1/4  ">
          <h5 className="font-semibold text-lg">{title}</h5>
          <span className="font-medium text-xs">{description}</span>
        </div>

        <div className="w-1/4  flex flex-row justify-around items-center ">
          {formatView.map((btn, i) => (
            <button
              type="button"
              key={i}
              className="text-[#B5B5C3] bg-white hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
};

export default MainListLayout;
