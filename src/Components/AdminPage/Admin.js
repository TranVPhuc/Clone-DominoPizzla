import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Avatar } from 'antd';
import './Admin.css';

const { Header, Sider, Content } = Layout;
const Admin = (props) => {
  const listMenu = [
    {
      key: 'home',
      label: 'Home',
    },
    {
      type: 'divider',
    },
    {
      key: 'allproduct',
      label: 'All Products',
    },
  ];

  const navigate = useNavigate();
  const handleRedirectPage = ({key}) =>{
    if (key === 'home'){
      navigate('/admin');
    } else{
      navigate(`/category/${key}`)
    }
  }

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu theme="light" mode="inline" defaultSelectedKeys={['home']} onSelect={handleRedirectPage} items={listMenu} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <div>
              <Avatar shape="square" size={50} src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Admin;
