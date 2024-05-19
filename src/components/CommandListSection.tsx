import { Button, Card, Flex } from 'antd'

type Props = {}

const CommandListSection = (props: Props) => {
    return (
        <Card title="KOMUT LISTESI" style={{ border: "2px solid #8AA6A3", marginLeft: "5px" }}>
            <Flex vertical gap={"small"}>
                <Button className='text' type='primary' danger block>ACIL STOP</Button>
                <Button className='text' block>SIFIRLA</Button>
                <Button className='text' block>TURU BAŞLAT</Button>
                <Button className='text' block>BOŞ TUR</Button>
            </Flex>
        </Card>
    )
}

export default CommandListSection