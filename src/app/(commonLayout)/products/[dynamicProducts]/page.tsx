import ProductCard from "@/components/products/product card/ProductCard";
import { TCloths } from "@/types/types";

interface TDynamicProducts {
  dynamicProducts: string;
}

const DynamicProducts = async ({ params }: { params: TDynamicProducts }) => {
  let { dynamicProducts } = params;

  //   --- fetching data from server with SSR
  const res = await fetch(
    "https://server-for-assignment-8.vercel.app/allCloths",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  //   --- filtering data to show in the page according to the url
  let filteredData: TCloths[] = [];

  if (dynamicProducts == "women-clothing") {
    filteredData = [...data].filter((item) => item.gender == "women");
  } else if (dynamicProducts == "mens-wear") {
    filteredData = [...data].filter((item) => item.gender == "men");
  } else if (dynamicProducts == "kids-wear") {
    filteredData = [...data].filter((item) => item.gender == "kid");
  } else {
    filteredData = data;
  }

  return (
    <div className="py-10 px-10 md:max-w-[1450px]">
      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-10">
        Showing
        <span className="text-pink-600">
          {dynamicProducts == "women-clothing" && " Women "}
          {dynamicProducts == "mens-wear" && " Men "}
          {dynamicProducts == "kids-wear" && " Kids "}
          {dynamicProducts == "all" && " All "}
        </span>
        products
      </h2>

      {/* --- dynamic product items according to the url in card view --- */}
      <div className="py-5 grid md:grid-cols-3 gap-6 px-1">
        {data?.length > 0 ? (
          filteredData?.map((item: TCloths) => (
            <ProductCard key={item._id} data={item} />
          ))
        ) : (
          <h2>No data found</h2>
        )}
      </div>
    </div>
  );
};

export default DynamicProducts;
