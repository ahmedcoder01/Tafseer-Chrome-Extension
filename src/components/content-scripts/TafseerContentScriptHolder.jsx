import React, { useEffect, useState } from "react";
import BallButton from "./BallButton";
import TafseerTab from "./TafseerTab";

const TafseerContent = () => {
  return (
    <div>
      <BallButton onClick={() => window.my_tafseer_modal.showModal()} />

      <TafseerTab />
    </div>
  );
};

export default TafseerContent;
