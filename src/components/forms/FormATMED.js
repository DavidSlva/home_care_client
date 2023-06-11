import { Button, Form, Input } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React from 'react'

const Datos = [
    {
        label: 'Nombre',
        name: 'nombre',
        type: 'string',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Juan'
    },
    {
        label: 'Apellido',
        name: 'apellido',
        type: 'string',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Perez'
    },
    {
        label: 'RUT',
        name: 'rut',
        type: 'string',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: '12345678-9'
    },
    {
        label: 'Edad',
        name: 'edad',
        type: 'number',
        required: true,
        message: 'Este campo es obligatorio',   
        placeholder: '45'
    },
    {
        label: 'Lugar de Nacimiento',
        name: 'lugarNacimiento',
        type: 'string',
        required: false,
        message: '',
        placeholder: 'Ingrese Lugar donde Nació'
    },
    {
        label: 'Sexo',
        name: 'sexo',
        type: 'string',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Masculino'
    },
    {
        label: 'Estado Civil',
        name: 'estadoCivil',
        type: 'string',
        required: false,
        message: '',
        placeholder: 'Ingrese su estado civil'
    },
    {
        label: 'Profesión/Oficio',
        name: 'profesion',
        type: 'string',
        required: false,
        message: '',
        placeholder: 'Ingrese su profesión u oficio'
    },
    {
        label: 'Diagnosticos',
        name: 'diagnostico',
        type: 'string',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Ingrese sus diagnosticos'
    },
    {
        label: 'Nombre de Familiar responsable',
        name: 'nombreDeFamiliar',
        type: 'string',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Ingrese el nombre de su familiar responsable'
    },
    {
        label: 'Expectativas y Percepción del Paciente',
        name: 'Expetativas_y_Percepcion',
        type: 'string',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Ingrese sus expectativas y percepción del paciente'
    },
    {
        label: 'Impresion inicial de la entrevista',
        name: 'ImpresionInicialDeEntrevista',
        type: 'string',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Ingrese su impresión inicial de la entrevista'
    },
    {
        label: 'Alergias',
        name: 'Alergias',
        type: 'string',
        required: false,
        message: '',
        placeholder: 'Ingrese sus alergias'
    },
    {
        label: 'ObjetivoGeneral',
        name: 'ObjetivoGeneral',
        type: 'string',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Ingrese su objetivo general'
    },
    {
        label: 'Fecha de Atención',
        name: 'FechaAtencion',
        type: 'date',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Ingrese la fecha de atención'
    },
    {
        label: 'Acciones Delegadas',
        name: 'AccionesDelegadas',
        type: 'string',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Ingrese las acciones delegadas'
    },
    {
        label: 'Acciones Pertinentes',
        name: 'AccionesPertinentes',
        type: 'string',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Ingrese las acciones pertinentes'
    },
    {
        label: 'Fecha de Atención Siguiente',
        name: 'FechaAtencionSiguiente',
        type: 'date',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Ingrese la fecha de atención siguiente'
    },
    {
        label: 'Hora',
        name: 'Hora',
        type: 'hour',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Ingrese la hora'
    },
    {
        label: 'Dieta',
        name: 'Dieta',
        type: 'string',
        required: false,
        message: '',
        placeholder: 'Ingrese la dieta'
    },
    {
        label: 'Fecha de Hoy',
        name: 'Fecha',
        type: 'date',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Ingrese la fecha de hoy'
    }

]

const FormATMED = () => {
    const [form] = useForm()

    const handleSubmit = () => {
        const values = form.getFieldsValue()
        console.log(values);
      };
    
    return(
    <Form form={form} onFinish={handleSubmit} layout='vertical' >
       {
        Datos?.map((data) => (
            <Form.Item
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
        ))
       }

        <Form.Item>
        <Button htmlType='submit' block>Guardar</Button>
        </Form.Item>
    </Form>
    )
}

export default FormATMED