import { CheckSquareFilled } from '@ant-design/icons'
import { Card, Row, Col, Typography } from 'antd'
import React from 'react'

interface Props {

}

export default function RobotStatesSection(props: Props) {
    return (
        <Card title="ARAÇ DURUMLARI" style={{ border:"2px solid #8AA6A3"}}>
            <Row justify={'space-around'}>
                <Col span={11} >
                    <Row justify={'space-between'}>
                        <Typography.Text className='text'><strong>Ilerliyor:</strong></Typography.Text>
                        <CheckSquareFilled style={{ color: "green" }} />
                    </Row>
                </Col>
                <Col span={11}>
                    <Row justify={'space-between'}>
                        <Typography.Text className='text'><strong>Engel:</strong></Typography.Text>
                        <CheckSquareFilled style={{ color: "green" }} />
                    </Row>
                </Col>
            </Row>
            <Row></Row>
            <Row justify={'space-around'}>
                <Col span={11} >
                    <Row justify={'space-between'}>
                        <Typography.Text className='text'><strong>Yüklü:</strong></Typography.Text>
                        <CheckSquareFilled style={{ color: "green" }} />
                    </Row>
                </Col>
                
                <Col span={11}>
                    <Row justify={'space-between'}>
                        <Typography.Text className='text'><strong>Fanlar:</strong></Typography.Text>
                        <CheckSquareFilled style={{ color: "red" }} />
                    </Row>
                </Col>
            </Row>
            <Row justify={'space-around'}>
                <Col span={11} >
                    <Row justify={'space-between'}>
                        <Typography.Text className='text'><strong>Acil Durum:</strong></Typography.Text>
                        <CheckSquareFilled style={{ color: "red" }} />
                    </Row>
                </Col>
                <Col span={11}>
                    <Row justify={'space-between'}>
                        <Typography.Text className='text'><strong>Dönüş:</strong></Typography.Text>
                        <CheckSquareFilled style={{ color: "red" }} />
                    </Row>
                </Col>
            </Row>
        </Card>
    )
}