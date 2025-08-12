import React, { useState } from "react";

const Exercise1 = () => {
  const [imagesElem, setImagesElem] = useState({
    images: [
      "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
      "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
      "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",
    ],
    currentImg: 0,
  });

  const shiftImageBack  = () => {
    setImagesElem(prev => {
      if (prev.currentImg === 0) return prev; // already at first
      return { ...prev, currentImg: prev.currentImg - 1 };
    });
  }

  const shiftImageForward = () => {
    setImagesElem(prev => {
      if (prev.currentImg === prev.images.length - 1) return prev; // already at last
      return { ...prev, currentImg: prev.currentImg + 1 };
    });
  } 

  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={imagesElem.images[imagesElem.currentImg]}
        style={{ maxWidth: "70%", height: "auto", display: "block", margin: "40px auto" }}
      />

      <div style={{ display: "flex", justifyContent: "space-between", maxWidth: 700, margin: "0 auto" }}>
        <button className="back" onClick={shiftImageBack} >
          Previous
        </button>

        <button className="forward" onClick={shiftImageForward} >
          Next
        </button>
      </div>
    </div>
  );
};

export default Exercise1;
