import React, { useRef, useEffect } from 'react';
import Konva from 'konva';
import { Stage, Layer, Circle, Rect, Line, TextPath } from 'react-konva';
import ApplicationContext from '../ApplicationContext';
import { randomUUID } from 'crypto';

const MapSection: React.FC = () => {
    const pageContext = React.useContext(ApplicationContext);
    const [lineArrState, setLineArrState] = React.useState<any | undefined>(undefined);
    const [obstacleCircleState, setObstacleStateCircle] = React.useState<any | undefined>(undefined);
    const circleRadius = 5;
    const rectangleWidth = 16000 / 20;
    const rectangleHeight = 12500 / 20;


    const handleClick = (index: number) => {
        alert(`Circle ${index} clicked`);
    };
    function getGuıd() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }
    function getObstacleCircles() {
        var circleArr: any[] = [];
        pageContext.obstaclePointCloud?.map((l: any, index: any) => {
            circleArr.push(<Circle
                key={getGuıd()}
                x={l.X / 20 + 10}
                y={l.Y / 20 + 10}
                radius={circleRadius / 2}
                fill="black"
            />)
        });
        setObstacleStateCircle(circleArr);
    }
    function getPathLines() {
        var lineArr: any[] = [];
        for (let index = 0; index < pageContext.routePoints?.length - 1; index++) {
            const current = pageContext.mapData.find((k: any) => k.Label === pageContext.routePoints[index]);
            const next = pageContext.mapData.find((k: any) => k.Label === pageContext.routePoints[index + 1]);
            if (current.Y != next.Y && current.X == next.X) {
                lineArr.push(<Line points={[current.X / 20 + 10, current.Y / 20 + 10, current.X / 20 + 10, next.Y / 20 + 10]} stroke="red" strokeWidth={2} />)
            }
            if (current.X != next.X && current.Y === next.Y) {
                lineArr.push(<Line points={[current.X / 20 + 10, current.Y / 20 + 10, next.X / 20 + 10, next.Y / 20 + 10]} stroke="red" strokeWidth={2} />)
            }
            else {
                if (current.X > next.X && current.Y < next.Y) {
                    lineArr.push(<Line points={[next.X / 20 + 10, current.Y / 20 + 10, next.X / 20 + 10, next.Y / 20 + 10]} stroke="red" strokeWidth={2} />)
                    lineArr.push(<Line points={[current.X / 20 + 10, current.Y / 20 + 10, next.X / 20 + 10, current.Y / 20 + 10]} stroke="red" strokeWidth={2} />)
                }
                if (current.X < next.X && current.Y < next.Y) {
                    lineArr.push(<Line points={[current.X / 20 + 10, current.Y / 20 + 10, current.X / 20 + 10, next.Y / 20 + 10]} stroke="red" strokeWidth={2} />)
                    lineArr.push(<Line points={[current.X / 20 + 10, next.Y / 20 + 10, next.X / 20 + 10, next.Y / 20 + 10]} stroke="red" strokeWidth={2} />)
                }
                if (current.X < next.X && current.Y > next.Y) {
                    lineArr.push(<Line points={[next.X / 20 + 10, current.Y / 20 + 10, next.X / 20 + 10, next.Y / 20 + 10]} stroke="red" strokeWidth={2} />)
                    lineArr.push(<Line points={[current.X / 20 + 10, current.Y / 20 + 10, next.X / 20 + 10, current.Y / 20 + 10]} stroke="red" strokeWidth={2} />)
                }
                if (current.X > next.X && current.Y > next.Y) {
                    lineArr.push(<Line points={[current.X / 20 + 10, current.Y / 20 + 10, current.X / 20 + 10, next.Y / 20 + 10]} stroke="red" strokeWidth={2} />)
                    lineArr.push(<Line points={[current.X / 20 + 10, next.Y / 20 + 10, next.X / 20 + 10, next.Y / 20 + 10]} stroke="red" strokeWidth={2} />)
                }
            }

        }
        setLineArrState(lineArr)
    }
    React.useEffect(() => {
        console.log(pageContext.routePoints)
        getPathLines();
    }, [pageContext.routePoints])

    React.useEffect(() => {
        getObstacleCircles();
    }, [pageContext.obstaclePointCloud])
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
                {pageContext.mapData?.map((pos: any, index: any) => {
                    if (pos.visible) {
                        return (
                            <Circle
                                key={index}
                                x={pos.X / 20 + 10}
                                y={pos.Y / 20 + 10}
                                radius={circleRadius}
                                fill="red"
                                onClick={() => handleClick(index)}
                            />
                        )
                    }
                    return (<></>)
                })}
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
                    points={[8000 / 20 + 10, 12500 / 20 + 10, 8000 / 20 + 10, 10]}
                    stroke="blue"
                    strokeWidth={2}
                />
                {lineArrState && lineArrState?.map((k: any) => k)}
                {obstacleCircleState && obstacleCircleState?.map((k: any) => k)}
            </Layer>
        </Stage>
    );
};

export default MapSection;
