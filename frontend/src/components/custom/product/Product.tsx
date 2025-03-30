'use client'
import Image from 'next/image'
import PopUp from '../ui/Pop-up'
import { useState } from 'react'
import Link from 'next/link'
import { slugify } from '../../../lib/utils'
import { addToCart } from '@/lib/cart'
interface ProductCardProps {
  id: number
  name: string
  slug: string
  description: string
  weightOptions: WeightOptions[]
}

interface WeightOptions {
  id: number,
  weight: number,
  price: number,
  productId: number
}
const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  slug,
  description,
  weightOptions,
}) => {
  console.log('product!!!!', weightOptions)
  const [isPopUpOpen, setIsPopUpOpen] = useState(false)

  const handleOpenPopUp = () => setIsPopUpOpen(true)
  const handleClosePopUp = () => setIsPopUpOpen(false)

  const [selectedWeightId, setSelectedWeightId] = useState<number>(weightOptions[0]?.id || 0)

  const selectedOption = weightOptions.find((opt) => opt.id === selectedWeightId)
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
      <h3 className="mt-4 font-bold">
        <Link href={`/product/${slugify(slug)}`}>{name}</Link>{' '}
      </h3>
      <h4 className="mt-1 text-gray-800">{description}</h4>
      <p></p>
      <div className="flex justify-between mt-4 mb-4">
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
      <button onClick={() => {
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
      }} className="w-full bg-slate-300 rounded">в корзину</button>
    </div>
  )
}

export default ProductCard
