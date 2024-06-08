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
    return (
        <Card title="KOMUT LISTESI" style={{ border: "2px solid #8AA6A3", marginLeft: "5px" }}>
            <Flex vertical gap={"small"}>
                <Button onClick={emergencyStopButtonOnClick} className='text' type='primary' danger block>ACIL STOP</Button>
                <Button className='text' block>SIFIRLA</Button>
                <Button className='text' block>TURU BAŞLAT</Button>
                <Button onClick={emptyTourButtonOnClick} className='text' block>BOŞ TUR</Button>
            </Flex>
        </Card>
    )
}

export default CommandListSection