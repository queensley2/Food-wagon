import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DiscountSection from "@/components/DiscountSection";
import HowItWorks from "@/components/HowItWorks";
import PopularItems from "@/components/PopularItems";
import FeaturedRestaurants from "@/components/FeaturedRestaurants";
import SearchByFood from "@/components/SearchByFood";
import FeaturesAndApp from "@/components/FeaturesAndApp";
import PromoBanners from "@/components/PromoBanners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans">
      <Hero />
      <DiscountSection />
      <HowItWorks />
      <PopularItems />
      <FeaturedRestaurants />
      <SearchByFood />
      <FeaturesAndApp />
      <PromoBanners />
      <Footer />
    </div>
  );
}
