import NavBar from "./components/NavBar";

import GeneratedMeme from "./components/GeneratedMeme";
import { Route, Routes } from "react-router-dom";
import UploadImage from "./components/UploadImage";
import CustomizeMeme from "./components/CustomizeMeme";
import HomePage from "./components/HomePage";
import ImageContext from "./components/ImageContext";
import MemeImage from "./components/MemeImage";
function App() {
  return (
    <ImageContext>
      <div className="app">
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/generate" element={<GeneratedMeme />} />
          <Route path="/uploadMeme" element={<UploadImage />} />
          <Route path="/customize" element={<CustomizeMeme />} />
          <Route path="/editMeme" element={<MemeImage />} />
        </Routes>
      </div>
    </ImageContext>
  );
}

export default App;