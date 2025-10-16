import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { ShoppingBag, ShoppingCart } from "lucide-react";

const Cart = () => {
  return (
    <div className="flex justify-center py-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            size="sm"
            className="text-sm font-medium px-4 h-9 rounded-md shadow-sm"
            onClick={() => {}}
            variant="default"
          >
            <ShoppingCart size={16} />
            <span className="text-primary-foreground text-xs">{10}</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>
              <div className="flex items-center gap-2">
                <ShoppingBag /> <span>Cart</span>
              </div>
            </SheetTitle>
            <SheetDescription>Your list of products to buy</SheetDescription>
          </SheetHeader>

          {/*           <form action="" className="p-4">
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
          </form> */}
          <div className="flex items-center gap-3">
            {/*               <Button
                         size="sm"
                         className="text-sm font-medium px-4 h-9 rounded-md shadow-sm"
                         onClick={(e) => {
                           e.preventDefault();
                           if (onCartClick) onCartClick();
                         }}
                       >
                         <Link to={cartHref} className="flex items-baseline gap-2">
                           <ShoppingCart size={16} />
                           <span className="text-primary-foreground text-xs">
                             {cartCount}
                           </span>
                         </Link>
                       </Button> */}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Cart;
