import React, { useState, useMemo } from "react";
import quran from "../../assets/quran.json";
import { removeDiacritics } from "../../helpers/chars.helper";
import TafseerSearchResultItem from "./TafseerSearchResultItem";
import TafseerText from "./TafseerText";
import DialogLayout from "./DialogLayout";

const TafseerTab = ({}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [tafseerInfo, setTafseerInfo] = useState(null);

  const searchResults = useMemo(() => {
    if (!searchQuery) return [];

    const results = quran.filter((item) => {
      const withoutTashkeel = removeDiacritics(item.text);
      return withoutTashkeel.includes(removeDiacritics(searchQuery));
    });

    return results.slice(0, 10);
  }, [searchQuery]);

  const handleInput = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearHistory = () => {
    setTafseerInfo(null);
  };

  const handleResultClick = (surahAndAyahNumbers) => {
    setTafseerInfo({
      show: true,
      surahAndAyahNumbers,
    });
  };

  if (tafseerInfo) {
    return (
      <DialogLayout onClose={clearHistory}>
        <TafseerText surahAndAyahNumbers={tafseerInfo.surahAndAyahNumbers} />
      </DialogLayout>
    );
  }

  return (
    <DialogLayout onClose={clearHistory}>
      <h3 className="font-bold text-xl mb-6 mt-5">البحث في التفسير الميسر</h3>
      <input
        type="text"
        placeholder="ابحث..."
        className="input w-full border-red-50"
        onChange={handleInput}
      />
      <ul className="rounded-box min-h-16 mt-5">
        {searchResults.map((item) => (
          <TafseerSearchResultItem
            key={item.number}
            item={item}
            onResultClick={handleResultClick}
          />
        ))}

        {searchResults.length === 0 && searchQuery !== "" && (
          <li className="p-2">لا يوجد نتائج</li>
        )}
      </ul>
    </DialogLayout>
  );
};

export default TafseerTab;
