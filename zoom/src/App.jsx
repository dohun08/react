import React from "react";
import { Stage, Layer, Rect } from "react-konva";

const InteractiveMap = () => {
    return (
        <Stage width={800} height={600} draggable scaleX={1.5} scaleY={1.5}>
            <Layer>
                <Rect x={50} y={50} width={100} height={100} fill="blue" />
                <Rect x={200} y={200} width={100} height={100} fill="red" />
            </Layer>
        </Stage>
    );
};

export default InteractiveMap;