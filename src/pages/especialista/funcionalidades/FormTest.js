import React, { useState } from 'react';
import './FormTest.css'; // Archivo CSS para los estilos del formulario

const FormTest = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    diagnosis: '',
    medication: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      age: '',
      diagnosis: '',
      medication: '',
    });
  };

  return (
    <div className="form-container">
      <h2>Formulario de Atenciones Médicas</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Edad:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="diagnosis">Diagnóstico:</label>
          <textarea
            id="diagnosis"
            name="diagnosis"
            value={formData.diagnosis}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="medication">Medicación:</label>
          <input
            type="text"
            id="medication"
            name="medication"
            value={formData.medication}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default FormTest;
