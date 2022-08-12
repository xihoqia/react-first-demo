import React,{ useState } from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  SettingOutlined,
  HomeOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from 'antd';
import{useNavigate} from 'react-router-dom'
const { Sider} = Layout;

export default function LeftMenu() {
    const [collapsed, setCollapsed] = useState(false);
    const navigate =useNavigate()  
  return (<>
    <Sider collapsedWidth={0} trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" style={{ overflow: "hidden" }}>
        <div
          style={{
            backgroundColor: "grey",
            width: "150px",
            height: "30px",
            marginTop: "10px",
            marginLeft: "20px",
            color: "#fff",
            textAlign: "center",
          }}
        >
          知识竞赛
        </div>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        onClick={(e) => {
          navigate(e.key);
        }}
        items={[
          {
            key: "home",
            icon: <HomeOutlined />,
            label: "首页",
          },
          {
            key: "answer",
            icon: <VideoCameraOutlined />,
            label: "答题",
          },
          {
            key: "setting",
            icon: <SettingOutlined />,
            label: "配置",
          },
        ]}
      />
   
    </Sider>
       {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapsed(!collapsed),
      })}
  </>)
}
