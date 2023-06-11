import React, { useEffect, useState } from "react";

const TafseerText = ({ surahAndAyahNumbers }) => {
  const [text, setText] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    chrome.runtime.sendMessage(
      {
        command: "fetch",
        url: `https://api.alquran.cloud/v1/ayah/${surahAndAyahNumbers}/editions/ar.muyassar`,
      },
      (response) => {
        setLoading(false);
        if (response.error) {
          setError(response.error);
          return;
        }
        setText(response.data[0].text);
      }
    );
  }, []);

  return (
    <div>
      {loading && <p className="text-lg">جاري التحميل...</p>}
      {error && <p className="text-lg">حدث خطأ أثناء التحميل</p>}
      {text && <p className="text-lg"> {text}</p>}
    </div>
  );
};

export default TafseerText;
