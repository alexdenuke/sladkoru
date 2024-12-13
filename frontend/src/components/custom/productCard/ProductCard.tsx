import Image from "next/image";
interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  weight: number;
}
const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  price,
  weight,
}) => {
  console.log("product", name);
  return (
    <div className="">
      <div className="relative w-full h-48 bg-slate-100">
        <Image
          // width={300}
          // height={300}
          fill={true}
          className="object-contain"
          src={"/75527.jpg"}
          alt="фото товара"
        />
      </div>

      <h3 className="mt-4 font-bold">{name}</h3>
      <h4 className="mt-1 text-gray-800">{description}</h4>
      <div className="flex justify-between mt-4 mb-4">
        <p>{price}</p>
        <select name="select" defaultValue="value1">
          <option value="value1">100 грамм</option>
          <option value="value2">200 грамм</option>
          <option value="value3">300 грамм</option>
        </select>
      </div>
      <button className="w-full bg-slate-300 rounded py-2">в корзину</button>
    </div>
  );
};

export default ProductCard;
