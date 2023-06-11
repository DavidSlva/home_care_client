import React, { useState } from 'react';
import './FormTest.css';

const FormTest = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    rut: '',
    edad: '',
    lugarNacimiento: '',
    sexo: '',
    estadoCivil: '',
    profesionOficio: '',
    diagnostico: '',
    nombreDeFamiliar: '',
    Expectativas_y_Percepcion: '',
    ImpresionInicialDeEntrevista: '',
    Alergias: '',
    ObjetivoGeneral: '',
    FechaAtencion: '', 
    AccionesDelegadas: '',
    AccionesPertinentes: '',
    FechadeAtencionSiguiente: '',
    Hora: '',
    Dieta: '',
    Fecha: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    const response = await fetch('http://localhost:8000/api/v1/solicitud/ingresa',
    {method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
    })
    console.log(response);
    
    alert('Formulario enviado con éxito');
    setFormData({
      nombre: '',
      apellido: '',
      rut: '',
      edad: '',
      lugarNacimiento: '',
      sexo: '',
      estadoCivil: '',
      profesionOficio: '',
      diagnostico: '',
      nombreDeFamiliar: '',
      Expectativas_y_Percepcion: '',
      ImpresionInicialDeEntrevista: '',
      Alergias: '',
      ObjetivoGeneral: '',
      FechaAtencion: '', 
      AccionesDelegadas: '',
      AccionesPertinentes: '',
      FechadeAtencionSiguiente: '',
      Hora: '',
      Dieta: '',
      Fecha: ''
    });
  };

  return (
    <div className="form-container">
     <center>  <h2>Formulario de Atenciones Médicas</h2> </center>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
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
          <label htmlFor="diagnostico">Diagnóstico Actual:</label>
          <textarea
            id="diagnostico"
            name="diagnostico"
            value={formData.diagnostico}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="nombreDeFamiliar">Nombre de Familiar:</label>
          <input
            type="text"
            id="nombreDeFamiliar"
            name="nombreDeFamiliar"
            value={formData.nombreDeFamiliar}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="Expectativas_y_Percepcion">Expectativas y Percepción:</label>
          <textarea
            id="Expectativas_y_Percepcion"
            name="Expectativas_y_Percepcion"
            value={formData.Expectativas_y_Percepcion}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="ImpresionInicialDeEntrevista">Impresión inicial del Entrevistador:</label>
          <textarea
            id="ImpresionInicialDeEntrevista"
            name="ImpresionInicialDeEntrevista"
            value={formData.ImpresionInicialDeEntrevista}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="Alergias">Alergias:</label>
          <textarea
            id="Alergias"
            name="Alergias"
            value={formData.Alergias}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="ObjetivoGeneral">Objetivo General:</label>
          <input
            type="text"
            id="ObjetivoGeneral"
            name="ObjetivoGeneral"
            value={formData.ObjetivoGeneral}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Dieta">Dieta:</label>
          <input
            type="text"
            id="Dieta"
            name="Dieta"
            value={formData.Dieta}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Fecha">Fecha:</label>
          <input
            type="date"
            id="Fecha"
            name="Fecha"
            value={formData.Fecha}
            onChange={handleInputChange}
          />
        </div>
        <div> 
          <h2>Horario</h2>
        </div> 
        <div className="form-group">
          <label htmlFor="FechaAtencion">Fecha de Atencion:</label>
          <input
            type="date"
            id="FechaAtencion"
            name="FechaAtencion"
            value={formData.FechaAtencion} 
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="AccionesDelegadas">Acciones Delegadas:</label>
          <input
            type="text"
            id="AccionesDelegadas"
            name="AccionesDelegadas"
            value={formData.AccionesDelegadas}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="AccionesPertinentes">Acciones Pertinentes:</label>
          <input
            type="text"
            id="AccionesPertinentes"
            name="AccionesPertinentes"
            value={formData.AccionesPertinentes}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="FechadeAtencionSiguiente">Fechade Atencion Siguiente:</label>
          <input
            type="date"
            id="FechadeAtencionSiguiente"
            name="FechadeAtencionSiguiente"
            value={formData.FechadeAtencionSiguiente}
            onChange={handleInputChange}
          />
        </div> 
        <div className="form-group">
          <label htmlFor="Hora">Hora:</label>
          <input
            type="time"
            id="Hora"
            name="Hora"
            value={formData.Hora}
            onChange={handleInputChange}
          />
        </div> 

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default FormTest;
