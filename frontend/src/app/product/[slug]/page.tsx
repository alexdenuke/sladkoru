
import React from 'react';

interface ProductProps {
    params: {
        slug: string;
    };
}
const Product = async ({ params }: ProductProps) => {
    console.log('params', params);
    const res = await fetch(`http://localhost:5000/api/products/slug/${params.slug}`, {
        // ✅ ISR: пересоздание страницы каждые 600 секунд
        next: { revalidate: 600 },
    });
    console.log('res', res);
    if (!res.ok) {
        // Здесь можешь показать 404 или пробросить ошибку
        throw new Error('Товар не найден');
    }

    const product = await res.json();
    console.log('product', product);
    return (
        <div className='my-container'>
            <img src={product.imgURL} alt={product.name} />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <select name="select" defaultValue="value1">
                <option value="value1">100 грамм</option>
                <option value="value2">200 грамм</option>
                <option value="value3">300 грамм</option>
            </select>
            <p>{product.price}</p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>В корзину</button>
        </div>
    );
};

export default Product;