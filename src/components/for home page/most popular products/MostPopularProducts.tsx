import { TCloths } from "@/types/types";
import PopularProductCard from "./Popular Products Card/PopularProductCard";
import Link from "next/link";

const MostPopularProducts = async () => {
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
    .sort((a, b) => b.Ratings - a.Ratings)
    .slice(0, 6);
  return (
    <div className="flex flex-col justify-center items-center py-20 ">
      <div className="md:flex-row md:justify-between  flex flex-col justify-center items-center w-full">
        <div className="text-center md:text-left">
          <h2 className="md:text-4xl text-3xl font-semibold">
            Most Popular Products
          </h2>
          <p className="text-gray-500 my-5">See our most rated products here</p>
        </div>
        <Link href={"/top-products"}>
          <button className="btn btn-neutral md:btn-lg rounded-full ">
            View All
          </button>
        </Link>
      </div>

      <div className="my-10 w-[95%] lg:w-full mx-auto md:grid md:grid-cols-4 grid grid-cols-1 gap-y-10">
        {topRatedProducts.map((item: TCloths) => (
          <PopularProductCard key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default MostPopularProducts;
