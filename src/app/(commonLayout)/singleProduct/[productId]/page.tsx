import { TCloths } from "@/types/types";
import React, { cache } from "react";

interface TProductId {
  productId: string[];
}

// --- implementing SSG 
export const generateStaticParams = async() => {
  const res = await fetch("https://server-for-assignment-8.vercel.app/allCloths")
  const cloths = await res.json() ;
  return cloths.slice(0,10).map((items : TCloths)=>({
    productId : items._id
  }))
}

const SingleProduct = async ({ params }: { params: TProductId }) => {
  
  // --- fetching data with SSG(Static Site Generation) method
  const res = await fetch(
    `https://server-for-assignment-8.vercel.app/cloths/${params.productId}`,
    {
      cache: "force-cache",
    }
  );
  const data = await res.json();

  return (
    <div className="w-[95%] mx-auto my-20">
      {/* <h2>Single Product here</h2> */}
      <div className=" flex flex-col md:flex-row gap-10">
        <div>
          <img src={data.Images} alt="" className="mx-auto" />
        </div>

        <div className="flex-1">
          <h2 className=" text-2xl md:text-4xl font-semibold">{data.Title}</h2>
          <div className="lg:w-[40%] md:w-[80%]">
            <div className="flex justify-between items-center my-5">
              <div className="flex justify-center items-center">
                <span className="text-4xl text-orange-400">$ </span>
                <span className="text-xl text-gray-400 font-semibold">
                  {" "}
                  {data.Price}
                </span>
              </div>
              <p className="text-2xl text-gray-300">|</p>
              <p className="text-xl text-gray-400 font-semibold">
                Ratings : {data.Ratings}
              </p>
            </div>
          </div>
          <hr className="border-1  mx-auto my-5" />
          <div className="">
            <p>{data.Description}</p>
            <div className="mt-10 flex items-center justify-start gap-5 ms-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="gray"
                className="w-10 h-10"
              >
                <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
              </svg>
              <p className="font-semibold text-gray-500">Free Delivery </p>
            </div>

            <div className="my-5 flex justify-start items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="gray"
                className="w-10 h-10"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 1.5c-1.921 0-3.816.111-5.68.327-1.497.174-2.57 1.46-2.57 2.93V21.75a.75.75 0 0 0 1.029.696l3.471-1.388 3.472 1.388a.75.75 0 0 0 .556 0l3.472-1.388 3.471 1.388a.75.75 0 0 0 1.029-.696V4.757c0-1.47-1.073-2.756-2.57-2.93A49.255 49.255 0 0 0 12 1.5Zm-.97 6.53a.75.75 0 1 0-1.06-1.06L7.72 9.22a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06l-.97-.97h3.065a1.875 1.875 0 0 1 0 3.75H12a.75.75 0 0 0 0 1.5h1.125a3.375 3.375 0 1 0 0-6.75h-3.064l.97-.97Z"
                  clip-rule="evenodd"
                />
              </svg>

              <p className="font-semibold text-gray-500">
                7 Days Return Policy{" "}
              </p>
            </div>
            <div className="my-10 flex gap-4">
              <button className="btn btn-neutral hover:btn-ghost">
                Buy Now
              </button>
              <button className="btn btn-neutral hover:btn-warning">
                Add to wishlist{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
