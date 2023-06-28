import React from 'react';
import './../assets/styles/components/Profile.css';

const Profile = (props) => {
  const Mail = props.mail
  const Nombre = props.nombre
  const Rut = props.rut
  const Especialidad = props.cargo
  //const Sexo = props.sexo
  const Telefono = props.telefono
  const Edad = props.edad
  const Direccion = props.direccion

  return (
    <div className="perfil-especialista">
      <h2>Perfil de Especialista</h2>
      <div className="info-container">
        <div className="info-item">
          <label className="info-label">Foto de perfil:</label>
          <div className="profile-image">
            <img
              src="https://cadenaser.com/resizer/w-ML_mEZKwHmNdl2Ng90U7-7ySs=/778x778/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/YN3F6KYV5JP7LEPPWUG5LAJCOQ.jpg"
              alt="Foto de perfil"
              className="profile-image"
            />
          </div>
        </div>
        <div className="info-item">
          <label className="info-label">Nombre:</label>
          <span className="info-text">{Nombre}</span>
        </div>
        <div className="info-item">
          <label className="info-label">RUT:</label>
          <span className="info-text">{Rut}</span>
        </div>
        <div className="info-item">
          <label className="info-label">Especialidad:</label>
          <span className="info-text">{Especialidad}</span>
        </div>
        <div className="info-item">
          <label className="info-label">Edad:</label>
          <span className="info-text">{Edad}</span>
        </div>
        {/* <div className="info-item">
          <label className="info-label">Sexo:</label>
          <span className="info-text">{Sexo}</span>
        </div> */}
        <div className="info-item">
          <label className="info-label">Direccion:</label>
          <span className="info-text">{Direccion}</span>
        </div>
        <div className="info-item">
          <label className="info-label">Telefono:</label>
          <span className="info-text">{Telefono}</span>
        </div>
        <div className="info-item">
          <label className="info-label">Correo:</label>
          <span className="info-text">{Mail}</span>
        </div>
        {/* Resto de la información */}
      </div>
    </div>
  );
};

export default Profile;