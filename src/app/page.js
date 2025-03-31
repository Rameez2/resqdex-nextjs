import AllAboutSection from "@/components/pagesComponents/home/AllAboutSection";
import NewsLetter from "../components/pagesComponents/home/NewsLetter";
import PetsAvailable from '../components/pagesComponents/home/PetsAvailable.js';
import Testimonials from "@/components/pagesComponents/home/Testimonials";
import SearchBanner from "@/components/pagesComponents/home/SearchBanner";
import AnimalCategories from "@/components/pagesComponents/home/AnimalCategories";

export default function Home() {
  return (
    <div>
      <SearchBanner/>
      <PetsAvailable/>
      <AnimalCategories/>
      <Testimonials/>
      <AllAboutSection/>
      <NewsLetter/>
    </div>
  );
}