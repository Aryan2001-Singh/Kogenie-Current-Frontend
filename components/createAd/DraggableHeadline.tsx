import React, { useState } from "react";
import Draggable from "react-draggable";
import { DraggableEvent, DraggableData } from "react-draggable";


interface DraggableHeadlineProps {
  headlineText: string;
  headlineBgColor: string;
  headlineFontColor: string;
  headlineFontSize: number;
  isBold: boolean;
  isItalic: boolean;
  headlineFont: string;
}

const DraggableHeadline: React.FC<DraggableHeadlineProps> = ({
  headlineText,
  headlineBgColor,
  headlineFontColor,
  headlineFontSize,
  isBold,
  isItalic,
  headlineFont,
}) => {
  const [position, setPosition] = useState({ x: 0, y: -100 });

  const handleDragStop = (e: DraggableEvent, data: DraggableData) => {
    setPosition({ x: data.x, y: data.y });
  };

  return (
    <Draggable position={position} onStop={handleDragStop}>
      <div
        style={{
          position: "absolute",
          backgroundColor: headlineBgColor,
          color: headlineFontColor,
          fontSize: `${headlineFontSize}px`,
          fontWeight: isBold ? "bold" : "normal",
          fontStyle: isItalic ? "italic" : "normal",
          fontFamily: headlineFont,
          padding: "10px",
          borderRadius: "5px",
          cursor: "move",
        }}
      >
        {headlineText}
      </div>
    </Draggable>
  );
};

export default DraggableHeadline;