import React, { useEffect, useState } from 'react';
import Listadinamica from '../../../components/lists/Listadinamica.js';
import { postApi, getApi } from '../../../api/index.js';


const columns = [
  {
    title: 'RUT',
    width: 40,
    dataIndex: 'RUT',
    key: 'RUT',
    fixed: 'left',
  },
  {
    title: 'Nombre',
    width: 40,
    dataIndex: 'Nombre',
    key: 'Nombre',
    fixed: 'left',
  },
  {
    title: 'Cargo',
    width: 40,
    dataIndex: 'Cargo',
    key: 'Cargo',
  },
  {
    title: 'Direccion',
    width: 40,
    dataIndex: 'Direccion',
    key: 'Direccion',
  },
  {
    title: 'Email',
    width: 40,
    dataIndex: 'Mail',
    key: 'Mail',
  },
  {
    title: 'Telefono',
    width: 40,
    dataIndex: 'Telefono',
    key: 'Telefono',
    fixed: 'right',
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
    render: (text, record) => (
      <a onClick={() => handleEliminar(record)} href='/admin/AdminPersonal'>Eliminar</a>
    ),
  },
  // Definición de columnas
];
const handleEliminar = (record) => {
  const id = record.ID; // Acceder al ID del registro
  console.log('Eliminar registro', id);
  
  postApi(`/Perfil/Especialista/eliminar/${id}`)
    .then(response => {
      console.log('Registro eliminado exitosamente');
      // Realiza las operaciones necesarias después de eliminar el registro
    })
    .catch(error => {
      console.error('Error al eliminar el registro:', error);
      // Realiza las operaciones necesarias en caso de error al eliminar el registro
    });
};


const title = 'Personal Actual';
const boton = 'Agregar Personal';
const enlace = '/admin/agregarespecialista';

const AdminPersonal = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Realiza la petición GET para obtener los datos de los especialistas
    getApi('/listar/Especialista')
      .then(response => {
        const data = response.data.lista || [];
        setData(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error al obtener los especialistas:', error);
      });
  }, []);

  return (
    <div>
      <div className="table-container">
        <Listadinamica columns={columns} data={data} boton={boton} enlace={enlace} title={title} />
      </div>
    </div>
  );
};

export default AdminPersonal;

