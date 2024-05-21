import PopularProductCard from '@/components/for home page/most popular products/Popular Products Card/PopularProductCard';
import { TCloths } from '@/types/types';
import React from 'react';

const TopRatedProducts = async() => {
      // --- fetching data with ISR method
  const res = await fetch(
    "https://server-for-assignment-8.vercel.app/allCloths",
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const data = await res.json();

  const topRatedProducts = [...data]
    .sort((a, b) => b.Ratings - a.Ratings);
    return (
        <div>
            
      <div className="my-10 md:grid md:grid-cols-4 grid grid-cols-1 gap-y-10">
        {topRatedProducts.map((item: TCloths) => (
          <PopularProductCard key={item._id} data={item} />
        ))}
      </div>
        </div>
    );
};

export default TopRatedProducts;