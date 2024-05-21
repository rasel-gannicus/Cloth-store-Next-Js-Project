import { TCloths } from "@/types/types";

const PopularProductCard = ({data} : {data : TCloths}) => {
  return (
    <div className="md:max-w-80 w-[95%] mx-auto">
      <div className="rounded overflow-hidden">
        <img
          src={data.Images}
          alt=""
        />
      </div>
      <div className="my-3 mx-3">
        <h2 className="text-lg font-semibold text-gray-600">{data.Title}</h2>
        <p className="text-gray-400 text-sm">Ratings : {data.Ratings} </p>
        <div className="flex justify-between items-center my-1">
            <p className="text-sm">Price : ${data.Price}</p>
            <button className="btn btn-neutral hover:btn-ghost btn-xs rounded-none">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default PopularProductCard;
