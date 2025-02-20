import { Card } from "antd";
import * as React from "react";
import { Joystick } from "react-joystick-component";
import useFetch from "../hooks/useFetch";
interface Props {

}
function calculateAngle(y:any,x:any){
    return (Math.atan2(y, x) * 180) / Math.PI;
}
export default function ManualControlJoystick({ }: Props) {
    var {PostAsync} = useFetch()
    const [startX,setStartX] =React.useState(0);
    const [startY,setStartY] = React.useState(0);
    const baseColor = 'radial-gradient(circle at 50% 50%, rgba(100,100,100,1), rgba(100,100,100,1), rgba(100,100,100,1),  rgba(5,5,5,1))';
    const stickColor = 'radial-gradient(circle at 50% 50%, rgba(70,70,70,1), rgba(70,70,70,1), rgba(5,5,5,1))';
    const sendManualControlData = async (y:any,x:any) => {
        let angle = calculateAngle(y,x);
        let radius = Math.sqrt(y*y+x*x);
        if(angle >=0){
            var res = await PostAsync({angle:angle,radius:radius},"/api/ManualControl")
        }
    }
    const handleMove =  async (e:any) => {
        e.x= e.x*100;
        e.y = e.y*100;
        if (Math.abs(e.x) > 45){
            setStartX((oldX) => oldX + 35);
            console.log(e.x-startX);
            sendManualControlData(e.y,e.x);
        }
        if(e.y  > 45){
            setStartY((oldY) => oldY + 35)
            console.log(e.y-startY)
            sendManualControlData(e.y,e.x);
        }

        console.log(e);
    }

    const handleStop = (e:any) => {
        setStartX(0);
        setStartY(0);
        console.log(e);
    }

    const handleStart = (e:any) => {
        setStartX(0);
        setStartY(0);
        console.log(e);
    }
    return (
        <Card title="MANUEL KONTROL" style={{ border: "2px solid #8AA6A3", marginLeft: "3px" }}>
            <Joystick
                baseColor={baseColor}
                stickColor={stickColor}
                throttle={400}
                move={handleMove}
                stop={handleStop}
                start={handleStart}
            />
        </Card>
    )
}