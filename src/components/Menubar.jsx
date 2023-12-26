import {  Menu } from "antd";
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    PieChartOutlined,
    DoubleLeftOutlined,
    DoubleRightOutlined 
  } from '@ant-design/icons';
import { useState } from "react";
import layers from '../assets/Layers.png'

function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('Option 3', '3', <ContainerOutlined />),
    getItem('Navigation One', 'sub1', <MailOutlined />, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Option 7', '7'),
      getItem('Option 8', '8'),
    ]),
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    ]),
  ];

const Menubar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
    return (
      <div
      className="w-[259px]"
        // style={{
        //   width: 219,
        //   height:38
        // }}
      >
        {/* <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            marginBottom: 16,
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button> */}
        <div className={`${!collapsed? "w-[259px]":"w-[80px]"} h-[78px]  bg-sidebarOptions flex  justify-center items-center p-4`}  onClick={toggleCollapsed}>
        {!collapsed ?<> <p className="w-[219px] h-[38px] text-3xl  font-extrabold leading-11">Dashboard </p> <DoubleLeftOutlined /></> :<p ><DoubleRightOutlined /></p> }
 
        </div>

        <div  className={`${!collapsed? "w-[259px]":"w-[80px]"} h-[78px] p-4  bg-sidebarOptions flex  justify-start items-center`} >
            <img src={layers} alt="dashboard png" />
            <span className="pl-2">Dashbooard</span>
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
          style={{backgroundColor: '#1E1E2D'}}
        />
      </div>
    );
}

export default Menubar