import React from "react";
import "../scss/Output.scss";

export default function Output({
  outputColor,
  outputWidth,
  outputHeight,
  outputBorderRadius,
}) {
  const rectStyle = {
    backgroundColor: outputColor,
    width: `${outputWidth}px`,
    height: `${outputHeight}px`,
    borderRadius: `${outputBorderRadius}%`,
  };

  return (
    <div className="output">
      <div style={rectStyle}></div>
    </div>
  );
}
