import React from 'react'
import FormDinamico2 from '../../../components/forms/FormDinamico2'
import { useState } from 'react';
import { Button, Space} from 'antd';


const Datos = [
    {
        titulo: 'Atencion Medica',
        atajar: '/solicitud/ingresa',
        datos: [
            {
                label: 'RUT del Paciente',
                name: 'RUT_Paciente',
                type: 'string',
                required: true,
                message: 'Este campo es obligatorio',
                placeholder: '19688147-3'
            },
            {
                tipo: 'TextArea',
                label: 'Diagnostico',
                name: 'Diagnostico',
                type: 'string',
                required: true,
                message: 'Este campo es obligatorio',
                placeholder: 'Ingrese sus diagnosticos'
            },
            {
                tipo: 'TextArea',
                label: 'Impresion inicial de la entrevista',
                name: 'Impresion',
                type: 'string',
                required: true,
                message: 'Este campo es obligatorio',
                placeholder: 'Ingrese su impresión inicial de la entrevista'
            },
            {
                tipo: 'TextArea',
                label: 'ObjetivoGeneral',
                name: 'Objetivo_General',
                type: 'string',
                required: true,
                message: 'Este campo es obligatorio',
                placeholder: 'Ingrese su objetivo general'
            },
            {
                tipo: 'DatePicker',
                label: 'Fecha de Atención',
                name: 'Fecha',
                type: 'date',
                required: true,
                message: 'Este campo es obligatorio',
                placeholder: 'Ingrese la fecha de atención'
            },
        
            {
                tipo: 'TextArea',
                label: 'Dieta',
                name: 'Dieta',
                type: 'string',
                required: false,
                message: '',
                placeholder: 'Ingrese la dieta'
            }
        ],
    },
    {
        titulo: 'Signos Vitales',
        atajar: '//signosVitales',
        datos: [
            {
                label: 'RUT del Paciente',
                name: 'Rut',
                type: 'string',
                required: true,
                message: 'Este campo es obligatorio',
                placeholder: '19688147-3'
            },
            {
                label: 'Temperatura',
                name: 'Temperatura',
                type: 'string',
                required: true,
                message: 'Este campo es obligatorio',
                placeholder: 'Ingrese la Temperatura del Paciente'
            },
            {
                label: 'Pulso Cardiaco',
                name: 'Pulso',
                type: 'string',
                required: true,
                message: 'Este campo es obligatorio',
                placeholder: 'Ingrese el Pulso del Paciente'
            },
            {
                label: 'Respiracion',
                name: 'Respiracion',
                type: 'string',
                required: true,
                message: 'Este campo es obligatorio',
                placeholder: 'Ingrese la Respiracion del Paciente'
            },
            {
                label: 'Tensión Arterial',
                name: 'Tension_Arterial',
                type: 'string',
                required: true,
                message: 'Este campo es obligatorio',
                placeholder: 'Ingrese la Tensión arterial del Paciente'
            },
        
            {
                label: 'PVC',
                name: 'pvc',
                type: 'string',
                required: false,
                message: '',
                placeholder: 'Ingrese datos de PVC'
            },
            {
                label: 'Ingesta',
                name: 'Ingesta',
                type: 'string',
                required: false,
                message: '',
                placeholder: 'Ingrese datos de Ingesta'
            },
            {
                label: 'Via',
                name: 'Via',
                type: 'string',
                required: false,
                message: '',
                placeholder: 'Ingrese datos de Via'
            },
            {
                label: 'Excreta',
                name: 'Excreta',
                type: 'string',
                required: false,
                message: '',
                placeholder: 'Ingrese datos de Excreta'
            },
            {
                label: 'Ingesta',
                name: 'Ingesta',
                type: 'string',
                required: false,
                message: '',
                placeholder: 'Ingrese datos de Ingesta'
            },
            {
                label: 'Orina',
                name: 'Orina',
                type: 'string',
                required: false,
                message: '',
                placeholder: 'Ingrese datos de Orina'
            },
            {
                label: 'Turno',
                name: 'Turno',
                type: 'string',
                required: false,
                message: '',
                placeholder: 'Ingrese datos de Turno'
            },
            {
                tipo: 'DatePicker',
                label: 'Fecha de Hoy',
                name: 'Fecha',
                type: 'date',
                required: true,
                message: 'Este campo es obligatorio',
                placeholder: 'Ingrese la fecha de atención'
            }
        ]
    },
    {
        titulo: 'Suministro Medicamento',
        datos: [
            {
                label: 'RUT del Paciente',
                name: 'Rut',
                type: 'string',
                required: true,
                message: 'Este campo es obligatorio',
                placeholder: '19688147-3'
            },
            {
                label: 'Medicamento',
                name: 'Medicamento',
                type: 'string',
                required: true,
                message: 'Este campo es obligatorio',
                placeholder: 'Ingrese Medicamentos para el Paciente'
            },
            {
                label: 'Vias de Administracion',
                name: 'Via',
                type: 'string',
                required: true,
                message: 'Este campo es obligatorio',
                placeholder: 'Ingrese el Pulso del Paciente'
            },
            {
                label: 'Complicaciones',
                name: 'Complicaciones',
                type: 'string',
                required: true,
                message: 'Este campo es obligatorio',
                placeholder: 'Ingrese las complicaciones del Paciente'
            },
        
            {
                label: 'PVC',
                name: 'pvc',
                type: 'string',
                required: false,
                message: '',
                placeholder: 'Ingrese datos de PVC'
            },
            {
                label: 'Via',
                name: 'Via',
                type: 'string',
                required: false,
                message: '',
                placeholder: 'Ingrese datos de Via'
            },
            {
                label: 'Turno',
                name: 'Turno',
                type: 'string',
                required: false,
                message: '',
                placeholder: 'Ingrese datos de Turno'
            },
            {
                tipo: 'DatePicker',
                label: 'Fecha de Hoy',
                name: 'Fecha',
                type: 'date',
                required: true,
                message: 'Este campo es obligatorio',
                placeholder: 'Ingrese la fecha de atención'
            }
        ],
    },
];

const CrearForm = () => {
    const [selectedSubarray, setSelectedSubarray] = useState(null);
  
    const handleSelectSubarray = (index) => {
      setSelectedSubarray(Datos[index]);
    };

  
    return (
      <div>
        <div>
        
          <h3>Cambiar Formulario</h3>
          <ul>
            {Datos.map((subarray, index) => (
              <li key={index}>
                <Space wrap>
                <Button onClick={() => handleSelectSubarray(index)}>{subarray.titulo}</Button>
                </Space>
              </li>
            ))}
          </ul>
        
        </div>
  
        {selectedSubarray && (
          <FormDinamico2
            datos={selectedSubarray.datos}
            title={`Formulario de ${selectedSubarray.titulo}`}
            //redireccionar="/especialista/"
            atajar={selectedSubarray.atajar}
          />
        )}
     </div>
    );
  };
  
  export default CrearForm;