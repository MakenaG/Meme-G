import React, { useState } from 'react';

import NavBar from "./components/NavBar";
import GeneratedMeme from "./components/GeneratedMeme";
import { Route, Routes } from "react-router-dom";
import UploadImage from "./components/UploadImage";
import CustomizeMeme from "./components/CustomizeMeme";
import HomePage from "./components/HomePage";
import ImageContext from "./components/ImageContext";
import MemeImage from "./components/MemeImage";
import Login from "./components/Login";
import  Logout  from "./components/Logout";

function App() {
  const [stateAuth, setStateAuth] = useState()
  const response = (res) => {
    setStateAuth(res)
  }
  return (
    <ImageContext>
      <div className='app'>
        {!stateAuth ?
          <Login response={response} />
          :
          <div className='d-flex justify-content-center align-items-center flex-column'>
            <img src={stateAuth.profileObj.imageUrl} />
            <h5>{stateAuth.profileObj.name}</h5>
            <p>{stateAuth.profileObj.email}</p>
            <Logout response={response} />
          </div>
        }
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
