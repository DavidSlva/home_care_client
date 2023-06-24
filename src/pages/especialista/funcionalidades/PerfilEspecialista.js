import React from 'react';
import './PerfilEspecialista.css';

const PerfilEspecialista = () => {
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
          <span className="info-text">Dr. Juan Duarte</span>
        </div>
        <div className="info-item">
          <label className="info-label">RUT:</label>
          <span className="info-text">19.794.559-1</span>
        </div>
        <div className="info-item">
          <label className="info-label">Especialidad:</label>
          <span className="info-text">Kinesiología</span>
        </div>
        <div className="info-item">
          <label className="info-label">Sexo:</label>
          <span className="info-text">H</span>
        </div>
        <div className="info-item">
          <label className="info-label">Telefono:</label>
          <span className="info-text">+56 9 5616 1791</span>
        </div>
        {/* Resto de la información */}
      </div>
    </div>
  );
};

export default PerfilEspecialista;
