import { Button } from "@/components/ui/button";

const ButtonGroup = () => {
  return (
    <div className="text-center">
      <br />
      <Button
        aria-label="Previous Surah"
        className="text-primary bg-secondary hover:text-primary hover:bg-secondary rounded-r-none border-2 border-r-secondary"
      >
        &lsaquo; Prev Surah
      </Button>
      <Button
        aria-label="Next Surah"
        className="text-primary bg-secondary hover:text-primary hover:bg-secondary rounded-l-none border-2 border-l-secondary"
      >
        Next Surah &rsaquo;
      </Button>
    </div>
  );
};

export default ButtonGroup;
