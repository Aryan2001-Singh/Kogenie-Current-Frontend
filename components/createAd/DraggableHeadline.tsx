"use client";
import React from "react";
import Draggable from "react-draggable";

interface DraggableHeadlineProps {
  position: { x: number; y: number };
  setPosition: (position: { x: number; y: number }) => void;
  headlineText: string;
  headlineBgColor: string;
  headlineFontColor: string;
  headlineFontSize: number;
  isBold: boolean;
  isItalic: boolean;
  headlineFont: string;
}

const DraggableHeadline: React.FC<DraggableHeadlineProps> = ({
  position,
  setPosition,
  headlineText,
  headlineBgColor,
  headlineFontColor,
  headlineFontSize,
  isBold,
  isItalic,
  headlineFont,
}) => {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleDragStop = (_: any, data: any) => {
    setPosition({ x: data.x, y: data.y });
  };

  return (
    <Draggable position={position} onStop={handleDragStop}>
      <div
        contentEditable
        suppressContentEditableWarning
        className="absolute cursor-move px-4 py-2 text-lg rounded-lg opacity-80"
        style={{
          backgroundColor: headlineBgColor,
          color: headlineFontColor,
          fontSize: `${headlineFontSize}px`,
          fontWeight: isBold ? "bold" : "normal",
          fontStyle: isItalic ? "italic" : "normal",
          fontFamily: `${headlineFont}, sans-serif`,
          maxWidth: "90%",
          textAlign: "center",
          zIndex: 10,
          outline: "none",
        }}
      >
        {headlineText}
      </div>
    </Draggable>
  );
};

export default DraggableHeadline;