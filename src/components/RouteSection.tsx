import { Typography, Card, Col, Form, Row, Select, Button } from 'antd'
import * as React from 'react'
import ApplicationContext from '../ApplicationContext';
interface Props {

}

const routeNodes = [
    { label: "S1", value: "Q22" },
    { label: "S2", value: "Q7" },
    { label: "A", value: "Q50" },
    { label: "B", value: "Q45" },
    { label: "C", value: "Q38" },
    { label: "D", value: "Q33" },
];

const robotDirections = [
    { label: "İleri", value: "F" },
    { label: "Sağ", value: "R" },
    { label: "Sol", value: "L" },
];

const loadingNodes = [
    { label: "A", value: "Q50" },
    { label: "D", value: "Q33" },
];

const unloadingNodes = [
    { label: "B", value: "Q45" },
    { label: "C", value: "Q38" },
];
export default function RouteSection(props: Props) {
    const pageContext = React.useContext(ApplicationContext);
    const [selectedNodeLabel, setSelectedNodeLabel] = React.useState<any | undefined>(undefined);
    const [selectedNode, setSelectedNode] = React.useState<any | undefined>(undefined);
    const [routeText, setRouteText] = React.useState<string>("")

    const onAddButtonClick = () => {
        if (!selectedNodeLabel) {
            return;
        }

        let newArray = pageContext.currentRoute!?.length > 0 ? [...pageContext.currentRoute!, selectedNode] : [selectedNode]
        pageContext.setCurrentRoute(newArray);
    }

    const onRemoveButtonClick = () => {
        if (pageContext.currentRoute && pageContext.currentRoute?.length > 0) {
            let newArray = [...pageContext.currentRoute];
            newArray?.pop();
            pageContext.setCurrentRoute(newArray);
        }
    }

    const onResetButtonClick = () => {
        setSelectedNodeLabel(undefined);
        setSelectedNode(undefined);
        pageContext.setCurrentRoute(undefined);
        pageContext.setCurrentDirection(undefined);
    }

    React.useEffect(() => {
        let tmp = '';
        if (pageContext.currentRoute && pageContext.currentRoute?.length > 0) {
            pageContext.currentRoute!?.map((k: any, index: any) => {
                if (index === 0) {
                    tmp = tmp.concat(k?.label)
                }
                else {
                    tmp = tmp?.concat(' - ' + k?.label)
                }
            });
        }
        setRouteText(tmp)
    }, [pageContext.currentRoute])

    return (
        <Card title="ROTA BELİRLEME" style={{ border: "2px solid #8AA6A3" }}>
            <Row justify="space-between">
                <Col span={11}>
                    <Form.Item label={<Typography.Text className='text'>Nokta</Typography.Text>}>
                        <Select 
                            value={selectedNodeLabel} 
                            onChange={(value, option) => {
                                setSelectedNodeLabel(value); 
                                setSelectedNode(option);
                            }} 
                            size='middle' 
                            options={routeNodes} 
                        />
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Button onClick={onAddButtonClick}>Ekle</Button>
                </Col>
                <Col span={4}>
                    <Button onClick={onRemoveButtonClick}>Sil</Button>
                </Col>
                <Col span={4}>
                    <Button onClick={onResetButtonClick}>Sıfırla</Button>
                </Col>
            </Row>
            <Row>
                <Col span={11}>
                    <Form.Item label={<Typography.Text className='text'>Robot Yönü</Typography.Text>}>
                        <Select 
                            options={robotDirections} 
                            value={pageContext.currentDirection} 
                            onChange={pageContext.setCurrentDirection} 
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row justify="space-between">
                <Col span={11}>
                    <Form.Item label={<Typography.Text className='text'>Yükleme Noktaları</Typography.Text>}>
                        <Select 
                            mode='multiple'
                            value={pageContext.currentLoadingNode} 
                            onChange={(value, option) => { 
                                pageContext.setCurrentLoadingNode(value); 
                            }} 
                            size='middle' 
                            options={loadingNodes} 
                        />
                    </Form.Item>
                </Col>
                <Col span={11}>
                    <Form.Item label={<Typography.Text className='text'>Boşaltma Noktaları</Typography.Text>}>
                        <Select 
                            mode='multiple'
                            value={pageContext.currentUnloadingNode} 
                            onChange={(value, option) => { 
                                pageContext.setCurrentUnloadingNode(value); 
                            }} 
                            size='middle' 
                            options={unloadingNodes} 
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Typography.Text>{routeText}</Typography.Text>
            </Row>
        </Card>
    )
}