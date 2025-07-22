import Navbar from "./components/ui/Navbar"
import AyahInfoDiv  from "./components/ui/AyahInfoDiv"
import AyahCard from "./components/ui/AyahCard"
import ButtonGroup from "./components/ui/ButtonGroup"

const App = () => {
  return (
    <div className="px-2 md:px-4 lg:px-6">
      <Navbar />
      <AyahInfoDiv surahName="Al-Fatiha" numberOfAyat={7} makkiyaOrMadaniya="Makkiya" />
      <AyahCard surahNumber={1} ayahNumber='١' ayahNumberInEnglish={1} ayahText={'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ'} tafsir={'In the name of Allah, the Entirely Merciful, the Especially Merciful.'} />
      <AyahCard surahNumber={1} ayahNumber='٢' ayahNumberInEnglish={2} ayahText={'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ'} tafsir={'[All] praise is [due] to Allah, Lord of the worlds -'} />
      <ButtonGroup />
    </div>
  )
}

export default App