
import ProductClient from '@/components/productClient'

interface ProductProps {
    params: { slug: string }
}

export default async function ProductPage({ params }: ProductProps) {
    const res = await fetch(`http://localhost:5000/api/products/slug/${params.slug}`, {
        next: { revalidate: 600 },
    })

    if (!res.ok) {
        throw new Error('Товар не найден')
    }

    const product = await res.json()
    console.log('✅ product from API:', product)
    return <ProductClient product={product} />
}
