import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const MemeImage = (props) => {
  const [captions, setCaptions] = useState([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const params = new URLSearchParams(location.search);

  let ImageUrl = params.get("url");
  let box_count = parseInt(params.get("box_count"));
  let id = params.get("id");

  const updateCaption = (e, index) => {
    const textCaption = e.target.value || "";
    setCaptions(
      captions.map((caption, i) => (i === index ? textCaption : caption))
    );
  };

  useEffect(() => {
    if (box_count) {
      setCaptions(Array(box_count).fill(""));
    }
  }, [box_count]);
  function generateMeme() {
    const formData = new FormData();
    formData.append("username", "ChinemeremDaniel");
    formData.append("password", "8!zXJi5h3HNiacj");
    formData.append("template_id", id);

    captions.forEach((caption, index) => {
      formData.append(`boxes[${index}][text]`, caption);
    });

    fetch("https://api.imgflip.com/caption_image", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        navigate(`/generate?url=${res.data.url}`);
      })
      .catch((err) => {
        setError(err);
      });
  }

  return (
    <div>
      {error ? (
        <p className="errorText">
          There seems to be An Error, please Reload the page Follow the
          Instructions and try again.
        </p>
      ) : (
        <p className="instruction">
          please Input Your captions in the boxes below
        </p>
      )}

      <div className="form">
        {captions.map((c, index) => (
          <input
            required
            className="input"
            onChange={(e) => updateCaption(e, index)}
            key={index}
            placeholder={`caption ${index + 1}`}
          />
        ))}
      </div>
      <div>
        <img src={ImageUrl} alt="meme pic" className="editMeme" />
      </div>
      <div className="centerBtn">
        <button className="btn" onClick={generateMeme}>
          Create Meme
        </button>
      </div>
    </div>
  );
};

export default MemeImage;