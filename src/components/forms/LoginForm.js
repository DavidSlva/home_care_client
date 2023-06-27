import { Button, Form, Input } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React from 'react'
import { rutValidator } from '../../utils/validators'
import usuarios from '../../assets/data/usuarios.json'
import { notification } from 'antd'
import { getApi, postApi } from '../../api'

const LoginForm = () => {
    const [form] = useForm()

    const finishForm = async () => {
        try {
            const values = form.getFieldsValue();
            const response = await postApi('/auth/login', values)
            const { data } = response

            let usuario = data.usuario

            // if(response.data)
            // console.log(response);
            

            if (!usuario){
                notification.warning({ message: 'Usuario no encontrado' });
                return;
            }
            if(usuario.type === "administrador"){
                localStorage.setItem('user', JSON.stringify(usuario))
                window.location.href = '/admin';
                return;
            }
            if(usuario.type === "especialista"){
                localStorage.setItem('user', JSON.stringify(usuario))
                window.location.href = '/especialista';
                return;
            }
            notification.error({message: 'Error fatal'})
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
        } catch (error) {
            
        }
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