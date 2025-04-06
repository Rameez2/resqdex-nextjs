import { ArrowRight, Dog, Cat, PawPrint } from "lucide-react";

export default function AnimalCategories() {
  return (
    <section className="bg-white w-full flex items-center justify-center p-4" aria-labelledby="animal-categories-heading">
      <div className="max-w-6xl w-full relative py-16">
        {/* Background blob */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[40%] aspect-square rounded-full bg-cream z-0" />

        <div className="relative z-10 container mx-auto">
          <h2
            id="animal-categories-heading"
            className="text-primary text-4xl md:text-5xl lg:text-6xl font-bold mb-20 text-center"
          >
            Explore Vast Categories of Animals
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <article className="flex flex-col items-center text-center" aria-label="Cat category">
              <Cat className="w-16 h-16 text-primary mb-4" aria-hidden="true" />
              <h3 className="text-black text-2xl font-medium">Cats</h3>
              <p className="text-gray-600 mt-2 text-sm max-w-xs">
                Browse domestic and exotic cats looking for new homes and loving care.
              </p>
            </article>

            <article className="flex flex-col items-center text-center" aria-label="Dog category">
              <Dog className="w-16 h-16 text-primary mb-4" aria-hidden="true" />
              <h3 className="text-black text-2xl font-medium">Dogs</h3>
              <p className="text-gray-600 mt-2 text-sm max-w-xs">
                Discover playful pups and loyal dogs available for adoption near you.
              </p>
            </article>

            <article className="flex flex-col items-center text-center" aria-label="Other animals category">
              <PawPrint className="w-16 h-16 text-primary mb-4" aria-hidden="true" />
              <h3 className="text-black text-2xl font-medium">Other Animals</h3>
              <p className="text-gray-600 mt-2 text-sm max-w-xs">
                Explore birds, reptiles, and other unique animals in need of a home.
              </p>
            </article>
          </div>

          <div className="flex justify-center">
            <a
              href="/categories"
              className="cursor-pointer bg-primary text-white px-6 py-3 rounded-full flex items-center gap-2 text-lg font-medium hover:bg-primary/90 transition-colors"
              aria-label="Explore all animal categories"
            >
              Explore All Categories
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
