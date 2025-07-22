import React from "react";
import { Button } from "./button";
import {
  PlayIcon,
  InformationCircleIcon,
  BookmarkIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

type AyahCardProps = {
  surahNumber: number;
  ayahNumber: string;
  ayahNumberInEnglish: number;
  ayahText: string;
  tafsir: string;
};

const AyahCard: React.FC<AyahCardProps> = (props) => {
  return (
    <div className="flex py-6 px-4 max-w-4xl mx-auto border-b">
      <div className="flex flex-col items-center">
        <div>
          <p>
            {props.surahNumber}:{props.ayahNumberInEnglish}
          </p>
        </div>
        <div className="hidden md:flex flex-col">
          <Button variant="ghost" className="size-8 rounded-full">
            <PlayIcon className="w-8 h-8" />
          </Button>
          <Button variant="ghost" className="size-8 rounded-full">
            <InformationCircleIcon className="w-8 h-8" />
          </Button>
          <Button variant="ghost" className="size-8 rounded-full">
            <BookmarkIcon className="w-8 h-8" />
          </Button>
          <Button variant="ghost" size='lg' className="size-8 rounded-full">
            <EllipsisHorizontalIcon className="w-8 h-8" />
          </Button>
        </div>
      </div>
      <div className="w-full">
        <p className="text-2xl py-7 text-card-foreground font-kfgq" style={{ direction: "rtl" }}>
          {props.ayahText} <span className="text-dark hover:text-dark !font-kfgq" style={{ lineHeight: "37.7px", wordSpacing: "5px", fontSize: "26px", fontFamily: "kfgq" }}>{props.ayahNumber}</span>
        </p>
        <div className="ml-4">
          <small className="font-semibold text-muted-foreground">TAFSIR MUYASSAR</small>
          <p>{props.tafsir}</p>
        </div>
      </div>
    </div>
  );
};

export default AyahCard;
