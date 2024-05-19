import {Typography, Card, Col, Form, Row, Select } from 'antd'

interface Props {

}

export default function RouteSection(props: Props) {
    return (
        <Card title = "ROTA BELİRLEME" style={{border:"2px solid #8AA6A3"}}>
            <Row justify={'space-between'}> 
                <Col span={11}>
                    <Form.Item  label={<Typography.Text className='text'>Başlangıç</Typography.Text>}>
                        <Select size='large' options={[{label:"Opt1",value:"Opt1"}]}/>
                    </Form.Item>
                </Col>
                <Col span={11}>
                    <Form.Item label={<Typography.Text className='text'>Bitiş</Typography.Text>}>
                        <Select size='large' options={[{label:"Opt1",value:"Opt1"}]}/>
                    </Form.Item>
                </Col>
            </Row>
        </Card>
    )
}