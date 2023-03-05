import { Zoom } from "react-reveal";
import { useNavigate } from "react-router-dom";
import { useMeme } from "./ImageContext";
import { Icon } from "@iconify/react";

const HomePage = () => {
  const navigate = useNavigate();
  const { meme } = useMeme();

  const handleEdit = (memeList) => {
    navigate(
      `/editMeme?url=${memeList.url}&box_count=${memeList.box_count}&id=${memeList.id}`
    );
  };

  return meme ? (
    <main className="main">
      <div className="centerCreateMeme">
        {window.innerWidth < 312 ? (
          <span className="arrowText">Click to ceate your own meme</span>
        ) : (
          <span className="arrowText">Click here to ceate your own meme</span>
        )}{" "}
        <span className="arrow" onClick={() => navigate("/uploadMeme")}>
          <Icon icon="ion:arrow-forward-circle" />
        </span>
      </div>

      <div className="meme">
        {meme.map((memeList) => (
          <Zoom key={memeList.id}>
            <figure className="figure">
              <img src={memeList.url} className="meme-image" alt="meme pic" />

              <button
                className="btn-create"
                onClick={() => handleEdit(memeList)}
              >
                Edit Meme
              </button>
            </figure>
          </Zoom>
        ))}
      </div>
    </main>
  ) : (
    <div className="lds-hourglass"> loading</div>
  );
};

export default HomePage;