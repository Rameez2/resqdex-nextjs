"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Share, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { getPetById } from "@/lib/appwrite/pets";

export default function PetAdoption() {
  const { petId } = useParams();
  
  const [petDetails, setPetDetails] = useState(null); // State to store pet details
  const [loading, setLoading] = useState(true); // State to show loading state
  const [error, setError] = useState(null); // State to handle errors

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = [ // height 300,widht 400
    "/petdetails-dog.jpeg",
    "/about-dog.jpeg",
    "/about-kitten.jpeg",
  ]

  useEffect(() => {
    // Fetch the pet details using the ID
    const fetchPetDetails = async () => {
      try {
        setLoading(true);
        const data = await getPetById(petId); // Replace with your API call
        setPetDetails(data); // Save the data to state
      } catch (err) {
        setError('Failed to fetch pet details.'); // Handle error
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchPetDetails();
  }, [petId]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <h1>NO PET FOUND</h1>;

  return (
    <div className="min-h-screen bg-[#fbf5f0] p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left section - Image carousel */}
          <div className="md:col-span-2">
            <div className="relative rounded-lg overflow-hidden mb-4">
              <img
                src={images[currentImageIndex] || "/placeholder.svg"}
                alt="Munchy the dog"
                className="w-full h-[300px] object-cover rounded-lg"
              />
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5 text-[#3f3f3f]" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5 text-[#3f3f3f]" />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center gap-2 mb-6">
              <div className="bg-[#ffffff] p-2 rounded-lg">
                <div className="flex gap-2">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`${currentImageIndex === index ? "ring-2 ring-[#ffba7a]" : ""}`}
                    >
                      <img
                        src={img || "/placeholder.svg"}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-20 h-14 object-cover rounded"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Introduction section */}
            <div className="bg-[#ffffff] rounded-lg p-6 mb-6 relative">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-[#e17716] font-medium mb-1">Introduction</h3>
                  <h2 className="text-3xl font-bold mb-4">{petDetails.name}</h2>
                </div>
                <button className="p-2 rounded-full bg-[#fff5ef]">
                  <Share className="h-5 w-5 text-[#3f3f3f]" />
                </button>
              </div>

              <p className="mb-4">
                {/* <span className="text-[#e17716] font-medium">Munchy</span> is a friendly 2-year-old{" "}
                <span className="font-medium">Husky</span> with striking blue eyes and a{" "}
                <span className="font-medium">playful personality</span>. He loves outdoor adventures and gets along
                well with kids and other pets. Munchy is ready to bring joy to his forever home! */}
                {petDetails.bio}
              </p>

              {/* General Info */}
              <div className="mt-6">
                <h3 className="text-[#55514f] font-medium mb-4">General Info</h3>
                <div className="grid grid-cols-3 gap-4 border-b border-[#eeeeee] pb-6">
                  <div>
                    <h4 className="text-[#e17716] text-xl font-medium">Name</h4>
                    <p className="font-medium">Munchy</p>
                  </div>
                  <div>
                    <h4 className="text-[#e17716] text-xl font-medium">Gender</h4>
                    <p className="font-medium">Male</p>
                  </div>
                  <div>
                    <h4 className="text-[#e17716] text-xl font-medium">Age</h4>
                    <p className="font-medium">6 Months</p>
                  </div>
                </div>
              </div>

              {/* Health Info */}
              <div className="mt-6">
                <h3 className="text-[#55514f] font-medium mb-4">Health Info</h3>
                <ul className="flex gap-8">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3f3f3f]"></div>
                    <span>Fully Vaccinated</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3f3f3f]"></div>
                    <span>Neutered</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Rescue Story */}
            <div className="bg-[#ffffff] rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Rescue Story</h2>
              <p className="mb-4 text-[#55514f]">
              {petDetails.rescue_story}
              </p>
            </div>
          </div>

          {/* Right section - Info and traits */}
          <div className="md:col-span-1">
            <div className="bg-[#ffffff] rounded-lg p-6 mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img
                    src="/petdetails-dog.jpeg"
                    alt="Munchy thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">Considering Munchy for adoption?</h3>
                </div>
                <button className="ml-auto">
                  <Share className="h-5 w-5 text-[#3f3f3f]" />
                </button>
              </div>

              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-[#3f3f3f]" />
                  <div>
                    <p className="text-sm text-[#7d7d7d]">Location</p>
                    <p>V{petDetails.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-[#3f3f3f]" />
                  <div>
                    <p className="text-sm text-[#7d7d7d]">Contact</p>
                    <p>{petDetails.contact}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-[#e17716] hover:bg-[#e17716]/90 text-white">Start Inquiry</Button>
                <Button variant="outline" className="w-full border-[#e17716] text-[#e17716] hover:bg-[#fff5ef]">
                  Sponsor
                </Button>
              </div>
            </div>

            {/* Personality and Traits */}
            <div className="bg-[#ffffff] rounded-lg p-6 relative">
              <div className="absolute -left-1 top-1/4 w-2 h-2 rounded-full bg-[#d9d9d9]"></div>
              <div className="absolute -right-1 top-1/4 w-2 h-2 rounded-full bg-[#d9d9d9]"></div>
              <div className="absolute -left-1 bottom-1/4 w-2 h-2 rounded-full bg-[#d9d9d9]"></div>
              <div className="absolute -right-1 bottom-1/4 w-2 h-2 rounded-full bg-[#d9d9d9]"></div>

              <h2 className="text-xl font-medium text-[#e17716] mb-6">Personality and Traits</h2>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <p className="text-sm">Temperament</p>
                    <p className="text-xs text-[#7d7d7d]">(e.g., playful, calm, friendly, shy)</p>
                  </div>
                  <div className="h-2 bg-[#eeeeee] rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-[#97df75] rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <p className="text-sm">Activity level</p>
                    <p className="text-xs text-[#7d7d7d]">(e.g., energetic, moderate, low-energy)</p>
                  </div>
                  <div className="h-2 bg-[#eeeeee] rounded-full overflow-hidden">
                    <div className="h-full w-[70%] bg-[#ef8d56] rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <p className="text-sm">Special skills or quirks</p>
                    <p className="text-xs text-[#7d7d7d]">(e.g., knows basic commands)</p>
                  </div>
                  <div className="h-2 bg-[#eeeeee] rounded-full overflow-hidden">
                    <div className="h-full w-[60%] bg-[#97df75] rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <p className="text-sm">Behavior</p>
                    <p className="text-xs text-[#7d7d7d]">(around other pets and children)</p>
                  </div>
                  <div className="h-2 bg-[#eeeeee] rounded-full overflow-hidden">
                    <div className="h-full w-[90%] bg-[#97df75] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

