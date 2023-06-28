import { ConfigProvider, Layout } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import HeaderSide from '../HeaderSide'
import MenuSider from '../MenuSider'
import { colors } from '../../assets/styles/colors'

const LayoutSpecialist = (props) => {
  const [hidden, setHidden] = useState(true);
  let user = localStorage.getItem('user')
    user = JSON.parse(user)
  if(!user){
    window.location.href = '/login'
    return
  }
  
  if(user.type !== 'especialista'){
    return (
      <h1>Lo sentimos, no tiene acceso a esta página</h1>
    )
  }

  return (
    <ConfigProvider theme={{  
      token: {
        colorPrimary: colors.primary,
      },
      components: {
        Layout: {
          colorBgHeader: colors.white,
          colorBgTrigger: colors.primary,
        },
      }
    }}> 
      <Layout className='min-h-screen'>
        <Header className='fixed shadow-md z-50 w-full h-16 px-1 md:px-5'>
          <HeaderSide hidden={hidden} setHidden={setHidden}/>
        </Header>
        <Sider collapsible defaultCollapsed className={`!fixed scroll h-full z-50 mt-16 transition-all duration-300  opacity-100 shadow-md md:translate-x-0 md:transform-none  ${hidden ? '-translate-x-full opacity-0' : 'opacity-100'}`}>
          <MenuSider/>
        </Sider>
        <Layout className='mt-16 md:ml-20'>
          <Content className=' p-5' style={{
            backgroundImage: 'linear-gradient(35deg, #ffffff 0, #e3faff 50%, #c2e4ed 100%)'
          }}>
            {props.children}
           
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout> 
    </ConfigProvider>
  )
}

export default LayoutSpecialist