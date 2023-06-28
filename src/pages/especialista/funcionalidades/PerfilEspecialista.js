import React from 'react';
import Profile from '../../../components/Profile';

let user = localStorage.getItem('user')
user = JSON.parse(user)
console.log(user)

const PerfilEspecialista = () => {
  const Nombre = user.Nombre
  const Rut = user.RUT
  const Cargo = user.Cargo
  //const Sexo = user.Sexo
  const Telefono = user.Telefono
  const Direccion = user.Direccion
  const Edad = user.Edad
  const Mail = user.Mail

  return (
    <Profile nombre={Nombre} rut={Rut} cargo={Cargo} telefono={Telefono} direccion={Direccion} edad={Edad} mail={Mail} />
  
  )
};
    
export default PerfilEspecialista;
