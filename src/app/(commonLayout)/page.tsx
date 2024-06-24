import Banner from "@/components/banner/banner";
import FlashSale from "@/components/for home page/flash sale/FlashSale";
import MostPopularProducts from "@/components/for home page/most popular products/MostPopularProducts";
import TopBrands from "@/components/for home page/top brands/TopBrands";

export default function Home() {
  return (
    <div className="mx-auto">
      <Banner />
      <div className="lg:max-w-[1450px] mx-auto">
        <FlashSale />
        <TopBrands />
        <MostPopularProducts />
      </div>
    </div>
  );
}
