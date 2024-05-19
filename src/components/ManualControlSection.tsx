import { Card, Col, Image, Row, Typography } from "antd";
import image from "./wasd-keyboard.jpg"
interface Props {

}

export default function ManualControlSection({ }: Props) {
    return (
        <Card title="MANUEL KONTROL" style={{ border: "2px solid #8AA6A3",marginLeft:"3px" }}>
            <Image src={image} style={{height:"10vh"}}/>
        </Card>
    )
}