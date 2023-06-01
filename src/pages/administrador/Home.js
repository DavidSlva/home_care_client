import React from 'react'
import { Card, Col, Row } from 'antd';
const { Meta } = Card;
const cards = [
  {
    title: 'Administrar Personal de Salud',
    description: 'Agregar/Eliminar Personal',
    img: "https://www.uchile.cl/.imaging/stk/uchile/nav-lateral-ancho/dam/imagenes/Salud-publica/imagenes-noticias/162548_1_personal-sanitario_L/jcr:content/personal-sanitario.jpg.jpg"
  },
  {
    title: 'Ver Personal de Salud Actual',
    description: 'Horarios, registros, contacto, etc',
    img: "https://cindercapacitacion.com/wp-content/uploads/2022/07/cursos-para-trabajadores-de-la-salud-1.jpg"
  },
  {
    title: 'Ver Pacientes',
    description: 'Ver registro de pacientes actuales',
    img: "https://www.promedco.com/images/NOTICIAS_2020/comodidad-del-paciente-1.jpg"
   },
   {
    title: 'Generador de Horarios',
    description: 'Genera horarios de visita para el personal de salud',
    img: "https://cdn-icons-png.flaticon.com/512/425/425868.png"
   },
   {
    title: 'Gestion Financiera',
    description: 'Registro de pagos, facturas, etc',
    img:"https://www.unap.cl/prontus_unap/site/artic/20140909/imag/foto_0000000220140909133126/finanzas_institucionales.jpg"   
   }
   
]
const Home = () => (
<Card  title="Panel de Administrador" style={{textAlign: 'center'}}>
  <Row gutter={16}>
      {
        cards?.map((card) => (
        <Col span={8}>
        <Card className='card__hover'
              cover={
                <img
                  alt="example"
                  src={card.img}
                  style={{ objectFit: 'cover', height: '250px' }}
                />
              }
        >
        <Meta
          style={{textAlign: 'center'}}
          title={card.title}
          description={card.description}
        />
        </Card>
        </Col>
        ))
      }
  </Row>
</Card>
);
export default Home;