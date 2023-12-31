import { Button, Dropdown, Space } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import LineChart from "./LineChart";

const CategoriesChart = () => {

  // const handleMenuClick = (e) => {

  //   console.log("click", e);
  // };

  const items = [
    {
      label: "1st menu item",
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "2nd menu item",
      key: "2",
      icon: <UserOutlined />,
    },
    {
      label: "3rd menu item",
      key: "3",
      icon: <UserOutlined />,
      danger: true,
    },
    {
      label: "4rd menu item",
      key: "4",
      icon: <UserOutlined />,
      danger: true,
      disabled: true,
    },
  ];
  const menuProps = {
    items,
    // onClick: handleMenuClick,
  };
  return (
    <div
      className=" h-[22rem]  bg-[#F64E60] rounded-xl p-3"
      style={{ width: "calc(50% - 10px)" }}
    >
      <div className="w-[100%] h-14 flex flex-row justify-between items-center">
        <h5 className="font-semibold text-white text-base ">Categories</h5>
        <Dropdown
         className="w-[80px] h-[30px] rounded-md text-[#FFF]"
          menu={menuProps}
        >
          <Button>
            <Space className="text-white">
              Export
              <DownOutlined className="text-white" />
            </Space>
          </Button>
        </Dropdown>
      </div>
      <LineChart />
    </div>
  );
};

export default CategoriesChart;
