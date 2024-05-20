import FlashSaleCard from "./flash sale card/FlashSaleCard";

const FlashSale = () => {
  return (
    <div>
      <div>
        <h2 className="text-4xl font-bold text-center mt-20">
          Our Current Flash Sales Items
        </h2>
        <hr className="border-2 w-3/4 mx-auto my-5" />
        <div className="py-5 grid md:grid-cols-3 gap-6 px-1">
            <FlashSaleCard />
            <FlashSaleCard />
            <FlashSaleCard />
            <FlashSaleCard />
            </div>
      </div> 
    </div>
  );
};

export default FlashSale;
