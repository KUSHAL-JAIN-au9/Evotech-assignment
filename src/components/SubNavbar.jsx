import { subNavBtns } from "../data";
import plus from "../assets/plus.png";

const SubNavbar = () => {
  return (
    <div className="w-full h-[78px] bg-[#EFF2F5] flex flex-row  justify-between items-center">
      <div className="w-[268px] flex flex-row justify-around items-center">
        <span>Dashboard</span>
        <button
          type="button"
          className=" bg-[#FFF4DE] text-[#FFA800] hover:bg-[#FFA800] hover:text-slate-950  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Add New
        </button>
      </div>
      <div className="w-2/5  flex flex-row justify-around items-center">
        {subNavBtns.map((btn, i) => (
          <button
            key={i}
            type="button"
            className=" bg-white hover:bg-[#F3F6F9] hover:text-[#6993FF] text-[#959CB6] focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 "
          >
            {btn}
          </button>
        ))}
        <img className="cursor-pointer" src={plus} alt="combined-shape icon" />
      </div>
    </div>
  );
};

export default SubNavbar;
