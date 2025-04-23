'use client';

import React, { useState } from 'react';

const ProductPage: React.FC = () => {
    const [filter, setFilter] = useState<string | null>(null);
    const [sort, setSort] = useState<string>('default');

    const products = [
        { id: 1, name: 'Product 1', price: 100, category: 'shirt', date: '2023-10-01', solds: 8 },
        { id: 2, name: 'Product 2', price: 200, category: 'mug', date: '2023-10-02', solds: 5 },
        { id: 3, name: 'Product 3', price: 150, category: 'shirt', date: '2023-10-03', solds: 9 },
        { id: 4, name: 'Product 4', price: 250, category: 'mug', date: '2023-10-04', solds: 2 },
        { id: 5, name: 'Product 5', price: 300, category: 'shirt', date: '2023-10-05', solds: 4 },
        { id: 6, name: 'Product 6', price: 350, category: 'mug', date: '2023-10-06', solds: 2 },
        { id: 7, name: 'Product 7', price: 400, category: 'shirt', date: '2023-10-07', solds: 2 },
        { id: 8, name: 'Product 8', price: 450, category: 'mug', date: '2023-10-08', solds: 1 },
    ];

    const handleFilterClick = (filterType: string) => {
        if(filterType === 'all') {
            setFilter(null);
        }
        else if(filterType === 'shirts') {
            setFilter('shirt');
        }
        else if(filterType === 'mugs') {
            setFilter('mug');
        }
        else {
            setFilter(null);
        }
    };

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSort(event.target.value);
    };

    const filteredProducts = filter
        ? products.filter((product) => product.category.includes(filter))
        : products;

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sort === 'news') return new Date(b.date).getTime() - new Date(a.date).getTime();
        if (sort === 'best-sellers') return b.solds - a.solds;
        if (sort === 'default') return 0;
        if (sort === 'price-asc') return a.price - b.price;
        if (sort === 'price-desc') return b.price - a.price;
        return 0;
    });

    return (
        <div className='flex flex-col w-full me-[10%] ms-[10%]'>
            <div className="flex w-full justify-between mb-5">
                <div>
                    <button 
                        onClick={() => handleFilterClick('all')} 
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Todos os produtos
                    </button>
                    <button 
                        onClick={() => handleFilterClick('shirts')} 
                        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        camisetas
                    </button>
                    <button 
                        onClick={() => handleFilterClick('mugs')} 
                        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        canecas
                    </button>
                </div>
                <div>
                    <select
                        value={sort}
                        onChange={handleSortChange}
                        className="px-4 py-2 border rounded"
                    >
                        <option value="default">Default</option>
                        <option value="news">Novidades</option>
                        <option value="price-asc">Preço: Menor - maior</option>
                        <option value="price-desc">Preço: Maior - menor</option>
                        <option value="best-sellers">Mais vendidos</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5">
                {sortedProducts.map((product) => (
                    <div key={product.id} className="border p-5 rounded shadow">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-700">Price: ${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductPage;