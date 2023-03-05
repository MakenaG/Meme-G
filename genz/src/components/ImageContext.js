import React, { createContext, useContext, useEffect, useState } from "react";

const getImageContext = createContext();
const ImageContext = ({ children }) => {
  const [meme, setMeme] = useState([]);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((res) => {
        const _memes = res.data.memes;

        if (_memes.length) {
          setMeme(_memes);
        }
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:9292/test")
      .then((res) => res.json())
      .then((res) => {
        setMeme(res);
      });
  }, []);
  
  return (
    <getImageContext.Provider
      value={{
        meme,
      }}
    >
      {children}
    </getImageContext.Provider>
  );
};
export function useMeme() {
  return useContext(getImageContext);
}
export default ImageContext;