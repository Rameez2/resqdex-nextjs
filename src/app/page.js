import Head from 'next/head';
import AllAboutSection from "@/components/pagesComponents/home/AllAboutSection";
import NewsLetter from "../components/pagesComponents/home/NewsLetter";
import PetsAvailable from '../components/pagesComponents/home/PetsAvailable.js';
import Testimonials from "@/components/pagesComponents/home/Testimonials";
import SearchBanner from "@/components/pagesComponents/home/SearchBanner";
import AnimalCategories from "@/components/pagesComponents/home/AnimalCategories";

export default function Home() {
  return (
    <>
      <Head>
        <title>Find Your Perfect Pet | Pet Adoption Platform</title>
        <meta name="description" content="Browse available pets, read testimonials, and adopt your new best friend today!" />
        <meta name="keywords" content="pet adoption, dogs, cats, find pets, animal rescue" />
        <meta property="og:title" content="Find Your Perfect Pet" />
        <meta property="og:description" content="Browse available pets, read testimonials, and adopt your new best friend today!" />
        <meta property="og:type" content="website" />
        {/* Add canonical, favicon, etc. if needed */}
      </Head>

      <div>
        <SearchBanner />
        <PetsAvailable />
        <AnimalCategories />
        <Testimonials />
        <AllAboutSection />
        <NewsLetter />
      </div>
    </>
  );
}
