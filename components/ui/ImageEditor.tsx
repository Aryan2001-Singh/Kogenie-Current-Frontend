"use client";

import { useState, useEffect, useRef } from "react";
import { Rnd } from "react-rnd";
import Image from "next/image";

interface Props {
  initialText: string;
  image: string;
}

export default function ImageEditor({ initialText, image }: Props) {
  const [editorText, setEditorText] = useState(initialText);
  const [fontSize, setFontSize] = useState(24);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [fontColor, setFontColor] = useState("#000000");
  const [fontFamily, setFontFamily] = useState("Arial");
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [size, setSize] = useState({ width: 250, height: 120 });

  const textRef = useRef<HTMLDivElement>(null);

  // Auto adjust font size when resizing
  useEffect(() => {
    if (textRef.current) {
      const textElement = textRef.current;
      const { offsetWidth: boxWidth, offsetHeight: boxHeight } = textElement;
      const newFontSize = Math.min(
        boxHeight / 3,
        boxWidth / (editorText.length || 1)
      );
      setFontSize(Math.max(newFontSize, 12));
    }
  }, [editorText, size]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Image with Text Overlay */}
      <div className="relative w-full max-w-lg border border-gray-300 rounded-md p-2">
        <Image
          src={image}
          alt="Uploaded"
          width={600}
          height={400}
          className="rounded-md"
        />

        {/* Draggable & Resizable Text Box */}
        <Rnd
          size={{ width: size.width, height: size.height }}
          position={{ x: position.x, y: position.y }}
          bounds="parent"
          enableResizing
          minWidth={150}
          minHeight={50}
          lockAspectRatio={false}
          onDragStop={(e, d) => setPosition({ x: d.x, y: d.y })}
          onResizeStop={(e, direction, ref, delta, position) => {
            setSize({ width: ref.offsetWidth, height: ref.offsetHeight });
            setPosition(position);
          }}
        >
          <div
            ref={textRef}
            contentEditable
            suppressContentEditableWarning
            className="cursor-move flex items-center justify-center p-2 text-center"
            style={{
              fontSize: `${fontSize}px`,
              fontWeight: isBold ? "bold" : "normal",
              fontStyle: isItalic ? "italic" : "normal",
              textDecoration: isUnderline ? "underline" : "none",
              fontFamily: fontFamily,
              color: fontColor,
              width: "100%",
              height: "100%",
              backgroundColor: "none", //No background behind text
              borderRadius: "5px",
              overflow: "hidden", //  Prevents text from overflowing outside the box
              wordBreak: "break-word", //  Ensures words wrap properly
              whiteSpace: "pre-wrap", //  Maintains multi-line formatting
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
            onBlur={(e) => setEditorText(e.target.innerText)}
          >
            <span>{editorText}</span>
          </div>
        </Rnd>
      </div>

      {/* Editing Toolbar */}
      <div className="w-full max-w-lg mt-4 bg-gray-100 p-4 rounded-md shadow-md">
        {/* Font Color Picker */}
        <div className="flex gap-2 items-center mb-2">
          <label>Font Color:</label>
          <input
            type="color"
            value={fontColor}
            onChange={(e) => setFontColor(e.target.value)}
            className="border p-1 rounded-md"
          />
        </div>

        {/* Formatting Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setIsBold(!isBold)}
            className={`p-2 rounded-md ${
              isBold ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            B
          </button>
          <button
            onClick={() => setIsItalic(!isItalic)}
            className={`p-2 rounded-md ${
              isItalic ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            I
          </button>
          <button
            onClick={() => setIsUnderline(!isUnderline)}
            className={`p-2 rounded-md ${
              isUnderline ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            U
          </button>

          {/* Font Size Controls */}
          <button
            onClick={() => setFontSize(fontSize + 2)}
            className="p-2 rounded-md bg-gray-200"
          >
            +
          </button>
          <button
            onClick={() => setFontSize(fontSize - 2)}
            className="p-2 rounded-md bg-gray-200"
          >
            -
          </button>

          {/* Font Size Input */}
          <input
            type="number"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="border p-1 w-16 text-center rounded-md"
            min={10}
            max={100}
          />
        </div>

        {/* Font Style Dropdown */}
        <div className="flex gap-2 items-center mt-2">
          <label>Font Style:</label>
          <select
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
            className="border p-2 rounded-md"
          >
            <option value="Arial">Arial</option>
            <option value="Verdana">Verdana</option>
            <option value="Tahoma">Tahoma</option>
            <option value="Georgia">Georgia</option>
            <option value="Courier New">Courier New</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Trebuchet MS">Trebuchet MS</option>
            <option value="Comic Sans MS">Comic Sans MS</option>
            <option value="Impact">Impact</option>
            <option value="Lobster">Lobster</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Roboto">Roboto</option>
            <option value="Open Sans">Open Sans</option>
            <option value="Poppins">Poppins</option>
            <option value="Raleway">Raleway</option>
            <option value="Lato">Lato</option>
            <option value="Oswald">Oswald</option>
            <option value="Playfair Display">Playfair Display</option>
            <option value="Merriweather">Merriweather</option>
            <option value="Fira Sans">Fira Sans</option>
            <option value="Quicksand">Quicksand</option>
            <option value="Bebas Neue">Bebas Neue</option>
            <option value="Source Sans Pro">Source Sans Pro</option>
            <option value="Avenir">Avenir</option>
            <option value="Cabin">Cabin</option>
            <option value="Nunito">Nunito</option>
            <option value="Ubuntu">Ubuntu</option>
            <option value="Monda">Monda</option>
            <option value="Anton">Anton</option>
            <option value="Bitter">Bitter</option>
            <option value="Indie Flower">Indie Flower</option>
          </select>
        </div>
      </div>
    </div>
  );
}
