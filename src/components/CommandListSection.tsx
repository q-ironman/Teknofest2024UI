import { Button, Card, Flex } from 'antd'
import * as React from "react"
import ApplicationContext from '../ApplicationContext'
type Props = {}

const CommandListSection = (props: Props) => {
    const pageContext = React.useContext(ApplicationContext);
    const emergencyStopButtonOnClick = async () => {
        var res = await pageContext.sendEmergencyBrakeCommandAsync();
        console.log(res)
    }
    const emptyTourButtonOnClick = async () => {
        var res = await pageContext.sendEmptyTourCommandAsync();
        console.log(res)
    }
    const startTourButtonOnClick = async () => {
        var res = await pageContext.sendRouteInfoAsync()
        pageContext.setRoutePoints(res);
    }
    const liftLoadButtonOnClick = async () => {
        var res = await pageContext.sendLiftLoadCommandAsync();
    }
    return (
        <Card title="KOMUT LISTESI" style={{ border: "2px solid #8AA6A3", marginLeft: "5px" }}>
            <Flex vertical gap={"small"}>
                <Button onClick={emergencyStopButtonOnClick} className='text' type='primary' danger block>{pageContext.isEmergencyActive ? "ACİL STOP İPTAL" : "ACİL STOP"}</Button>
                <Button className='text' block>SIFIRLA</Button>
                <Button onClick={startTourButtonOnClick} className='text' block>TURU BAŞLAT</Button>
                <Button onClick={emptyTourButtonOnClick} className='text' block>BOŞ TUR</Button>
                <Button onClick={liftLoadButtonOnClick} className='text' type='primary' block>{pageContext.isLiftLoadActive ? "YÜK KALDIR IPTAL ":"YÜK KALDIR"}</Button>
            </Flex>
        </Card>
    )
}

export default CommandListSection