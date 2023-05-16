import { Input, Layout } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'

const LayoutAdmin = (props) => {

    const [data, setData] = useState({
        title: 'Home Care'
    })

    const handleControl = (e) => {
        setData({
            ...data,
            'title': e.target.value
        })
    }


    
  return (
    <Layout>
        <Sider >Sider</Sider>
        <Layout>
        <Header style={{
            background: 'white',
            color: 'red'
        }}>
            <h1>{data.title}</h1>
        </Header>
        <Content>
            {/* {props.children} */}
            <Input placeholder='Cambia el título' name="title" onChange={handleControl}/>
        </Content>
        <Footer>Footer</Footer>
        </Layout>
    </Layout>
  )
}

export default LayoutAdmin