import React, { useState } from 'react';
import './FormTest.css';

const FormTest = () => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    rut: '',
    edad: '',
    lugarNacimiento: '',
    sexo: '',
    estadoCivil: '',
    profesionOficio: '',
    diagnosticoActual: '',
    nombreFamiliar: '',
    expectativasPercepcion: '',
    impresionEntrevistador: '',
    alergias: '',
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
      nombres: '',
      apellidos: '',
      rut: '',
      edad: '',
      lugarNacimiento: '',
      sexo: '',
      estadoCivil: '',
      profesionOficio: '',
      diagnosticoActual: '',
      nombreFamiliar: '',
      expectativasPercepcion: '',
      impresionEntrevistador: '',
      alergias: '',
    });
  };

  return (
    <div className="form-container">
      <h2>Formulario de Atenciones Médicas</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombres">Nombres:</label>
          <input
            type="text"
            id="nombres"
            name="nombres"
            value={formData.nombres}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="apellidos">Apellidos:</label>
          <input
            type="text"
            id="apellidos"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="rut">RUT:</label>
          <input
            type="text"
            id="rut"
            name="rut"
            value={formData.rut}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="edad">Edad:</label>
          <input
            type="number"
            id="edad"
            name="edad"
            value={formData.edad}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lugarNacimiento">Lugar de Nacimiento:</label>
          <input
            type="text"
            id="lugarNacimiento"
            name="lugarNacimiento"
            value={formData.lugarNacimiento}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="sexo">Sexo:</label>
          <select
            id="sexo"
            name="sexo"
            value={formData.sexo}
            onChange={handleInputChange}
          >
            <option value="">Seleccionar</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="estadoCivil">Estado Civil:</label>
          <select
            id="estadoCivil"
            name="estadoCivil"
            value={formData.estadoCivil}
            onChange={handleInputChange}
          >
            <option value="">Seleccionar</option>
            <option value="soltero">Soltero</option>
            <option value="casado">Casado</option>
            <option value="divorciado">Divorciado</option>
            <option value="viudo">Viudo</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="profesionOficio">Profesión u Oficio:</label>
          <input
            type="text"
            id="profesionOficio"
            name="profesionOficio"
            value={formData.profesionOficio}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="diagnosticoActual">Diagnóstico Actual:</label>
          <textarea
            id="diagnosticoActual"
            name="diagnosticoActual"
            value={formData.diagnosticoActual}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="nombreFamiliar">Nombre de Familiar:</label>
          <input
            type="text"
            id="nombreFamiliar"
            name="nombreFamiliar"
            value={formData.nombreFamiliar}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="expectativasPercepcion">Expectativas y Percepción:</label>
          <textarea
            id="expectativasPercepcion"
            name="expectativasPercepcion"
            value={formData.expectativasPercepcion}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="impresionEntrevistador">Impresión inicial del Entrevistador:</label>
          <textarea
            id="impresionEntrevistador"
            name="impresionEntrevistador"
            value={formData.impresionEntrevistador}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="alergias">Alergias:</label>
          <textarea
            id="alergias"
            name="alergias"
            value={formData.alergias}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default FormTest;
