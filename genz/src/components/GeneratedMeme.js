import React from "react";
import { useLocation } from "react-router-dom";
import { saveAs } from "file-saver";


const GeneratedMeme = () => {
  
  const location = useLocation();
  const url = new URLSearchParams(location.search);
  let query = url.get("url");

  const saveImage = () => {
    saveAs(query, "meme.jpg");
  };
  return (
    <div>
      {query && <img className="editMeme" alt="meme" src={query} />}
      <div className="generatedBtn centerBtn">
       
        <button className="btn" onClick={saveImage}>
          Save
        </button>
      </div>
    </div>
  );
};

export default GeneratedMeme;