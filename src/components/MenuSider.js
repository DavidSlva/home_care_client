import { CalendarOutlined, DashboardOutlined, UserOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React from 'react'
const menu = Object.freeze({
    'especialista': [
        {
            label: 'Inicio',
            key: 'inicio',
            icon: <DashboardOutlined/>
        },
        {
            label: 'Calendario',
            key: 'calendario',
            icon: <CalendarOutlined/>
        }
    ],
    'administrador': [
        {
            label: 'Inicio',
            key: 'inicio',
            icon: <DashboardOutlined/>
        },
        {
            label: 'Pages',
            key: 'pages',
            icon: <UserOutlined/>,
            children: [
                {
                    label: 'Dashboard',
                    key: 'dashboard2',
                    icon: <DashboardOutlined/>
                },
                {
                    label: 'Dashboard',
                    key: 'dashboard3',
                    icon: <DashboardOutlined/>
                },
            ]
        }
    ]
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