'use client'
import Image from 'next/image'
import PopUp from '../ui/Pop-up'
import { useState } from 'react'
import Link from 'next/link'
import { slugify } from '../../../lib/utils'
interface ProductCardProps {
  id: number
  name: string
  slug: string
  description: string
  price: number
  weight: number
}
const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  slug,
  description,
  price,
  weight,
}) => {
  // console.log('product', name)
  const [isPopUpOpen, setIsPopUpOpen] = useState(false)

  const handleOpenPopUp = () => setIsPopUpOpen(true)
  const handleClosePopUp = () => setIsPopUpOpen(false)
  return (
    <div className="">
      <div className="relative w-full h-48 bg-slate-100">
        <Image
          // width={300}
          // height={300}
          fill={true}
          className="object-contain"
          src={'/75527.jpg'}
          alt="фото товара"
        />
      </div>
      {/* <button
        onClick={handleOpenPopUp}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Быстрый просмотр
      </button>
      <PopUp
        isOpen={isPopUpOpen}
        onClose={handleClosePopUp}
        title="Настраиваемый Pop-Up"
        className="max-w-md bg-gray-100"
        overlayClassName="bg-opacity-75"
        closeIcon="❌"
      >
        <p className="text-center">
          Это кастомизированный pop-up с разными стилями и иконкой закрытия.
        </p>
      </PopUp> */}

      <h3 className="mt-4 font-bold">
        <Link href={`/product/${slugify(slug)}`}>{name}</Link>{' '}
      </h3>
      <h4 className="mt-1 text-gray-800">{description}</h4>
      <p></p>
      <div className="flex justify-between mt-4 mb-4">
        <p>{price}</p>
        <select name="select" defaultValue="value1">
          <option value="value1">100 грамм</option>
          <option value="value2">200 грамм</option>
          <option value="value3">300 грамм</option>
        </select>
      </div>
      <button className="w-full bg-slate-300 rounded">в корзину</button>
    </div>
  )
}

export default ProductCard
