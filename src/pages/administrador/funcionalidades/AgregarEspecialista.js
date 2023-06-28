import React from 'react'
import FormDinamico from '../../../components/forms/FormDinamico'
const Datos = [
    {
        label: 'Nombre Completo',
        name: 'Nombre',
        type: 'string',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Juan Carlos Bodoque XX'
    },
    {
        label: 'RUT',
        name: 'RUT',
        type: 'string',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: '12345678-9'
    },
    {
        tipo: 'Number',
        label: 'Edad',
        name: 'Edad',
        type: 'Number',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: '45'
    },
    {
        tipo: 'Number',
        label: 'Numero de Telefono',
        name: 'Telefono',
        type: 'Number',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: '968975043'
    },
    {   
        label: 'Direccion', 
        name: 'Direccion',
        type: 'string',
        required: false,
        message: '',
        placeholder: 'Ingrese Ciudad donde vive'
    },
    {
        label: 'Cargo', 
        name: 'Cargo',
        type: 'string',
        required: false,
        message: '',
        placeholder: 'Ingrese su profesión'
    },
    {
        tipo: 'DatePicker',
        label: 'Fecha de Nacimiento',
        name: 'Fecha_Nacimiento',
        type: 'date',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Ingrese cuando nació'
    },
    {
        label: 'Email', 
        name: 'Mail',
        type: 'string',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Ingrese su correo'
    },
    {
        tipo: 'Password',
        label: 'Contraseña', 
        name: 'Contrasena',
        type: 'password',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Ingrese contraseña'
    }

]
const TituloForm = 'Agregar Especialista'
const Atajar = '/Perfil/Especialista/crear'
const Redireccionar = '/admin/agregarespecialista'

const AgregarEspecialista = () => {

    return (
        <FormDinamico datos={Datos} title={TituloForm} atajar={Atajar} redireccionar={Redireccionar}/>  
    )
      
}
/* si usuario == sicologo -> Datos == DatosSicologo.*/

export default AgregarEspecialista