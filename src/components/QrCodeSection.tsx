import { Card, Col, Row, Typography } from 'antd'

interface Props {

}

const QrCodeSection = (props: Props) => {
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
                        Value 1
                    </Typography.Text>
                </Col>
                <Col span={12}>
                    <Typography.Text className='text'>
                        <strong>
                            X Pozisyonu <br></br>
                        </strong>
                    </Typography.Text>
                    <Typography.Text className='text'>
                        Value 2
                    </Typography.Text>
                </Col>
                <Col span={12}>
                    <Typography.Text className='text'>
                        <strong>
                            Y Pozisyonu <br></br>
                        </strong>
                    </Typography.Text>
                    <Typography.Text className='text'>
                        Value 1
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