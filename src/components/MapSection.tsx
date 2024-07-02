import React, { useRef, useEffect } from 'react';
import Konva from 'konva';
import Points from "./mapData.json"
import { Stage, Layer, Circle, Rect, Line, TextPath } from 'react-konva';
import ApplicationContext from '../ApplicationContext';

const MapSection: React.FC = () => {
    const pageContext = React.useContext(ApplicationContext);
    const [lineArrState,setLineArrState] = React.useState<any|undefined>(undefined);
    const circleRadius = 5;
    const rectangleWidth = 16000 / 20;
    const rectangleHeight = 12500 / 20;
    const circlePositionsFromJson = Points as any[]
    

    const handleClick = (index: number) => {
        alert(`Circle ${index} clicked`);
    };

    function getPathLines() {
        var lineArr :any[] = [];
        for (let index = 0; index < pageContext.routePoints?.length-1; index++) {
            const current = circlePositionsFromJson.find(k => k.Label === pageContext.routePoints[index]);
            const next = circlePositionsFromJson.find(k => k.Label === pageContext.routePoints[index+1]);
            if(current.Y != next.Y && current.X == next.X){
                lineArr.push(<Line points={[current.X/20+10, current.Y/20+10,current.X/20+10, next.Y/20+10]} stroke="red" strokeWidth={2}/>)
            }
            if(current.X != next.X && current.Y === next.Y){
                lineArr.push(<Line points={[current.X/20+10, current.Y/20+10,next.X/20+10, next.Y/20+10]} stroke="red" strokeWidth={2}/>)
            }
            else{
                if(current.X > next.X && current.Y < next.Y){
                    lineArr.push(<Line points={[next.X/20+10, current.Y/20+10,next.X/20+10, next.Y/20+10]} stroke="red" strokeWidth={2}/>)
                    lineArr.push(<Line points={[current.X/20+10, current.Y/20+10,next.X/20+10, current.Y/20+10]} stroke="red" strokeWidth={2}/>)
                }
                if(current.X < next.X && current.Y < next.Y){
                    lineArr.push(<Line points={[current.X/20+10, current.Y/20+10,current.X/20+10, next.Y/20+10]} stroke="red" strokeWidth={2}/>)
                    lineArr.push(<Line points={[current.X/20+10, next.Y/20+10,next.X/20+10, next.Y/20+10]} stroke="red" strokeWidth={2}/>)
                }
                if(current.X < next.X && current.Y > next.Y){
                    lineArr.push(<Line points={[next.X/20+10, current.Y/20+10,next.X/20+10, next.Y/20+10]} stroke="red" strokeWidth={2}/>)
                    lineArr.push(<Line points={[current.X/20+10, current.Y/20+10,next.X/20+10, current.Y/20+10]} stroke="red" strokeWidth={2}/>)
                }
                if(current.X > next.X && current.Y > next.Y){
                    lineArr.push(<Line points={[current.X/20+10, current.Y/20+10,current.X/20+10, next.Y/20+10]} stroke="red" strokeWidth={2}/>)
                    lineArr.push(<Line points={[current.X/20+10, next.Y/20+10,next.X/20+10, next.Y/20+10]} stroke="red" strokeWidth={2}/>)
                }
            }
            
        }
        setLineArrState(lineArr)
    }
    React.useEffect(() => {
        console.log(pageContext.routePoints)
        getPathLines();
    },[pageContext.routePoints])

    return (
        <Stage width={rectangleWidth + 20} height={rectangleHeight + 20}>
            <Layer>
                <Rect
                    x={10}
                    y={10}
                    width={rectangleWidth}
                    height={rectangleHeight}
                    stroke="black"
                />
                {circlePositionsFromJson.map((pos, index) => (
                    <Circle
                        key={index}
                        x={pos.X / 20 + 10}
                        y={pos.Y / 20 + 10}
                        radius={circleRadius}
                        fill="red"
                        onClick={() => handleClick(index)}
                    />
                ))}
                <Line
                    points={[147.5, 12500 / 20 + 10, 147.5, 10]}
                    stroke="blue"
                    strokeWidth={2}
                />
                <Line
                    points={[278.5, 12500 / 20 + 10, 278.5, 10]}
                    stroke="blue"
                    strokeWidth={2}
                />
                <Line
                    points={[541.5, 12500 / 20 + 10, 541.5, 10]}
                    stroke="blue"
                    strokeWidth={2}
                />
                <Line
                    points={[673.5, 12500 / 20 + 10, 673.5, 10]}
                    stroke="blue"
                    strokeWidth={2}
                />
                <Line
                    points={[8000/20 +10, 12500 / 20+10,8000/20+10, 10]}
                    stroke="blue"
                    strokeWidth={2}
                />
                {lineArrState && lineArrState?.map((k: any) => k)}
            </Layer>
        </Stage>
    );
};

export default MapSection;
