import React from "react";
import { Button } from "./button";
import {
  PlayIcon,
  InformationCircleIcon,
  BookmarkIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

type Verse = {
  id: number;
  text: string;
};

type AyahCardProps = {
  surahNumber: number;
  verses: Array<Verse>;
};

// Extend the String interface to include toIndiaDigits
declare global {
  interface String {
    toIndiaDigits(): string;
  }
}

String.prototype.toIndiaDigits = function () {
  const id = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return this.replace(/[0-9]/g, function (w) {
    return id[+w];
  });
};

const AyahCard: React.FC<AyahCardProps> = (props) => {
  return (
    <>
      {props.verses.map((verse, idx) => (
        <div key={idx} className="flex py-6 px-4 max-w-4xl mx-auto border-b">
          <div className="flex flex-col items-center">
            <div>
              <p>
                {props.surahNumber}:{verse.id}
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
              <Button variant="ghost" size="lg" className="size-8 rounded-full">
                <EllipsisHorizontalIcon className="w-8 h-8" />
              </Button>
            </div>
          </div>
          <div className="w-full ml-4">
            <p
              className="text-2xl py-7 text-card-foreground font-kfgq"
              style={{ direction: "rtl", wordSpacing: '.2em' }}
            >
              {verse.text}
              <span className="pr-3 font-kfgq">
                {String(verse.id).toIndiaDigits()}
              </span>
            </p>
            <div>
              <p className="font-semibold text-[.75rem] uppercase text-chart-2">
                tafsir muyassar
              </p>
              <p className="text-card-foreground">Text text text</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AyahCard;
