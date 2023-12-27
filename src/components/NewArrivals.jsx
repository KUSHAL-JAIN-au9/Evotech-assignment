import { Avatar, List } from "antd";
import Sant from "../assets/Sant.png";
import HR from "../assets/HR.png";
import Cisco from "../assets/cisco.png";
import Telegram from "../assets/telegram.png";
import KTR from "../assets/ktr.png";

import Settings from "../assets/Button Settings.png";
import Trash from "../assets/ButtonTrash.png";
import Edit from "../assets/Edit.png";

const NewArrivals = () => {
  const IconLists = [Settings, Edit, Trash];

  const newArrivalsStatusText = {
    Approved: "bg-[#EEE5FF] text-[#8950FC]",
    InProgress: "bg-[#EEE5FF] text-[#FFA800]",
    Success: "bg-[#C9F7F5] text-[#1BC5BD]",

    Rejected: "bg-[#FFE2E5] text-[#F64E60]",
  };

  const newArrivalsStatusBg = {
    Approved: "#EEE5FF",
    InProgress: "#FFF4DE",
    Success: "#C9F7F5",
    Rejected: "#FFE2E5",
  };
  const data = [
    {
      title: "Sant outstanding",
      description: "bprow@bnc.cc",
      icon: Sant,
      cost: "2000000",
      status: "Approved",
    },
    {
      title: "Telegram Apllication",
      description: "bprow@bnc.cc",
      icon: Telegram,
      cost: "4600000",
      status: "In Progress",
    },
    {
      title: "Cisco Management",
      description: "bprow@bnc.cc",
      icon: Cisco,
      cost: "560000",
      status: "Success",
    },
    {
      title: "HR Management",
      description: "bprow@bnc.cc",
      icon: HR,
      cost: "57000",
      status: "Rejected",
    },
    {
      title: "KTR Mobile Application",
      description: "bprow@bnc.cc",
      icon: KTR,
      cost: "45200000",
      status: "In Progress",
    },
  ];

  return (
    <div>
      {" "}
      <List
        className=" w-full p-3"
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            className="m-0"
            actions={[
              <div className="w-60  bg-violet-600 flex flex-row justify-between items-center ">
                <div className="flex flex-col items-end">
                  {" "}
                  {console.log(item)}
                  <h5 className="font-semibold  text-sm text-[#464E5F]  ">
                    ${item.cost}
                  </h5>
                  <span className=" ml-auto ">paid</span>
                </div>
                <span
                  className={`text-sm h-[26px] font-medium me-2 px-2.5 py-0.5 rounded mr-4  ${
                    newArrivalsStatusText[item.status] ??
                    newArrivalsStatusText.InProgress
                  }`}
                >
                  {item.status}
                </span>
              </div>,

              IconLists.map((icon, index) => (
                <img
                  className="inline pl-2 pr-2"
                  src={icon}
                  alt={`${icon} icon`}
                />
              )),
              <a key="list-loadmore-more">more</a>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <div className="w-[50px] h-[50px]  bg-[#F3F6F9] grid place-items-center  rounded-md">
                  <Avatar src={item.icon} />
                </div>
              }
              description={
                <span className="font-medium text-xs text-[#B5B5C3]">
                  <strong className=" font-semibold text-[#464E5F] ">
                    {" "}
                    FTP:{" "}
                  </strong>
                  {item.title}
                </span>
              }
              title={
                <h5 className="font-semibold  text-sm text-[#464E5F] ">
                  {item.title}
                </h5>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default NewArrivals;
