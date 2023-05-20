import { Layout } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'

const LayoutAdmin = (props) => {


  return (
    <Layout>
        <Sider >Sider</Sider>
        <Layout>
        <Header style={{
            background: 'white',
            color: 'red'
        }}>
        </Header>
        <Content>
            {props.children}
        </Content>
        <Footer>Footer</Footer>
        </Layout>
    </Layout>
  )
}

export default LayoutAdmin