import Banner from "@/components/banner/banner";
import Navbar from "@/components/shared/navbar/Navbar";

export default function Home() {
  return (
    <div className="lg:max-w-[1250px] mx-auto">
      <Navbar />
      <Banner />
    </div>
  );
}
