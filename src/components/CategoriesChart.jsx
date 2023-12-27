import { Button, Dropdown, Space } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

const CategoriesChart = () => {
  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

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
    onClick: handleMenuClick,
  };
  return (
    <div className="w-1/2 h-[342px]  bg-[#F64E60] rounded-xl p-3">
      <div className="w-[100%] h-14 flex flex-row justify-between items-center bg-lime-600">
        <h5 className="font-semibold text-base ">Categories</h5>
        <Dropdown
          menu={menuProps}
          style={{
            width: "85px",
            height: "30",
            borderRadius: "6px",
            color: "#FFF",
          }}
        >
          <Button>
            <Space className="text-white">
              Export
              <DownOutlined className="text-white" />
            </Space>
          </Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default CategoriesChart;
