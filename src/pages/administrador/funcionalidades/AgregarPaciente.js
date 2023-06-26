import React from 'react'
import FormDinamico from '../../../components/forms/FormDinamico'
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
        tipo: 'Number',
        label: 'Edad',
        name: 'edad',
        type: 'Number',
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
        tipo: 'Select',
        label: 'Sexo',
        name: 'sexo',
        type: 'string',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Masculino',
        options: ['Masculino', 'Femenino', 'Otro']
    },
    {
        tipo: 'Select',
        label: 'Estado Civil',
        name: 'estadoCivil',
        type: 'string',
        required: false,
        message: '',
        placeholder: 'Ingrese su estado civil',
        options: ['Soltero', 'Casado', 'Viudo', 'Divorciado', 'Separado']
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
        tipo: 'TextArea',
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
        tipo: 'TextArea',
        label: 'Expectativas y Percepción del Paciente',
        name: 'Expetativas_y_Percepcion',
        type: 'string',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Ingrese sus expectativas y percepción del paciente'
    },
    {
        tipo: 'TextArea',
        label: 'Impresion inicial de la entrevista',
        name: 'ImpresionInicialDeEntrevista',
        type: 'string',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Ingrese su impresión inicial de la entrevista'
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
        tipo: 'TextArea',
        label: 'ObjetivoGeneral',
        name: 'ObjetivoGeneral',
        type: 'string',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Ingrese su objetivo general'
    },
    {
        tipo: 'DatePicker',
        label: 'Fecha de Atención',
        name: 'FechaAtencion',
        type: 'date',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Ingrese la fecha de atención'
    },
    {
        tipo: 'TextArea',
        label: 'Acciones Delegadas',
        name: 'AccionesDelegadas',
        type: 'string',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Ingrese las acciones delegadas'
    },
    {
        tipo: 'TextArea',
        label: 'Acciones Pertinentes',
        name: 'AccionesPertinentes',
        type: 'string',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Ingrese las acciones pertinentes'
    },
    {
        tipo: 'DatePicker',
        label: 'Fecha de Atención Siguiente',
        name: 'FechaAtencionSiguiente',
        type: 'date',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Ingrese la fecha de atención siguiente'
    },
    {
        tipo: 'TimePicker',
        label: 'Hora',
        name: 'Hora',
        type: 'hour',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Ingrese la hora'
    },
    {
        tipo: 'TextArea',
        label: 'Dieta',
        name: 'Dieta',
        type: 'string',
        required: false,
        message: '',
        placeholder: 'Ingrese la dieta'
    },
    {
        tipo: 'DatePicker',
        label: 'Fecha de Hoy',
        name: 'Fecha',
        type: 'date',
        required: true,
        message: 'Este campo es obligatorio',
        placeholder: 'Ingrese la fecha de hoy'
    }

]
const TituloForm = 'Agregar Paciente'


const AgregarPaciente = () => {

    return (
        <FormDinamico datos={Datos} title={TituloForm}/>  
    )
      
}
/* si usuario == sicologo -> Datos == DatosSicologo.*/

export default AgregarPaciente