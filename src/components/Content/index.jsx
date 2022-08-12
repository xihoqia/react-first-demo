import React from 'react'
import { Layout,} from 'antd';
import routes from '../../routes'
import{useRoutes} from 'react-router-dom'


const { Content } = Layout;
export default function ContentAction() {
    const element=useRoutes(routes)
  return (
    <Content
    className="site-layout-background"
    style={{
      margin: '24px 16px',
      minHeight: 280,
    }}
  >
  {element}
  </Content>
  )
}
