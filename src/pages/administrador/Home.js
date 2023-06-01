import React from 'react'
import { Card, Col, Row } from 'antd';
import backgroundImage from '../../assets/img/jpg/pexels-johannes-plenio-1103970.jpg';
import { Link } from 'react-router-dom';
const { Meta } = Card;
const App = () => (
<Card  title="Panel de Administrador" style={{textAlign: 'center'}}>
  <Row gutter={16}>
    <Col span={8}>
    <Link to='/Perfil'>
    <Card className='card__hover'
      cover={
        <img
          alt="example"
          src="https://www.uchile.cl/.imaging/stk/uchile/nav-lateral-ancho/dam/imagenes/Salud-publica/imagenes-noticias/162548_1_personal-sanitario_L/jcr:content/personal-sanitario.jpg.jpg"
          style={{ objectFit: 'cover', height: '250px' }}
        />
      }
      
    >
   
    <Meta
      style={{textAlign: 'center'}}
      title="Administrar Personal de Salud"
      description="Agregar/Eliminar Personal"
    />
    </Card>
    </Link>
    </Col>
    <Col span={8}>
    <Card className='card__hover'
      cover={
        <img
          style={{ objectFit: 'cover', height: '250px' }}
          alt="example"
          src="https://cindercapacitacion.com/wp-content/uploads/2022/07/cursos-para-trabajadores-de-la-salud-1.jpg"
        />
      }
    
    >
    <Meta
      style={{textAlign: 'center'}}
      title="Ver Personal de Salud Actual"
      description="Horarios, registros, contacto, etc"
    />
    </Card>
    </Col>
    <Col span={8}>
    <Card className='card__hover'
      cover={
        <img
          style={{ objectFit: 'cover', height: '250px' }}
          alt="example"
          src="https://www.promedco.com/images/NOTICIAS_2020/comodidad-del-paciente-1.jpg"
        />
      }
    >
    <Meta
      style={{textAlign: 'center'}}
      title="Ver Pacientes"
      description="Ver registro de pacientes actuales"
    />
    </Card>
    </Col>
  </Row>
  <Row gutter={16}>
    <Col span={8}>
    <Card className='card__hover'
      cover={
        <img
          alt="example"
          src="https://cdn-icons-png.flaticon.com/512/425/425868.png"
          style={{ objectFit: 'cover', height: '250px' }}
        />
      }
    >
    <Meta
      style={{textAlign: 'center'}}
      title="Generador de Horarios"
      description="Genera horarios de visita para el personal de salud"
    />
    </Card>
    </Col>
    <Col span={8}>
    <Card className='card__hover'
      cover={
      <img
        style={{ objectFit: 'cover', height: '250px' }}
        alt="example"
        src="https://www.unap.cl/prontus_unap/site/artic/20140909/imag/foto_0000000220140909133126/finanzas_institucionales.jpg"
      />
      }
    >
    <Meta
      style={{textAlign: 'center'}}
      title="Gestion Financiera"
      description="Registro de pagos, facturas, etc"
    />
    </Card>
    </Col>
    
  </Row>
</Card>
);
export default App;