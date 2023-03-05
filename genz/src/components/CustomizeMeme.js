import React, { useEffect, useRef, useState } from "react";
import { saveAs } from "file-saver";

const CustomizeMeme = ({ image }) => {
  const downloadImage = () => {
    if (finishedImage) {
      saveAs(finishedImage, "meme.jpg");
    }
  };
  let finishedImage;
  const canvas = useRef(null);

  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  useEffect(() => {
    if (image && canvas) {
      const ctx = canvas.current.getContext("2d");
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, 400, 256 + 80); // here we will change to canvas width and height for responsiveness

      const rawImage = new Image();
      rawImage.src = image;
      ctx.drawImage(rawImage, 60, 40, 280, 256);
      ctx.font = "25px Comic Sans MS";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText(topText, 400 / 2, 25);
      ctx.fillText(bottomText, 400 / 2, 256 + 40 + 25);
      // eslint-disable-next-line
      finishedImage = canvas.current.toDataURL("image/jpg");
    }
  }, [image, canvas, topText, bottomText]);
  return (
    <div className="customizeMeme figure">
      <div className="customizeMemeInputs">
        <input
          required
          placeholder="top Text"
          className="input"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
        />
        <input
          required
          placeholder="bottom Text"
          className="input"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />
      </div>
      <canvas ref={canvas} width={400} height={256 + 80} />

      <div className="centerBtn">
        <button className="btn" onClick={downloadImage}>
          Download Image
        </button>
      </div>
    </div>
  );
};

export default CustomizeMeme;