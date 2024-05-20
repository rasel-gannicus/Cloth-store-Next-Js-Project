import PopularProductCard from "./Popular Products Card/PopularProductCard";


const MostPopularProducts = () => {
    return (
        <div className="flex flex-col justify-center items-center py-20 ">
            <div className="md:flex-row md:justify-between  flex flex-col justify-center items-center w-full">
                <div className="text-center md:text-left">
                    <h2 className="md:text-4xl text-3xl font-semibold">Most Popular Products</h2>
                    <p className="text-gray-500 my-5">See our most rated products here</p>
                </div>
                <button className="btn btn-neutral md:btn-lg rounded-full ">View All</button>
            </div>

            <div className="my-10 md:grid md:grid-cols-4 grid grid-cols-1 gap-y-10">
                <PopularProductCard />
                <PopularProductCard />
                <PopularProductCard />
                <PopularProductCard />
                <PopularProductCard />
            </div>
        </div>
    );
};

export default MostPopularProducts;