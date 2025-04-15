"use client";
import Image from "next/image";
import PopUp from "../ui/Pop-up";
import { useState } from "react";
import Link from "next/link";
import { slugify } from "../../../lib/utils";
import { useCart } from "@/context/cartContext";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  id: number;
  name: string;
  slug: string;
  description: string;
  weightOptions: WeightOptions[];
}

interface WeightOptions {
  id: number;
  weight: number;
  price: number;
  productId: number;
}
const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  slug,
  description,
  weightOptions,
}) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const [selectedWeightId, setSelectedWeightId] = useState<number>(
    weightOptions[0]?.id || 0,
  );

  const selectedOption = weightOptions.find(
    (opt) => opt.id === selectedWeightId,
  );
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      {/* <div className="h-[180px] w-full relative">
        <Image
          // width={300}
          // height={300}
          fill={true}
          className="object-cover"
          src={'/75527.jpg'}
          alt="фото товара"
        />
      </div> */}

      <div className="aspect-[4/3] w-full bg-gray-100">
        <Image
          src="/test-1600-1200.jpg"
          width={1600}
          height={1200}
          alt="фото товара"
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="font-bold text-lg line-clamp-2 mb-1">
          <Link href={`/product/${slugify(slug)}`}>{name}</Link>
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm line-clamp-2 mb-4">{description}</p>

        {/* Spacer to push the following elements to the bottom */}
        <div className="flex-grow"></div>

        {/* Price */}
        <div className="font-bold text-lg mb-3">
          {selectedOption ? `${selectedOption.price} ₽` : "—"}
        </div>

        {/* Weight Dropdown */}
        <div className="mb-3">
          <Select
            value={selectedWeightId.toString()}
            onValueChange={(val) => setSelectedWeightId(Number(val))}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Выберите вес" />
            </SelectTrigger>
            <SelectContent>
              {weightOptions.map((option) => (
                <SelectItem key={option.id} value={option.id.toString()}>
                  {`${option.weight} гр`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => {
            if (selectedOption) {
              addToCart({
                productId: id,
                name,
                weightId: selectedOption.id,
                weight: selectedOption.weight,
                price: selectedOption.price,
                quantity: 1,
              });
              toast({
                title: `добавлен в корзину`,
                description: `${name} ${selectedOption.weight} гр - ${selectedOption.price} ₽`,
                duration: 3000,
              });
            }
          }}
          className="w-full bg-black hover:bg-gray-800 text-white py-2 px-4 rounded transition-colors"
        >
          Добавить в корзину
        </button>
      </div>
      {/* <h3 className="mt-4 font-bold">
        <Link href={`/product/${slugify(slug)}`}>{name}</Link>{' '}
      </h3>
      <h4 className="mt-1 text-sm text-gray-800">{description}</h4>
      <p></p>
      <div className="flex justify-between mt-4 mb-4 text-sm text-gray-600 items-center">
        <p>{selectedOption ? `${selectedOption.price} ₽` : '—'}</p>
        <select
          value={selectedWeightId}
          onChange={(e) => setSelectedWeightId(Number(e.target.value))}
          className="border rounded px-2 py-1"
        >
          {weightOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {`${option.weight} гр`}
            </option>
          ))}
        </select>
      </div>
      <Button onClick={() => {
        if (selectedOption) {
          addToCart({
            productId: id,
            name,
            weightId: selectedOption.id,
            weight: selectedOption.weight,
            price: selectedOption.price,
            quantity: 1,
          })
        }
      }} className="w-full">в корзину</Button> */}
    </div>
  );
};

export default ProductCard;
