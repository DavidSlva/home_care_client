import { Button, Form, Input } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React from 'react'
import { rutValidator } from '../../utils/validators'

const LoginForm = () => {
    const [form] = useForm()

    const finishForm = async () => {
        const values = form.getFieldsValue();
        console.log(values);
        // const loginApiResult = await loginUserApi({
        //     url: 'sign-in',
        //     body: values,
        // });
        // if (notificationApi(loginApiResult)) {
        //     form.resetFields();
        //     localStorage.setItem(ACCESS_TOKEN, loginApiResult.accessToken);
        //     localStorage.setItem(REFRESH_TOKEN, loginApiResult.refreshToken);
        //     window.location.href = '/';
        // }
    };
  return (
    <Form form={form} className="login-form form" onFinish={finishForm}>
        <Form.Item
            name="rut"
            rules={[
                { required: true, message: 'Debe ingresar su rut' },
                // { type: 'numer', message: 'Solo se aceptan números' },
                {
                validator: (_, value) =>
                    rutValidator(value)
                    ? Promise.resolve()
                    : Promise.reject(new Error('El rut ingresado no es válido')),
                },
                {
                max: 12,
                min: 0,
                message: 'Este campo no puede tener más de 12 caracteres',
                },
            ]}
        >
            <Input placeholder="Rut" />
        </Form.Item>
        <Form.Item
        name="password"
        rules={[
            { required: true, message: 'Debe ingresar su contraseña' },
            {
            max: 40,
            min: 0,
            message: 'Este campo no puede tener más de 45 caracteres',
            },
        ]}
        >
        <Input.Password placeholder="Contraseña" />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" className="login-form__button">
                Ingresar
            </Button>
        </Form.Item>
    </Form>
  )
}

export default LoginForm