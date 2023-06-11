import { Button, Form, Input } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React from 'react'

const FormAnt = () => {
    const [form] = useForm()

    const handleSubmit = () => {
        const values = form.getFieldsValue()
        console.log(values);
      };
  return (
    <Form form={form} onFinish={handleSubmit}>
        <Form.Item label="Nombre" name="nombre" rules={[
            {
                required: true,
                message: 'Este campo es obligatorio'
            }
        ]}>
            <Input placeholder='Ingresa tu nombre'/>
        </Form.Item>
        <Form.Item>
            <Button htmlType='submit' block>Enviar formulario</Button>
        </Form.Item>
    </Form>
  )
}

export default FormAnt