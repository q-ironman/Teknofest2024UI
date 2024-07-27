import React from 'react'
import ApplicationContext from '../ApplicationContext'
import { Card, Form, Row, Switch } from 'antd';

type Props = {}

export default function ControlPanel({ }: Props) {
    const pageContext = React.useContext(ApplicationContext);
    React.useEffect(() => {
        pageContext.sendControlPanelData();
    },[pageContext.controlPanelData])
    return (
        <Card title="KONTROL PANELİ" style={{ border: "2px solid #8AA6A3", marginLeft: "3px" }}>
            <Row justify={'space-between'}>
            <Form.Item label="InnerLed">
                <Switch checked={pageContext.controlPanelData?.innerLedActive } onChange={(e) => pageContext.setControlPanelData({ ...pageContext.controlPanelData, innerLedActive: e })}></Switch>
            </Form.Item>
            <Form.Item label="OuterLed">
                <Switch checked={pageContext.controlPanelData?.outerLedActive } onChange={(e) => pageContext.setControlPanelData({ ...pageContext.controlPanelData, outerLedActive: e })}></Switch>
            </Form.Item>
            <Form.Item label="Fan">
                <Switch checked={pageContext.controlPanelData?.fanActive } onChange={(e) => pageContext.setControlPanelData({ ...pageContext.controlPanelData, fanActive: e })}></Switch>
            </Form.Item>
            </Row>
        </Card>
    )
}