import React from "react";

type AyahInfoDivProps = {
  surahName: string;
  numberOfAyat: number;
  makkiyaOrMadaniya: string;
};

const AyahInfoDiv: React.FC<AyahInfoDivProps> = (props) => {
  return (
    <div>
      <h2 className="text-xl text-center font-semibold">{props.surahName}</h2>
      <p className="text-center text-sm text-muted-foreground">
        Ayah - {props.numberOfAyat}, {props.makkiyaOrMadaniya}
      </p>
    </div>
  );
};

export default AyahInfoDiv;
