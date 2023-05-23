import { Table } from 'antd';
import React from 'react';
import { Card } from 'antd';
const columns = [
  {
    title: 'Nombre Completo',
    width: 100,
    dataIndex: 'nombre',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Edad',
    width: 100,
    dataIndex: 'edad',
    key: 'age',
    fixed: 'left',
  },
  {
    title: 'Direccion',
    dataIndex: 'direccion',
    key: '1',
    width: 150,
  },
  {
    title: 'Servicio Solicitado',
    dataIndex: 'servicio',
    key: '2',
    width: 150,
  },
  {
    title: 'Fecha de Visita',
    dataIndex: 'fecha',
    key: '3',
    width: 150,
  },
  {
    title: 'Hora de Visita',
    dataIndex: 'hora',
    key: '4',
    width: 150,
  },
  {
    title: 'Antecedentes médicos',
    dataIndex: 'text',
    key: '5',
    width: 150,
  },
  {
    title: 'Sexo',
    dataIndex: 'sexo',
    key: '6',
    width: 100,
  },
  {
    title: 'Rut',
    dataIndex: 'rut',
    key: '7',
    width: 150,
  },
  {
    title: 'Prevision',
    dataIndex: 'prevision',
    key: '8',
    width: 150,
  },
  {
    title: 'Ocupacion',
    dataIndex: 'ocupacion',
    key: '8',
    width: 150,
  },
  {
    title: 'Estado',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>Aceptar</a>,
  },
];
const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    nombre: `Eugenio ${i}`,
    edad: 32,
    direccion: `Ejército ${i}`,
    servicio: 'Kinesiología',
    fecha: "2000-01-01",
    hora: "15:00",
    text: "Sin Antecedentes",
    numero: "123456789",
    email: "test@test.com",
    rut: "123456789",
    prevision: "Fonasa",
    sexo: "F",
    ocupacion: "Estudiante",
  });
}
const App = () => (
  <Card title="Panel de Trabajo" style={{textAlign: 'center'}}>
    <Card title="Lista de Pacientes" style={{textAlign: 'center'}}>
    <Table
    columns={columns}
    dataSource={data}
    scroll={{
      x: 1500,
      y: 300,
    }}
    />
    </Card>
  </Card>
  

);

export default App;