'use client'

import { useCart } from '@/context/cartContext'
import { useState } from 'react'

interface ProductClientProps {
    product: {
        id: number
        name: string
        description: string
        imgURL: string
        weightOptions: { id: number; weight: number; price: number }[]
    }
}

export default function ProductClient({ product }: ProductClientProps) {

    console.log('💡 Product in client:', product)
    const { addToCart } = useCart()

    const [selectedWeightId, setSelectedWeightId] = useState<number | null>(
        product.weightOptions?.[0]?.id ?? null
    )

    const selectedOption =
        product.weightOptions?.find((opt) => opt.id === selectedWeightId) ?? null

    return (
        <div className="my-container">
            <img src={product.imgURL} alt={product.name} />
            <h1>{product.name}</h1>
            <p>{product.description}</p>

            {(product.weightOptions?.length ?? 0) > 0 ? (
                <>
                    <select
                        value={selectedWeightId ?? ''}
                        onChange={(e) => setSelectedWeightId(Number(e.target.value))}
                    >
                        {product.weightOptions.map((opt) => (
                            <option key={opt.id} value={opt.id}>
                                {opt.weight} г — {opt.price} ₽
                            </option>
                        ))}
                    </select>

                    <p className="mt-2 text-lg font-semibold">
                        {selectedOption?.price ?? '—'} ₽
                    </p>
                </>
            ) : (
                <p className="text-sm text-gray-500 mt-2">
                    Нет доступных вариантов веса
                </p>
            )}

            <button
                disabled={!selectedOption}
                onClick={() => {
                    if (!selectedOption) return
                    addToCart({
                        productId: product.id,
                        name: product.name,
                        weightId: selectedOption.id,
                        weight: selectedOption.weight,
                        price: selectedOption.price,
                        quantity: 1,
                    })
                }}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            >
                В корзину
            </button>
        </div>
    )
}
