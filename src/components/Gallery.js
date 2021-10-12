import React from "react";
import "../scss/Gallery.scss";

export default function Gallery({ rects, handleRemoveRect }) {
  return (
    <div>
      <h1 className="gallery__title">Gallery</h1>
      {Boolean(rects.length) && (
        <ul className="gallery-list">
          {rects.map((rect) => {
            return (
              <li key={rect.id} className="gallery-list__item">
                <div
                  style={{
                    backgroundColor: rect.backgroundColor,
                    width: `${rect.width}px`,
                    height: `${rect.height}px`,
                    borderRadius: `${rect.borderRadius}%`,
                  }}
                ></div>
                <button
                  onClick={() => {
                    handleRemoveRect(rect.id);
                  }}
                  className="gallery__button-remove"
                >
                  Remove
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
