import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Minus, PlusIcon, StarIcon } from "lucide-react";
import { Input } from "./ui/input";
import type { Product } from "../types/types";
export default function CardProduct({ product }: { product: Product }) {
  return (
    <article className="w-full p-6 flex justify-center">
      <Card className="w-48">
        <CardContent className="h-full flex flex-col justify-between p-3">
          <CardHeader className="aspect-square rounded-md bg-gray-100 mb-2">
            <div className="flex items-center justify-center h-full text-muted-foreground text-xs">
              <img src={product.thumbnail} alt={product.title} />
            </div>
          </CardHeader>
          <CardTitle className="text-sm mb-1">{product.title}</CardTitle>
          <CardDescription className="text-xs mb-2 line-clamp-2">
            {product.description}
          </CardDescription>
          {product.rating !== undefined && (
            <div className="flex items-center space-x-1 mb-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <StarIcon
                    key={index}
                    className={`h-3 w-3 ${
                      +product?.rating.toFixed(0) > index
                        ? "fill-yellow-300 text-yellow-300"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                ({+product.rating.toFixed(0)})
              </span>
            </div>
          )}

          <div className="flex items-center justify-between">
            <span className="text-sm font-bold">{product.price} €</span>x
            <form>
              <label htmlFor="productAmount">
                <Input
                  id="productAmount"
                  type="number"
                  className="w-[80px]"
                  defaultValue={0}
                />
              </label>
            </form>
          </div>

          <CardFooter className="flex items-center justify-between pt-4">
            <div className="flex gap-2">
              <Button
                variant={"secondary"}
                size="sm"
                className="text-xs px-2 py-1 h-7"
              >
                <PlusIcon />
              </Button>
              <Button
                size="sm"
                variant={"secondary"}
                className="text-xs px-2 py-1 h-7"
              >
                <Minus />
              </Button>
            </div>

            <div>
              <Button size="sm" className="text-xs px-2 py-1 h-7">
                Add
              </Button>
            </div>
          </CardFooter>
        </CardContent>
      </Card>
    </article>
  );
}
