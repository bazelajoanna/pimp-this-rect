import React from "react";
import "../scss/Editor.scss";

export default function Editor({
  handleSetColor,
  handleSetWidth,
  handleSetHeight,
  handleSetBorderRadius,
  handleSaveRect,
  height,
  width,
  borderRadius,
}) {
  return (
    <div className="editor">
      <div className="editor__inputs">
        <div>
          <h1 className="editor__heading">Choose color</h1>
          <input
            type="color"
            id="color"
            onChange={(e) => handleSetColor(e.target.value)}
          ></input>
          <h2></h2>
        </div>
        <div>
          <div>
            <h1 className="editor__heading">Choose size</h1>
            <div>
              <input
                type="range"
                id="width"
                name="width"
                min="50"
                max="500"
                value={width}
                onChange={(e) => handleSetWidth(e.target.value)}
              ></input>
              <label>Width</label>
              <p></p>
            </div>
          </div>
          <div>
            <input
              type="range"
              id="height"
              name="height"
              min="50"
              max="500"
              value={height}
              onChange={(e) => handleSetHeight(e.target.value)}
            ></input>
            <label>Height</label>
            <p></p>
          </div>
        </div>
        <div>
          <h1 className="editor__heading">Choose border radius</h1>
          <div>
            <input
              type="range"
              id="borderRadius"
              name="borderRadius"
              min="0"
              max="100"
              value={borderRadius}
              onChange={(e) => handleSetBorderRadius(e.target.value)}
            ></input>
            <label>Border radius</label>
          </div>
        </div>
      </div>
      <button className="editor__button-save" onClick={() => handleSaveRect()}>
        Save
      </button>
    </div>
  );
}
