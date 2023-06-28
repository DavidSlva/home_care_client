import React from 'react'
import FormDinamico from '../../../components/forms/FormDinamico'
const Datos = [
    {
        label: 'Nombre',
        name: 'Nombre',
        type: 'string',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Juan Carlos'
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
        tipo: 'DatePicker',
        label: 'Fecha de Nacimiento',
        name: 'Fecha_Nacimiento',
        type: 'date',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Ingrese cuando nació'
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
        tipo: 'Number',
        label: 'Edad',
        name: 'Edad',
        type: 'Number',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: '45'
    },
    {
        tipo: 'Select',
        label: 'Cobertura',
        name: 'Cobertura',
        type: 'string',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Seleccione',
        options: ['Isapre', 'Fonasa']
    },
    {
        label: 'Nombre de Familiar Responsable',
        name: 'Nombre_Familiar',
        type: 'string',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Juan Carlos'
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
    },
    {
        tipo: 'Select',
        label: 'Sexo',
        name: 'Sexo',
        type: 'string',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Masculino',
        options: ['Masculino', 'Femenino', 'Otro']
    },
    {
        tipo: 'Select',
        label: 'Estado Civil',
        name: 'Estado_Civil',
        type: 'string',
        required: false,
        message: '',
        placeholder: 'Ingrese su estado civil',
        options: ['Soltero', 'Casado', 'Viudo', 'Divorciado', 'Separado']
    },
    {
        label: 'Profesión/Oficio',
        name: 'Profesion',
        type: 'string',
        required: false,
        message: '',
        placeholder: 'Ingrese su profesión u oficio'
    },
    {
        tipo: 'TextArea',
        label: 'Diagnostico Inicial',
        name: 'Diagnostico_Inicial',
        type: 'string',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Ingrese sus diagnosticos'
    },
    {
        tipo: 'TextArea',
        label: 'Alergias',
        name: 'Alergias',
        type: 'string',
        required: false,
        message: '',
        placeholder: 'Ingrese sus alergias'
    },
    {
        tipo: 'DatePicker',
        label: 'Fecha de Ingreso',
        name: 'Fecha_Ingreso',
        type: 'date',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Ingrese la fecha de atención'
    },
    {
        tipo: 'TextArea',
        label: 'Medicamentos',
        name: 'Medicamento_Consume',
        type: 'string',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Ingrese sus diagnosticos'
    }

]
const TituloForm = 'Agregar Paciente'
const Atajar = '/Perfil/Paciente/crear'
const Redireccionar = '/admin/adminpacientes'


const AgregarPaciente = () => {

    return (
        <FormDinamico datos={Datos} title={TituloForm} atajar={Atajar} redireccionar={Redireccionar}/>  
    )
      
}
/* si usuario == sicologo -> Datos == DatosSicologo.*/

export default AgregarPaciente