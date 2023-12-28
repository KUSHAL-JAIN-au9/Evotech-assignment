import { imageTabs } from "../data";

const ImageTabs = () => {
  return (
    <div className="w-[90%] my-5 flex flex-wrap flex-row justify-between items-center ">
      {imageTabs.map((image, imageTabsIndex) => {
        return (
          <div
            key={imageTabsIndex}
            className={`w-40 h-44 bg-[#FFF] rounded-xl flex flex-wrap flex-col justify-center items-center border-2 text-xl font-semibold text-[#B5B5C3] hover:bg-[#50CD89] hover:text-[#FFF] cursor-pointer `}
          >
            <img
              src={image.img}
              alt={`${image?.title} image`}
              className={`${
                image.title === "Video Tutorials"
                  ? "bg-slate-400 text-[#FFF] rounded-xl hover:bg-transparent "
                  : "bg-[#FFF] rounded-xl "
              }`}
            />
            <span className="w-20 text-center">{image.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ImageTabs;
