import React from "react";
import quranImage from "../../assets/quran.png";

const BallButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-0 right-0 m-4 w-16 h-16 rounded-full bg-blue-500 hover:bg-blue-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none z-10"
    >
      <img src={chrome.runtime.getURL(quranImage)} alt="quran" />
    </button>
  );
};

export default BallButton;
