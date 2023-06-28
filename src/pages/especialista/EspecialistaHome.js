import React from 'react'
import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
const { Meta } = Card;
const cards = [
  {
    title: 'Mi Perfil',
    description: 'Ver/Editar Perfil',
    img: "https://www.uchile.cl/.imaging/stk/uchile/nav-lateral-ancho/dam/imagenes/Salud-publica/imagenes-noticias/162548_1_personal-sanitario_L/jcr:content/personal-sanitario.jpg.jpg",
    enlace: "/especialista/perfil"
  },
  {
    title: 'Lista de Pacientes',
    description: 'Pacientes asignados ficha medica',
    img: "https://www.farmaindustria.es/web/wp-content/uploads/sites/2/2020/05/ID-y-pacientes.jpg",
    enlace: "/especialista/pacientes"
  },
  {
    title: 'Crear Formulario',
    description: 'Cree un formulario para registrar datos de un paciente',
    img: "https://www.promedco.com/images/NOTICIAS_2020/comodidad-del-paciente-1.jpg",
    enlace: "/especialista/crearform"
  },
  {
    title: 'Mi Agenda',
    description: 'Ver Agenda de Citas',
    img: "https://cdn-icons-png.flaticon.com/512/425/425868.png",
    enlace: "/especialista/agenda"
  }
   
]
const EspecialistaHome = () => (
    <Row gutter={16}> 
    {
      cards?.map((card) => (
      <Col span={8} className='card__col'>
      <Link to={card.enlace}>
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
      </Link>
      </Col>
      ))
    }
</Row>
      
);

export default EspecialistaHome