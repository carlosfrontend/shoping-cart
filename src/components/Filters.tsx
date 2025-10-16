import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { SliderMinPrice } from "./SliderMinPrice";
import { SelectCategory } from "./SelectCategory";
import { Separator } from "./ui/separator";

const Filters = () => {
  return (
    <div className="flex justify-center py-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Filter Products</Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
            <SheetDescription>
              From here you can filter the products...
            </SheetDescription>
          </SheetHeader>
          <Separator orientation={"horizontal"} />

          <form action="" className="p-4">
            <h3 className="text-foreground font-bold text-md">
              Order from A to Z
            </h3>
            <div className="flex items-center gap-2 py-4">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-foreground">
                A-Z
              </Label>
            </div>
            <h3 className="text-foreground font-bold text-md">
              Order by minimum price
            </h3>
            <div className="flex items-center py-4">
              <SliderMinPrice />
            </div>

            <h3 className="text-foreground font-bold text-md">
              Order by categories
            </h3>
            <div className="flex items-center gap-2 py-4">
              <SelectCategory />
            </div>
          </form>
          <div className="flex justify-center items-center">
            <Button variant="destructive" size={"sm"}>
              Clear Filters
            </Button>
          </div>
          <Separator orientation={"horizontal"} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Filters;
