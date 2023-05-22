import { Button, Card, Form, Input, notification } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React from 'react'

const Login = (props) => {
    const [form] = useForm()
    const submit = () => {
        const body = form.getFieldsValue()
        notification.success({
            message: 'Información enviada'  
        })
        console.log("información enviada")
        console.log(body)
    }
    return (
        <div style={{
            margin: '200px 300px',
        }}>
            <Card>
                <Form form={form} onFinish={submit}>
                    <Form.Item name="rut" label="RUT" rules={[{
                        required: true,
                        message: 'El rut es obligatorio'
                    }]}>
                        <Input placeholder='Ingresa RUT' />
                    </Form.Item>
                    <Form.Item name="password" label="Contraseña" rules={[{
                        required: true,
                        message: 'La contraseña es obligatoria'
                    }]}>
                        <Input.Password  placeholder='Contraseña'/>
                    </Form.Item>
                    <Button type='primary' block  htmlType='submit'>Ingresar</Button>
                </Form>
            </Card>
        </div>
        
    )
}

export default Login