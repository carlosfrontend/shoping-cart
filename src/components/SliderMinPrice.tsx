import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

type SliderProps = React.ComponentProps<typeof Slider>;

export function SliderMinPrice({ className, ...props }: SliderProps) {
  const [minPrice, setMinPrice] = useState([0]);
  return (
    <>
      <Slider
        value={minPrice}
        max={100}
        step={1}
        onValueChange={setMinPrice}
        className={cn("w-[60%]", className)}
        {...props}
      />
      <span className="ml-2 text-foreground font-bold">{minPrice} $</span>
    </>
  );
}
