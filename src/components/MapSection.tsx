import React, { useRef, useEffect } from 'react';
import Konva from 'konva';
import { Stage, Layer, Circle, Rect, Line } from 'react-konva';

const MapSection: React.FC = () => {
    const circleRadius = 5;
    const rectangleWidth = 16000/20;
    const rectangleHeight = 12500/20;

    const circlePositions = [
        { x: 1000, y: 0 },   // Q1
  { x: 1750, y: 0 },   // Q2
  { x: 3750, y: 0 },   // Q3
  { x: 4375, y: 0 },   // Q4
  { x: 6375, y: 0 },   // Q5
  { x: 7000, y: 0 },   // Q6
  { x: 8000, y: 0 },   // Q7
  { x: 9000, y: 0 },   // Q8
  { x: 9625, y: 0 },   // Q9
  { x: 11625, y: 0 },  // Q10
  { x: 12250, y: 0 },  // Q11
  { x: 14250, y: 0 },  // Q12
  { x: 15000, y: 0 },  // Q13
  { x: 16000, y: 1000 },  // Q14
  { x: 16000, y: 11500 },  // Q15
  { x: 15000, y: 12500 },  // Q16
  { x: 14250, y: 12500 },  // Q17
  { x: 12250, y: 12500 },  // Q18
  { x: 11625, y: 12500 },  // Q19
  { x: 9625, y: 12500 },  // Q20
  { x: 9000, y: 12500 },  // Q21
  { x: 8000, y: 12500 },  // Q22
  { x: 7000, y: 12500 },  // Q23
  { x: 6375, y: 12500 },  // Q24
  { x: 4375, y: 12500 },  // Q25
  { x: 3750, y: 12500 },  // Q26
  { x: 1750, y: 12500 },  // Q27
  { x: 1000, y: 12500 },  // Q28
  { x: 0, y: 11500 },  // Q29
  { x: 0, y: 1000 },   // Q30
  { x: 2750, y: 1000 },   // Q31
  { x: 2750, y: 5250 },   // Q32
  { x: 2750, y: 6250 },   // Q33
  { x: 2750, y: 7250 },   // Q34
  { x: 2750, y: 11500 },  // Q35
  { x: 5375, y: 11500 },  // Q36
  { x: 5375, y: 7250 },   // Q37
  { x: 5375, y: 6250 },   // Q38
  { x: 5375, y: 5250 },   // Q39
  { x: 5375, y: 1000 },   // Q40
  { x: 8000, y: 1000 },   // Q41
  { x: 8000, y: 11500 },  // Q42
  { x: 10625, y: 11500 }, // Q43
  { x: 10625, y: 7250 },  // Q44
  { x: 10625, y: 6250 },  // Q45
  { x: 10625, y: 5250 },  // Q46
  { x: 10625, y: 1000 },  // Q47
  { x: 13250, y: 1000 },  // Q48
  { x: 13250, y: 5250 },  // Q49
  { x: 13250, y: 6250 },  // Q50
  { x: 13250, y: 7250 },  // Q51
  { x: 13250, y: 11500 }, // Q52
    ];

    const handleClick = (index: number) => {
        alert(`Circle ${index} clicked`);
    };

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
                {circlePositions.map((pos, index) => (
                    <Circle
                        key={index}
                        x={pos.x /20 + 10}
                        y={pos.y/20 + 10}
                        radius={circleRadius}
                        fill="red"
                        onClick={() => handleClick(index)}
                    />
                ))}
                <Line
                points={[  147.5, 12500/20+10, 147.5,10]}
                stroke="blue"
                strokeWidth={2}
                />
                <Line
                points={[  278.5, 12500/20+10, 278.5,10]}
                stroke="blue"
                strokeWidth={2}
                />
                <Line
                points={[  541.5, 12500/20+10, 541.5,10]}
                stroke="blue"
                strokeWidth={2}
                />
                <Line
                points={[  673.5, 12500/20+10,673.5,10]}
                stroke="blue"
                strokeWidth={2}
                />
            </Layer>
        </Stage>
    );
};

export default MapSection;
