import Image from "next/image"
import { Check, ChevronLeft, ChevronRight, Search, Share2, User } from "lucide-react"

export default function PetAdoption() {
  return (
    <div className="min-h-screen bg-[#fbf5f0] text-black">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image Group */}
          <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
            <div
              className="absolute top-0 left-0 w-[220px] h-[220px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden border-4 border-white z-10">
              <Image
                src="/placeholder.svg?height=280&width=280"
                alt="White dog"
                width={280}
                height={280}
                className="object-cover w-full h-full" />
            </div>
            <div
              className="absolute bottom-0 right-0 md:right-20 w-[220px] h-[220px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden border-4 border-white">
              <Image
                src="/placeholder.svg?height=280&width=280"
                alt="White kitten"
                width={280}
                height={280}
                className="object-cover w-full h-full" />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h3 className="text-[#e17716] text-xl font-medium mb-2">About</h3>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Option For Adoption</h1>
            <p className="text-lg mb-8">
              Our mission is to simplify the adoption process, raise awareness about animal rescue, and create loving
              forever homes for animals worldwide
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <div className="text-[#e17716]">
                  <Check className="w-6 h-6" />
                </div>
                <span className="font-medium">Hassle Free</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-[#e17716]">
                  <Check className="w-6 h-6" />
                </div>
                <span className="font-medium">Home Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-[#e17716]">
                  <Check className="w-6 h-6" />
                </div>
                <span className="font-medium">Tailored Choices</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-[#e17716]">
                  <Check className="w-6 h-6" />
                </div>
                <span className="font-medium">Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Adoption Process Section */}
      <section className="container mx-auto px-6 py-12">
        <h3 className="text-[#e17716] text-xl font-medium mb-2">Adoption Process</h3>
        <h2 className="text-4xl font-bold mb-10">
          Easier Adoption
          <br />
          Process
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#ffeade] rounded-3xl p-8">
            <div
              className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 mx-auto">
              <div className="text-[#e17716]">
                <Search className="w-10 h-10" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Search and Filter</h3>
            <p className="text-center">
              Narrow down options based on animal category, breed, age, size, temperament, and location.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#ffeade] rounded-3xl p-8">
            <div
              className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 mx-auto">
              <div className="text-[#e17716]">
                <Share2 className="w-10 h-10" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Connect with Rescues</h3>
            <p className="text-center">
              Directly contact the rescue organization or shelter for further inquiries and next steps.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#ffeade] rounded-3xl p-8">
            <div
              className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 mx-auto">
              <div className="text-[#e17716]">
                <User className="w-10 h-10" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Review Profiles</h3>
            <p className="text-center">
              Access comprehensive details about each pet, including photos, videos, and a heartfelt bio.
            </p>
          </div>
        </div>
      </section>
      {/* Success Stories Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Orange cat"
              width={400}
              height={400}
              className="rounded-3xl object-cover w-full h-[400px]" />
          </div>

          <div className="w-full md:w-1/2">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-[#e17716] text-xl font-medium mb-2">Success Stories</h3>
                <h2 className="text-4xl font-bold">Uniting Pets</h2>
              </div>
              <div className="flex gap-2">
                <button
                  className="w-10 h-10 rounded-full border border-[#e17716] flex items-center justify-center">
                  <ChevronLeft className="w-5 h-5 text-[#e17716]" />
                </button>
                <button
                  className="w-10 h-10 rounded-full border border-[#e17716] flex items-center justify-center">
                  <ChevronRight className="w-5 h-5 text-[#e17716]" />
                </button>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4">Max's Story:</h3>
            <p className="text-gray-800 mb-6">
              Lorem ipsum dolor sit amet consectetur. Sed risus lectus tempus metus. Sed sapien egestas quisque at in eu
              nec. Justo donec aliquet bibendum felis odio laoreet fermentum libero sed. Est pharetra eu at nibh
              adipiscing erat hac. Lorem ipsum dolor sit amet consectetur. Sed risus lectus tempus metus. Sed sapien
              egestas quisque at in eu nec.
            </p>

            <div className="flex justify-center gap-2 mt-8">
              <div className="w-2 h-2 rounded-full bg-[#e17716]"></div>
              <div className="w-2 h-2 rounded-full bg-[#d9d9d9]"></div>
              <div className="w-2 h-2 rounded-full bg-[#d9d9d9]"></div>
              <div className="w-2 h-2 rounded-full bg-[#d9d9d9]"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

