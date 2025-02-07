

import React from 'react';
import { client } from '@/sanity/lib/client';

// پروڈکٹ کی نوعیت کے لیے انٹرفیس
interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  discountPercentage: number;
  stockLevel: number;
  category: string;
  slug: { current: string };
  imageUrl: string;
}

// پروڈکٹ پیج کمپوننٹ
export default async function ProductPage({ params }: { params: { product: string } }) {
  // params کو await کریں تاکہ آپ کو صحیح product مل سکے
  const { product } = await params;

  // سرور سائیڈ پر ڈیٹا حاصل کریں
  const data: Product[] = await client.fetch(
    `*[_type == "product" && isFeaturedProduct == true] {
      _id,
      name,
      price,
      description,
      discountPercentage,
      stockLevel,
      category,
      slug { current },
      "imageUrl": image.asset->url
    }`
  );

  // پروڈکٹ کو slug کے مطابق تلاش کریں
  const filteredData = data.find((item: Product) => item.slug.current === product);

  if (!filteredData) {
    return <div className="text-center text-xl text-red-500">پروڈکٹ نہیں ملی</div>;
  }

  return (
    <div className="flex justify-center items-center flex-col p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-sm mb-8 overflow-hidden">
        <img
          className="w-full h-64 object-cover"
          src={filteredData.imageUrl}
          alt={filteredData.name}
        />
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-2">{filteredData.name}</h2>
          <p className="text-gray-700 mb-4">{filteredData.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-xl font-bold text-gray-800">${filteredData.price}</span>
            {filteredData.discountPercentage > 0 && (
              <span className="ml-4 bg-red-100 text-red-600 text-sm px-2 py-1 rounded-full">
                -{filteredData.discountPercentage}%
              </span>
            )}
          </div>
          <div className="text-sm text-gray-600">
            {filteredData.stockLevel > 0 ? `موجود: ${filteredData.stockLevel}` : 'موجود نہیں'}
          </div>
        </div>
      </div>
    </div>
  );
}
