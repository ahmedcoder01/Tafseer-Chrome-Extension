import React from "react";

const TafseerSearchResultItem = ({ item, onResultClick }) => {
  return (
    <li
      className="p-2 cursor-pointer
        hover:bg-gray-100 rounded-sm hover:text-black text-md
        "
      onClick={() => {
        onResultClick(`${item.surahNumber}:${item.numberInSurah}`);
      }}
    >
      {item.text}
    </li>
  );
};

export default TafseerSearchResultItem;
