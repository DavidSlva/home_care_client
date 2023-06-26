import { Table } from 'antd';
import React from 'react';
import { Card , Button, Space} from 'antd';
import { Link } from 'react-router-dom';

const Listadinamica = (props) => {
    const columns = props.columns
    const data = props.data
    const title = props.title
    const boton = props.boton
    const enlace = props.enlace
    return(
        <Card title={title} style={{textAlign: 'center'}}>
        <Table
            columns={columns}
            dataSource={data}
            scroll={{
                x: 1500,
                y: 450,
            }}
        />
        <Link to={enlace}>
        <Space wrap>
            <Button type="primary">{boton}</Button>
        </Space>
        </Link>
        </Card>
    
    );

}
export default Listadinamica;
