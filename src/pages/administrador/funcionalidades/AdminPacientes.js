import React, { useEffect, useState }  from 'react';
import Listadinamica from '../../../components/lists/Listadinamica.js';
import { getApi, postApi } from '../../../api/index.js';


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
    title: 'Sexo',
    width: 40,
    dataIndex: 'Sexo',
    key: 'Sexo',
  },
  {
    title: 'Direccion',
    width: 40,
    dataIndex: 'Direccion',
    key: 'Direccion',
  },
  {
    title: 'Cobertura',
    width: 40,
    dataIndex: 'Cobertura',
    key: 'Cobertura',
  },
  {
    title: 'Diagnóstico',
    width: 40,
    dataIndex: 'Diagnostico_Inicial',
    key: 'Diagnostico',
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
      <a onClick={() => handleEliminar(record)} href='/admin/AdminPacientes'>Eliminar</a>
    ),
  },
  // Definición de columnas
];
const handleEliminar = (record) => {
  const id = record.ID; // Acceder al ID del registro
  console.log('Eliminar registro', id);
  
  postApi(`/Perfil/Paciente/eliminar/${id}`)
    .then(response => {
      console.log('Registro eliminado exitosamente');
      // Realiza las operaciones necesarias después de eliminar el registro
    })
    .catch(error => {
      console.error('Error al eliminar el registro:', error);
      // Realiza las operaciones necesarias en caso de error al eliminar el registro
    });
};

const title =" Lista de Pacientes"
const boton = "Agregar Paciente"
const enlace = "/admin/agregarpaciente"

const AdminPacientes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Realiza la petición GET para obtener los datos de los especialistas
    getApi('/listar/Paciente')
      .then(response => {
        const data = response.data.lista || [];
        setData(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error al obtener los pacientes:', error);
      });
  }, []);
  return(
    <div>
      <Listadinamica columns={columns} data={data} title={title} boton={boton} enlace={enlace}/>
    </div>
  );
}

export default AdminPacientes;
