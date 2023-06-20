import { Card,Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React from 'react'
import LoginForm from '../components/forms/LoginForm'


const Login = () => {
    return (
      <Layout className="sign-in">
        <Card bordered={false} className="sign-in-card">
          <Content className="sign-in-content">
            <div className="image-side" />
            <div className="form-container">
              {/* <Image src={LogoEleva} preview={false} /> */}
              <h1>Home Care</h1>
              <LoginForm />
            </div>
          </Content>
        </Card>
      </Layout>
        
    )
}

export default Login