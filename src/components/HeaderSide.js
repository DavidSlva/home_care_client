import { Avatar, Button, Space } from 'antd'
import { BarsOutlined } from '@ant-design/icons'
import React from 'react'

const HeaderSide = (props) => {
    const { setHidden, hidden } = props
    let user = localStorage.getItem('user')
    user = JSON.parse(user)
  return (
    <div className='relative w-full flex'>
        <div className="basis-2/5">
            <Button type='text' className='md:hidden z-50 inline-block' icon={<BarsOutlined/>} onClick={() => setHidden(!hidden)}/>
        </div>
        <div className="basis-1/5 text-center m-auto">
            <h1 className='p-0 m-0 text-sm md:text-lg xl:text-xl'>Home Care Client</h1>
        </div>
        <div className="basis-2/5 text-right">
            <Space>
                <p className='capitalize  text-gray-500 my-0 inline-block text-sm'> {user.Nombre} </p>
                <Avatar/>
            </Space>
        </div>
        
    </div>
  )
}

export default HeaderSide