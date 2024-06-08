import { Card, Col, Row, Typography } from 'antd'
import ApplicationContext from '../ApplicationContext'
import * as React from "react"
interface Props {

}

export default function RobotSection({ }: Props) {
    const pageContext = React.useContext(ApplicationContext)
    return (
        <Card title="DEĞİŞKENLER" style={{ border:"2px solid #8AA6A3"}}>
            <Row justify={'space-around'}>
                <Col span={11} >
                    <Row justify={'space-between'}>
                        <Typography.Text className='text'><strong>Hız(m/s):</strong></Typography.Text>
                        <Typography.Text>60</Typography.Text>
                    </Row>
                </Col>
                <Col span={11}>
                    <Row justify={'space-between'}>
                        <Typography.Text className='text'><strong>Görev Süresi(s):</strong></Typography.Text>
                        <Typography.Text>60</Typography.Text>
                    </Row>
                </Col>
            </Row>
            <Row justify={'space-around'}>
            <Col span={11}>
                    <Row justify={'space-between'}>
                        <Typography.Text className='text'><strong>Gerilim(V):</strong></Typography.Text>
                        <Typography.Text>15</Typography.Text>
                    </Row>
                </Col>
                <Col span={11}>
                    <Row justify={'space-between'}>
                        <Typography.Text className='text'><strong>Araç Yönü:</strong></Typography.Text>
                        <Typography.Text>30</Typography.Text>
                    </Row>
                </Col>
            </Row>
            <Row justify={'space-around'}>
            <Col span={11} >
                    <Row justify={'space-between'}>
                        <Typography.Text className='text'><strong>Akım(A):</strong></Typography.Text>
                        <Typography.Text>0.05</Typography.Text>
                    </Row>
                </Col>
                <Col span={11} >
                    <Row justify={'space-between'}>
                        <Typography.Text className='text'><strong>Düğüm:</strong></Typography.Text>
                        <Typography.Text>Q10</Typography.Text>
                    </Row>
                </Col>
                
            </Row>
            <Row justify={'space-around'}>
                <Col span={11} >
                    <Row justify={'space-between'}>
                        <Typography.Text className='text'><strong>Sıcaklık:</strong></Typography.Text>
                        <Typography.Text>45</Typography.Text>
                    </Row>
                </Col>
                <Col span={11}>
                    <Row justify={'space-between'}>
                        <Typography.Text className='text'><strong>Pil(%):</strong></Typography.Text>
                        <Typography.Text>33</Typography.Text>
                    </Row>
                </Col>
            </Row>
            <Row justify={'space-around'}>
            <Col span={11}>
                    <Row justify={'space-between'}>
                        <Typography.Text className='text'><strong>Gelecek Düğüm:</strong></Typography.Text>
                        <Typography.Text>Q12</Typography.Text>
                    </Row>
                </Col>                
                <Col span={11} >
                    <Row justify={'space-between'}>
                        <Typography.Text className='text'><strong>Konumu(X,Y):</strong></Typography.Text>
                        <Typography.Text>(123,145)</Typography.Text>
                    </Row>
                </Col>
            </Row>
        </Card>
    )
}