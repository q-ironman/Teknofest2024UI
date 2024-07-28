import { CheckSquareFilled } from '@ant-design/icons'
import { Card, Row, Col, Typography } from 'antd'
import React from 'react'
import ApplicationContext from '../ApplicationContext'

interface Props {

}

export default function RobotStatesSection(props: Props) {
    const pageContext = React.useContext(ApplicationContext);
    return (
        <Card title="ARAÇ DURUMLARI" style={{ border:"2px solid #8AA6A3"}}>
            <Row justify={'space-around'}>
                <Col span={11} >
                    <Row justify={'space-between'}>
                        <Typography.Text className='text'><strong>Ilerliyor:</strong></Typography.Text>
                        <CheckSquareFilled style={{ color: pageContext.robotStates?.IsMoving ? "green":"red" }} />
                    </Row>
                    <Row justify={'space-between'}>
                        <Typography.Text className='text'><strong>Yüklü:</strong></Typography.Text>
                        <CheckSquareFilled style={{ color: pageContext.robotStates?.IsLoaded ? "green":"red" }} />
                    </Row>
                    <Row justify={'space-between'}>
                        <Typography.Text className='text'><strong>Inner Led:</strong></Typography.Text>
                        <CheckSquareFilled style={{ color: pageContext.robotStates?.Leds?.Inner ? "green":"red" }} />
                    </Row>
                    <Row justify={'space-between'}>
                        <Typography.Text className='text'><strong>Acil Durum:</strong></Typography.Text>
                        <CheckSquareFilled style={{ color: pageContext.robotStates?.Emergency ? "green":"red" }} />
                    </Row>
                </Col>
                <Col span={11}>
                    <Row justify={'space-between'}>
                        <Typography.Text className='text'><strong>Engel:</strong></Typography.Text>
                        <CheckSquareFilled style={{ color: pageContext.robotStates?.Obstacle ? "green":"red" }} />
                    </Row>
                    <Row justify={'space-between'}>
                        <Typography.Text className='text'><strong>Yüklü:</strong></Typography.Text>
                        <CheckSquareFilled style={{ color: pageContext.robotStates?.IsLoaded ? "green":"red" }} />
                    </Row>
                    <Row justify={'space-between'}>
                        <Typography.Text className='text'><strong>Outer Led:</strong></Typography.Text>
                        <CheckSquareFilled style={{ color: pageContext.robotStates?.Leds?.Outer ? "green":"red" }} />
                    </Row>
                </Col>
            </Row>
            
            
        </Card>
    )
}