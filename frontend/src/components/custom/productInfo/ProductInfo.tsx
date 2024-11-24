import Image from "next/image";

const ProductInfo = () => {
  return (
    <div className="w-80 h-80">
      <div className="w-max h-max">
        <Image
          width={300}
          height={300}
          className=""
          src={"/75527.jpg"}
          alt="фото товара"
        />
      </div>

      <h3>Название товара</h3>
      <h4>Описание товара</h4>
      <div className="flex justify-between">
        <p>700 руб</p>
        <button>в корзину</button>
      </div>
    </div>
  );
};

export default ProductInfo;
