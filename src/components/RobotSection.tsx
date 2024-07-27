import { Card, Col, Row, Typography } from 'antd'
import ApplicationContext from '../ApplicationContext'
import * as React from "react"
interface Props {

}

export default function RobotSection({ }: Props) {
    const pageContext = React.useContext(ApplicationContext)
    React.useEffect(() => {
        console.log(pageContext.telemetryData)
    },[])
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
                        <Typography.Text>{pageContext.telemetryData?.CarTelemtry?.Angle ?? 0}</Typography.Text>
                    </Row>
                </Col>
            </Row>
            <Row justify={'space-around'}>
            <Col span={11} >
                    <Row justify={'space-between'}>
                        <Typography.Text className='text'><strong>Akım(A):</strong></Typography.Text>
                        <Typography.Text>{pageContext.telemetryData?.Current??0}</Typography.Text>
                    </Row>
                </Col>
                <Col span={11} >
                    <Row justify={'space-between'}>
                        <Typography.Text className='text'><strong>Raspberry Sıcaklık:</strong></Typography.Text>
                        <Typography.Text>{pageContext.telemetryData?.HeatTelemetry?.RaspberryHeat ?? 0}</Typography.Text>
                    </Row>
                </Col>
                
            </Row>
            <Row justify={'space-around'}>
            <Col span={11} >
                    <Row justify={'space-between'}>
                        <Typography.Text className='text'><strong>Akım(A):</strong></Typography.Text>
                        <Typography.Text>{pageContext.telemetryData?.Current??0}</Typography.Text>
                    </Row>
                </Col>
                <Col span={11} >
                    <Row justify={'space-between'}>
                        <Typography.Text className='text'><strong>Jetson Sıcaklık:</strong></Typography.Text>
                        <Typography.Text>{pageContext.telemetryData?.HeatTelemetry?.JetsonHeat ?? 0}</Typography.Text>
                    </Row>
                </Col>
                
            </Row>
            <Row justify={'space-around'}>
                <Col span={11} >
                    <Row justify={'space-between'}>
                        <Typography.Text className='text'><strong>Arduino Sıcaklık:</strong></Typography.Text>
                        <Typography.Text>{pageContext.telemetryData?.HeatTelemetry?.ArduinoHeat}</Typography.Text>
                    </Row>
                </Col>
                <Col span={11}>
                    <Row justify={'space-between'}>
                        <Typography.Text className='text'><strong>Pil(%):</strong></Typography.Text>
                        <Typography.Text>{pageContext.telemetryData?.BatteryTelemetry?.Level ?? 0}</Typography.Text>
                    </Row>
                </Col>
            </Row>
            <Row justify={'space-around'}>
            <Col span={11}>
                    <Row justify={'space-between'}>
                        <Typography.Text className='text'><strong>Gelecek Düğüm:</strong></Typography.Text>
                        <Typography.Text>{pageContext.telemetryData?.nextNode}</Typography.Text>
                    </Row>
                </Col>                
                <Col span={11} >
                    <Row justify={'space-between'}>
                        <Typography.Text className='text'><strong>Konumu(X,Y):</strong></Typography.Text>
                        <Typography.Text>{pageContext.telemetryData?.CarTelemetry ? `(${pageContext.telemetryData?.CarTelemetry?.X},${pageContext.telemetryData?.CarTelemetry?.Y})`: "(0,0)"}</Typography.Text>
                    </Row>
                </Col>
            </Row>
        </Card>
    )
}