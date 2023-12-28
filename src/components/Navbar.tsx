import { navbarimages } from "../data";

const Navbar = () => {
  return (
    <div className="w-full h-[78px] bg-[#EFF2F5] flex flex-row  justify-end">
      <div className="w-52 flex flex-row justify-around items-center">
        {navbarimages.map((img, index) => (
          <img src={img} key={index} className="cursor-pointer" />
        ))}
      </div>
      <div className="w-60  flex flex-row justify-around items-center ml-4 cursor-pointer">
        <span>Nick thomas</span>
        <div className="w-[44px] h-[44px] bg-[#50CD89] text-[#FFF] grid place-items-center rounded cursor-pointer">
          N
        </div>
      </div>
    </div>
  );
};

export default Navbar;
