"use client";
import SearchBannerFilter from "./searchBanner/searchBannerFilter";

export default function SearchBanner() {

  return (
    <section
      className="min-h-screen bg-white flex flex-col bg-cover bg-center text-white mb-5"
      style={{ backgroundImage: 'url("/search-banner-img.jpeg")' }}
      aria-label="Pet Search Banner Section with Background Image"
    >
      <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto w-full px-4 py-12">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Find Your Perfect Pet</h1>
          <p className="max-w-2xl mx-auto">
            Discover your new best friend from thousands of adoptable pets. Use our search tools to find the perfect
            companion for your home.
          </p>
        </header>

    <SearchBannerFilter/>

        {/* Supporting Text */}
        <div className="text-center max-w-2xl">
          <p>Thousands of loving pets are looking for their forever homes. Start your search today!</p>
        </div>
      </div>

      {/* Wavy Decoration */}
      <div className="w-full h-32 relative overflow-hidden mt-auto" aria-hidden="true">
        <div className="absolute bottom-0 w-full">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 70C840 80 960 100 1080 100C1200 100 1320 80 1380 70L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#FFCFA3"
            />
            <path
              d="M0 120L60 116.7C120 113.3 240 106.7 360 100C480 93.3 600 86.7 720 90C840 93.3 960 106.7 1080 110C1200 113.3 1320 106.7 1380 103.3L1440 100V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#FFE8D3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
