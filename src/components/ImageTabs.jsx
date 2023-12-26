import { imageTabs } from "../data"

const ImageTabs = () => {
  return (
    <div className="w-full bg-slate-500 flex flex-wrap flex-row justify-around items-center ">
        {
            imageTabs.map((image,imageTabsIndex) =>{
            return(
            <div key={imageTabsIndex} className={`w-52 h-48 ${image.title ==="Video Tutorials"? "bg-[#50CD89]" : " bg-red-600"} rounded-xl flex flex-wrap flex-col justify-center items-center border-2 text-xl font-semibold text-[#B5B5C3] `} >
            <img  src={image.img} alt={`${image?.title} image`}/>
            <span className="w-20 text-center">{image.title}</span>
            </div>)
            })
        }
    </div>
  )
}

export default ImageTabs