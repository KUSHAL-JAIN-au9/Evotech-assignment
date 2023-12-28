import { Menu } from "antd";
import {
  AppstoreOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import layers from "../assets/Layers.png";
import applications from "../assets/LayoutFourBlocks.png";
import pages from "../assets/BarcodeRead.png";

interface MenuItem {
  key: string;
  icon: JSX.Element | null | undefined;
  children?: MenuItem[];
  label: JSX.Element | string;
  type: string | undefined;
}

function getItem(
  label: JSX.Element | string,
  key: string,
  icon?: JSX.Element | null,
  children?: MenuItem[],
  type?: string 
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items: MenuItem[] = [
  getItem(
    "Dashboard",
    "sub5",
    <img src={layers} alt="dashboard png" />,
    undefined,
    ""
  ),
  getItem(
    <p className="text-[#4A4B68]">Custom</p>,
    "grp",
    null,
    [
      getItem(
      <p className="text-[#FFF]">Applications</p>,
        "sub1",
        <img src={applications} alt="applications icon"/>,
        [
          getItem(
            <p className="text-[#88869F]">Users</p>,
            "5",
            <MinusOutlined />,
            [
              getItem(<p className="text-[#88869F]">Users Option1 </p>, "13"),
              getItem(<p className="text-[#88869F]">Users Option2</p>, "14"),
            ]
          ),
          getItem(
            <p className="text-[#88869F]">Contact</p>,
            "6",
            <MinusOutlined />,
            [
              getItem(<p className="text-[#88869F]">Contact Options1</p>, "15"),
              getItem(<p className="text-[#88869F]">Contact Options2</p>, "16"),
            ]
          ),
          getItem(
            <p className="text-[#88869F]">Chat</p>,
            "7",
            <MinusOutlined />,
            [
              getItem(<p className="text-[#88869F]">Chat Options1</p>, "17"),
              getItem(<p className="text-[#88869F]">Chat Options2</p>, "18"),
            ]
          ),
        ],
        // "group"
      ),
    ],
    "group"
  ),
  getItem(
    <p className="text-[#88869F]">Pages</p>,
    "sub2",
    <img src={pages} alt="pages icon" />,
    [
      getItem(
        <p className="text-[#88869F]">Sub Pages 1</p>,
        "21",
        <MinusOutlined />,
        [
          getItem(<p className="text-[#88869F]">Sub Pages 1 Option1</p>, "25"),
          getItem(<p className="text-[#88869F]">Sub Pages 2 Option2</p>, "26"),
        ]
      ),
      getItem(
        <p className="text-[#88869F]">Sub Pages 2</p>,
        "22",
        <MinusOutlined />,
        [
          getItem(<p className="text-[#88869F]">Sub Pages 2 Options1</p>, "27"),
          getItem(<p className="text-[#88869F]">Sub Pages 2 Options2</p>, "28"),
        ]
      ),
      getItem(
        <p className="text-[#88869F]">Sub Pages 3</p>,
        "23",
        <MinusOutlined />,
        [
          getItem(<p className="text-[#88869F]">Sub Pages 3</p>, "29"),
          getItem(<p className="text-[#88869F]">Sub Pages 3</p>, "30"),
        ]
      ),
    ]
  ),
  getItem(
    <p className="text-[#88869F]">Navigation Two</p>,
    "sub3",
    <AppstoreOutlined />,
    [
      getItem(<p className="text-[#88869F]">Option 9</p>, "9"),
      getItem(<p className="text-[#88869F]">Option 10</p>, "10"),
      getItem(<p className="text-[#88869F]">Submenu</p>, "sub4", null, [
        getItem(<p className="text-[#88869F]">Option 11</p>, "11"),
        getItem(<p className="text-[#88869F]">Option 12</p>, "12"),
      ]),
    ]
  ),
];

const Menubar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
      className={` ${
        !collapsed ? "w-1/6" : "w-[80px]"
      }   fixed  text-white bg-sidebarPrimary h-[100vh] z-50`}
    >
      <div
        className={`${
          !collapsed ? "w-full" : "w-[80px]"
        } h-[78px]  text-white  bg-sidebarOptions flex  justify-center items-center p-4`}
        onClick={toggleCollapsed}
      >
        {!collapsed ? (
          <>
            {" "}
            <p className="w-[219px] h-[38px] text-3xl  font-extrabold leading-11">
              Dashboard{" "}
            </p>{" "}
            <DoubleLeftOutlined className="text-[#6993FF]" />
          </>
        ) : (
          <p>
            <DoubleRightOutlined className="text-[#6993FF]" />
          </p>
        )}
      </div>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
        className="bg-sidebarPrimary text-white hover:text-white"
      />
    </div>
  );
};

export default Menubar;
