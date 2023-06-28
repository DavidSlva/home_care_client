import { CalendarOutlined, DashboardOutlined, UserOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React from 'react'
const menu = Object.freeze({
    
})

const MenuSider = () => {
  return (
    <Menu
        mode='inline'
        items={menu['administrador']}
    />
  )
}

export default MenuSider