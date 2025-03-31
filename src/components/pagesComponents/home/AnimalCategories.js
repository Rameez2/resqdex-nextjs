import { ArrowRight,Dog,Cat,PawPrint } from "lucide-react";

export default function AnimalCategories() {
  return (
    <div className="bg-white h-1/2 w-full flex items-center justify-center p-4">
      <div className="max-w-6xl w-full relative py-16">
        {/* Background blob */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[40%] aspect-square rounded-full bg-cream z-0"></div>

        <div className="relative z-10 container mx-auto">
          <h1 className="text-[#e17716] text-4xl md:text-5xl lg:text-6xl font-bold mb-20 text-center">
            Explore Vast Categories of Animals
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {/* Cat Category */}
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <Cat className="w-16 h-16 text-[#e17716]" />
              </div>
              <h3 className="text-black text-2xl font-medium">Cats</h3>
            </div>

            {/* Dog Category */}
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <Dog className="w-16 h-16 text-[#e17716]" />
              </div>
              <h3 className="text-black text-2xl font-medium">Dogs</h3>
            </div>

            {/* Other Animals Category */}
            <div className="flex flex-col items-center">
              <div className="mb-4">
              <PawPrint className="w-16 h-16 text-[#e17716]" />
              </div>
              <h3 className="text-black text-2xl font-medium">Other Animal</h3>
            </div>
          </div>

          <div className="flex justify-center md:justify-center">
            <button className="cursor-pointer bg-[#e17716] text-white px-6 py-3 rounded-full flex items-center gap-2 text-lg font-medium hover:bg-primary/90 transition-colors">
              Explore All Categories
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function CatIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M40 55C52 55 60 47 60 35C60 23 52 15 40 15C28 15 20 23 20 35C20 47 28 55 40 55Z"
        stroke="#E17716"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M30 35C30.5523 35 31 34.5523 31 34C31 33.4477 30.5523 33 30 33C29.4477 33 29 33.4477 29 34C29 34.5523 29.4477 35 30 35Z"
        fill="#E17716"
        stroke="#E17716"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50 35C50.5523 35 51 34.5523 51 34C51 33.4477 50.5523 33 50 33C49.4477 33 49 33.4477 49 34C49 34.5523 49.4477 35 50 35Z"
        fill="#E17716"
        stroke="#E17716"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40 42C38.3431 42 37 40.6569 37 39"
        stroke="#E17716"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M20 25L15 20" stroke="#E17716" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M60 25L65 20" stroke="#E17716" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function DogIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M40 55C52 55 60 47 60 35C60 23 52 15 40 15C28 15 20 23 20 35C20 47 28 55 40 55Z"
        stroke="#E17716"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M30 35C30.5523 35 31 34.5523 31 34C31 33.4477 30.5523 33 30 33C29.4477 33 29 33.4477 29 34C29 34.5523 29.4477 35 30 35Z"
        fill="#E17716"
        stroke="#E17716"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50 35C50.5523 35 51 34.5523 51 34C51 33.4477 50.5523 33 50 33C49.4477 33 49 33.4477 49 34C49 34.5523 49.4477 35 50 35Z"
        fill="#E17716"
        stroke="#E17716"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40 42C41.6569 42 43 40.6569 43 39"
        stroke="#E17716"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 25C25 25 20 20 15 25"
        stroke="#E17716"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M55 25C55 25 60 20 65 25"
        stroke="#E17716"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PawIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M30 25C30 28.3137 28.2091 31 26 31C23.7909 31 22 28.3137 22 25C22 21.6863 23.7909 19 26 19C28.2091 19 30 21.6863 30 25Z"
        stroke="#E17716"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M58 25C58 28.3137 56.2091 31 54 31C51.7909 31 50 28.3137 50 25C50 21.6863 51.7909 19 54 19C56.2091 19 58 21.6863 58 25Z"
        stroke="#E17716"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M44 20C44 23.3137 42.2091 26 40 26C37.7909 26 36 23.3137 36 20C36 16.6863 37.7909 14 40 14C42.2091 14 44 16.6863 44 20Z"
        stroke="#E17716"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M55 55C50 45 30 45 25 55C20 65 35 70 40 60C45 70 60 65 55 55Z"
        stroke="#E17716"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

