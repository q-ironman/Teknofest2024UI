import { Card, Col, Row, Typography } from 'antd'
import * as React from "react"
import ApplicationContext from '../ApplicationContext'
interface Props {

}

const QrCodeSection = (props: Props) => {
    var pageContext = React.useContext(ApplicationContext);
    return (
        <Card title="QRKOD X BİLGİLERİ" style={{ border: "2px solid #8AA6A3" }}>
            <Row justify={'space-between'} >
                <Col span={12}>
                    <Typography.Text className='text'>
                        <strong>
                            Ad <br></br>
                        </strong>
                    </Typography.Text>
                    <Typography.Text className='text'>
                        {pageContext.qrInfo?.Name ?? "Başlangıç"}
                    </Typography.Text>
                </Col>
                <Col span={12}>
                    <Typography.Text className='text'>
                        <strong>
                            X Pozisyonu <br></br>
                        </strong>
                    </Typography.Text>
                    <Typography.Text className='text'>
                        {pageContext.qrInfo?.X ?? "Başlangıç"}
                    </Typography.Text>
                </Col>
                <Col span={12}>
                    <Typography.Text className='text'>
                        <strong>
                            Y Pozisyonu <br></br>
                        </strong>
                    </Typography.Text>
                    <Typography.Text className='text'>
                        {pageContext.qrInfo?.Y ?? "Başlangıç"}
                    </Typography.Text>
                </Col>
                <Col span={12}>
                    <Typography.Text className='text'>
                        <strong>
                            Tip <br></br>
                        </strong>
                    </Typography.Text>
                    <Typography.Text className='text'>
                        Value 1
                    </Typography.Text>
                </Col>
            </Row>
        </Card>
    )
}

export default QrCodeSection