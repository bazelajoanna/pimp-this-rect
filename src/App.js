import React, { useState, useEffect } from "react";
import Editor from "./components/Editor";
import Output from "./components/Output";
import Gallery from "./components/Gallery";

import "./scss/App.scss";

function App() {
  const [color, setColor] = useState("black");
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(400);
  const [borderRadius, setBorderRadius] = useState(0);

  const handleSetColor = (c) => {
    setColor(c);
  };

  const handleSetWidth = (w) => {
    setWidth(w);
  };

  const handleSetHeight = (h) => {
    setHeight(h);
  };

  const handleSetBorderRadius = (b) => {
    setBorderRadius(b);
  };

  const rectsFromLocalStorage = localStorage.getItem("rects");

  const parsedRects = rectsFromLocalStorage
    ? JSON.parse(rectsFromLocalStorage)
    : [];

  const [rects, setRects] = useState(parsedRects);

  const handleSaveRect = () => {
    const rect = {
      id: Math.random(),
      backgroundColor: color,
      width: width,
      height: height,
      borderRadius: borderRadius,
    };
    setRects((prevState) => {
      const updatedRects = [...prevState, rect];
      saveRectsToLocalStorage(updatedRects);
      return updatedRects;
    });
  };

  const saveRectsToLocalStorage = (rects) => {
    const rectsStringified = JSON.stringify(rects);
    localStorage.setItem("rects", rectsStringified);
  };

  const handleRemoveRect = (id) => {
    setRects((prevState) => {
      const updatedRects = prevState.filter((el) => el.id !== id);
      saveRectsToLocalStorage(updatedRects);
      return updatedRects;
    });
  };

  return (
    <>
      <Editor
        handleSetColor={handleSetColor}
        handleSetWidth={handleSetWidth}
        handleSetHeight={handleSetHeight}
        handleSetBorderRadius={handleSetBorderRadius}
        handleSaveRect={handleSaveRect}
        width={width}
        height={height}
        borderRadius={borderRadius}
      ></Editor>
      <Output
        outputColor={color}
        outputWidth={width}
        outputHeight={height}
        outputBorderRadius={borderRadius}
      ></Output>
      <Gallery rects={rects} handleRemoveRect={handleRemoveRect}></Gallery>
    </>
  );
}

export default App;
