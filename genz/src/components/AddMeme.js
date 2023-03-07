import React from "react";
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";
import { getDroppedOrSelectedFiles } from "html5-file-selector";
import { useState } from "react";
import CustomizeMeme from "./CustomizeMeme";

const AddMeme = ({ children }) => {
  const [image, setImage] = useState();

  let dropzoneWidth = window.innerWidth - 30;

  const fileParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };
  const onFileChange = ({ meta, file }, status) => {
    if (status === "done") {
      setImage(meta.previewUrl);
    }
  };

  const getFilesFromEvent = (e) => {
    return new Promise((resolve) => {
      getDroppedOrSelectedFiles(e).then((chosenFiles) => {
        resolve(chosenFiles.map((f) => f.fileObject));
      });
    });
  };
  const selectFileInput = ({ onFiles, files, getFilesFromEvent }) => {
    const textToDisplay =
      window.innerWidth >= 768
        ? "Upload/Drag and drop Your Image"
        : "Upload your Image";

    const textMsg = files.length > 0 ? "Upload Again" : textToDisplay;

    return (
      <label className="btn centerBtn">
        {textMsg}
        <input
          style={{ display: "none" }}
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => {
            getFilesFromEvent(e).then((chosenFiles) => {
              onFiles(chosenFiles);
            });
          }}
        />
      </label>
    );
  };

  return image ? (
    <CustomizeMeme image={image} />
  ) : (
    <div>
      <Dropzone
        onChangeStatus={onFileChange}
        InputComponent={selectFileInput}
        getUploadParams={fileParams}
        getFilesFromEvent={getFilesFromEvent}
        accept="image/*"
        maxFiles={1}
        inputContent="Drop A File"
        styles={{
          dropzone: { width: dropzoneWidth, height: 400 },
          dropzoneActive: { borderColor: "green" },
        }}
      />
    </div>
  );
};

export default AddMeme;