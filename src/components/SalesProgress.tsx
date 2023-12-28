import { Avatar, List } from "antd";
import bar from "../assets/Icon.png";
import link from "../assets/link.png";
import Mic from "../assets/Mic.png";
import sms from "../assets/sms.png";
import dots from "../assets/Dots.png";

const data = [
  {
    title: "Briviba Saas",
    description: "PHP, SQLite,Artisian,CLIMM",
    icon: bar,
  },
  {
    title: "Briviba Saas",
    description: "PHP, SQLite,Artisian,CLIMM",
    icon: Mic,
  },
  {
    title: "Briviba Saas",
    description: "PHP, SQLite,Artisian,CLIMM",
    icon: sms,
  },
  {
    title: "Briviba Saas",
    description: "PHP, SQLite,Artisian,CLIMM",
    icon: link,
  },
];

const SalesProgress = () => {
  return (
    <div
      className=" h-[22rem] bg-[#FFF] rounded-xl"
      style={{ width: "calc(50% - 10px)" }}
    >
      <div className="w-full flex flex-row justify-between items-center p-3 text-[#212121]">
        <h5 className="font-semibold text-lg">Sales Progress</h5>
        <img src={dots} alt="dots icon" />
      </div>

      <List
        className="p-3"
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item className="m-0">
            <List.Item.Meta
              avatar={<Avatar src={item.icon} />}
              title={item.title}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default SalesProgress;
