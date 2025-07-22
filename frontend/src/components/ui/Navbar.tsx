// Note: This component was at first structered by AI, then I added some modifications, with the help of Allah sub7anahu.
import {
  Bars3Icon,
  MoonIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b shadow-xs bg-background px-2 md:px-4 lg:px-6 py-2 flex justify-between items-center">
      {/* Mobile Nav Toggle */}
      <div className="flex items-center">
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="mr-2 size-8" size="icon">
                <Bars3Icon className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader className="text-lg font-semibold">Menu</SheetHeader>
              <p>placeholding</p>
            </SheetContent>
          </Sheet>
        </div>
        <h1 className="text-lg font-semibold">Al-Quran</h1>
      </div>
      <div className="flex">
        <Button variant="outline" size="icon" className="ml-2 size-8">
          <MoonIcon className="w-5 h-5" />
        </Button>
        <Button variant="outline" size="icon" className="ml-2 size-8">
          <Cog6ToothIcon className="w-5 h-5" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
