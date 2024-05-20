import { TCloths } from "@/types/types";

const PopularProductCard = () => {
  return (
    <div className="md:max-w-80 w-[95%] mx-5">
      <div className="rounded overflow-hidden">
        <img
          src="https://themewagon.github.io/hexashop/assets/images/men-03.jpg"
          alt=""
        />
      </div>
      <div className="my-3 mx-3">
        <h2 className="text-lg font-semibold text-gray-600">Product Title</h2>
        <div className="flex justify-between items-center my-1">
            <p className="text-sm">Price : $250 </p>
            <button className="btn btn-neutral hover:btn-ghost btn-xs rounded-none">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default PopularProductCard;
