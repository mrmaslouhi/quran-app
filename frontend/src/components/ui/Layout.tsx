import AyahCard from "./AyahCard";
import AyahInfoDiv from "./AyahInfoDiv";

const Layout = (props: any) => {
  return (
    <>
      <AyahInfoDiv
        surahName={props.obj.transliteration}
        numberOfAyat={props.obj.total_verses}
        makkiyaOrMadaniya={props.obj.type}
      />
      <AyahCard surahNumber={props.obj.id} verses={props.obj.verses} />
    </>
  );
};

export default Layout;
