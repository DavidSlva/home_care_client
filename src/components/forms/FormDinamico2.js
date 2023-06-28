import { Button, DatePicker,TimePicker, Form, Input, InputNumber, Select, } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React from 'react'
import '../../assets/styles/components/Form.css'
import '../../pages/especialista/funcionalidades/FormTest.css'
import { postApi } from '../../api'
import { notification } from 'antd'

let user = localStorage.getItem('user')
user = JSON.parse(user)

const { Option } = Select;

const FormDinamico = (props) => {
    const [form] = useForm()
    const Datos = props.datos
    const Title = props.title
    const Atajar = props.atajar
    const Redireccionar = props.redireccionar


    const handleSubmit = async () => {
        const values = {
            ...form.getFieldsValue(),
            ID_Especialista: user.ID
        };
        console.log(values)
        const response = await postApi(Atajar, values)
        
        const { data } = response
        const { status, err } = data
        if(status === 'success'){
            notification.success({
                message:' Inserción exitosa'
            })
            // if(Redireccionar){
            //     window.location.href = Redireccionar  
            // }
            
        }else{
            notification.success({
                message:`Error en el servidor: ${err}`
            })
        }
    };
    // return (
    //     <div>
    //         {pacientes.map((paciente) => {
    //             <Card>
    //                 {console.log(paciente)}
    //             </Card>
    //         })}
    //     </div>
    // )
    
    return(
    
    <div className='form-container'>
        <div className="form-title"> 
           <center> <h2>{Title}</h2> </center> 
        </div>
        <Form form={form} onFinish={handleSubmit} layout='vertical' >
            
            {
                Datos?.map((data,index) => {
                    if (data.tipo === 'TextArea') {
                        return (
                            <Form.Item
                            className='form-group'
                            key={index}
                            label={data.label}
                            name={data.name}
                            rules={[
                                {
                                    type: data.type,// ['string', 'number', 'boolean', 'regexp', 'integer', 'float', 'array', 'object', 'enum', 'date', 'url', 'hex', 'email'
                                    required: data.required,
                                    message: data.message
                                }
                            ]}>
                                <Input.TextArea placeholder={data.placeholder} />
                            </Form.Item>
                        );
                    } else if (data.tipo === 'DatePicker') {
                        return (
                            <Form.Item
                                className='form-group'
                                key={index}
                                label={data.label}
                                name={data.name}
                                rules={[
                                    {
                                    type: data.type,
                                    required: data.required,
                                    message: data.message,
                                    },
                                ]}
                            >
                                <DatePicker format="YYYY/MM/DD" placeholder={data.placeholder} />
                            </Form.Item>
                        );
                    } else if (data.tipo === 'TimePicker') {
                        return (
                            <Form.Item
                            className='form-group'
                            key={index}
                            label={data.label}
                            name={data.name}
                            rules={[
                                {
                                    type: data.type,// ['string', 'number', 'boolean', 'regexp', 'integer', 'float', 'array', 'object', 'enum', 'date', 'url', 'hex', 'email'
                                    required: data.required,
                                    message: data.message
                                }
                            ]}>
                                <TimePicker placeholder={data.placeholder} />
                            </Form.Item>
                        );
                    } else if (data.tipo === 'Number') {
                        return (
                            <Form.Item
                            className='form-group'
                            key={index}
                            label={data.label}
                            name={data.name}
                            rules={[
                                {
                                    type: data.type,// ['string', 'number', 'boolean', 'regexp', 'integer', 'float', 'array', 'object', 'enum', 'date', 'url', 'hex', 'email'
                                    required: data.required,
                                    message: data.message
                                }
                            ]}>
                                <InputNumber placeholder={data.placeholder} />
                            </Form.Item>
                        );
                    } else if (data.tipo === 'Password') {
                        return (
                            <Form.Item
                            className='form-group'
                            key={index}
                            label={data.label}
                            name={data.name}
                            rules={[
                                {
                                    type: data.type,// ['string', 'number', 'boolean', 'regexp', 'integer', 'float', 'array', 'object', 'enum', 'date', 'url', 'hex', 'email'
                                    required: data.required,
                                    message: data.message
                                }
                            ]}>
                                <Input.Password placeholder={data.placeholder} />
                            </Form.Item>
                        );
                    } else if (data.tipo === 'Select') {
                        return (
                            <Form.Item
                            className='form-group'
                            key={index}
                            label={data.label}
                            name={data.name}
                            rules={[
                                {
                                    type: data.type,// ['string', 'number', 'boolean', 'regexp', 'integer', 'float', 'array', 'object', 'enum', 'date', 'url', 'hex', 'email'
                                    required: data.required,
                                    message: data.message
                                }
                            ]}>
                                <Select placeholder={data.placeholder} >
                                {
                                    data.options.map((option,optionIndex) => (
                                        <Option key={optionIndex} value={option}>
                                        {option}
                                        </Option>
                                    ))
                                }
                                </Select>
                            </Form.Item>
                        );
                    }else{
                        return (
                            <Form.Item
                            className='form-group'
                            key={index}
                            label={data.label}
                            name={data.name}
                            rules={[
                                {
                                    type: data.type,// ['string', 'number', 'boolean', 'regexp', 'integer', 'float', 'array', 'object', 'enum', 'date', 'url', 'hex', 'email'
                                    required: data.required,
                                    message: data.message
                                }
                            ]}>
                                <Input placeholder={data.placeholder} />
                            </Form.Item>
                        );
                        
                    }
                })
            }

            <Form.Item>
            <Button htmlType='submit' block>Guardar</Button>
            </Form.Item>
        </Form>
    </div>
    )
}

export default FormDinamico