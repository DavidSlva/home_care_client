import React from 'react';
import Listadinamica from '../../../components/lists/Listadinamica.js';
const columns = [
  {
    title: 'RUT',
    width: 40,
    dataIndex: 'rut',
    key: 'rut',
    fixed: 'left',
  },
  {
    title: 'Nombre',
    width: 60,
    dataIndex: 'nombre',
    key: 'name',
    //fixed: 'left',
  },
  {
    title: 'Apellido',
    width: 60,
    dataIndex: 'apellido',
    key: 'apellido',
    //fixed: 'left',
  },
  {
    title: 'Especialidad',
    width: 60,
    dataIndex: 'especialidad',
    key: 'especialidad',
  },
  {
    title: 'Sexo',
    dataIndex: 'sexo',
    key: '1',
    width: 30,
  },
  {
    title: 'Telefono',
    dataIndex: 'telefono',
    key: '2',
    width: 50,
  },
  {    
    title: 'Email',
    dataIndex: 'email',
    key: '3',
    width: 40,
  },
  {
    title: 'Detalles',
    key: 'operation',
    fixed: 'right',
    width: 30,
    render: () => <a>Detalles</a>,
  },
  {
    title: 'Eliminar',
    key: 'operation',
    fixed: 'right',
    width: 30,
    render: () => <a>Eliminar</a>,
  },
];
const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    nombre: `Eugenio ${i}`,
    apellido: `Gonzalez ${i}`,
    especialidad: `Kinesiología`,
    rut: `12345678-${i}`,
    telefono: `+569${i}${i}${i}75043`,
    email: "test@test.com",
    sexo: "M",
  });
}
const title = "Personal Actual"
const boton = "Agregar Personal"
const enlace = "/admin/agregarespecialista"
const AdminPersonal = () => {
  return(
    <div>
      <Listadinamica columns={columns} data={data} title={title} boton={boton} enlace={enlace}/>
    </div>
  );
}

export default AdminPersonal;


