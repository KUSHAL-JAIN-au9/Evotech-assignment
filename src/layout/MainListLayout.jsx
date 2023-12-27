const formatView = ["Month", "Week", "Day"];

const MainListLayout = ({ title, description, children }) => {
  return (
    <div className="w-full h-[495px] bg-teal-600  rounded-xl">
      <div className="w-full h-14 flex flex-row justify-between items-center">
        <div className="w-1/4 h-[3.2rem] p-3">
          <h5 className="font-semibold text-lg">{title}</h5>
          <span className="font-medium text-xs">{description}</span>
        </div>

        <div className="w-1/4  flex flex-row justify-around items-center bg-orange-600">
          {formatView.map((btn, i) => (
            <button
              type="button"
              key={i}
              className="text-[#B5B5C3] bg-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2"
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
