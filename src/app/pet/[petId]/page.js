"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Share, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { getPetById } from "@/lib/appwrite/pets";
import { useRouter } from "next/navigation";
import { getUserById } from "@/lib/appwrite/user";
import { storage } from "@/lib/appwrite/appwrite";
import PageLoader from "@/components/skeletons/PageLoader";

export default function PetAdoption() {
  const { petId } = useParams();
  const router = useRouter();
  const [petDetails, setPetDetails] = useState(null); // State to store pet details
  const [loading, setLoading] = useState(true); // State to show loading state
  const [error, setError] = useState(null); // State to handle errors

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch the pet details using the ID
    const fetchPetDetails = async () => {
      try {
        setLoading(true);
        const data = await getPetById(petId); // Replace with your API call
        setPetDetails(data); // Save the data to state
        setImages([data.main_image, ...data.images]);
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


  async function startInquiry(orgId) {
    try {
      const doc = await getUserById(orgId);

      router.push(`/messages?adopterId=${doc.$id}&name=${doc.name}`);
    } catch (error) {
      console.error('Error starting inquiry:', error);
    }
  }


  if (loading) return <PageLoader/>;
  if (error) return <h1>NO PET FOUND</h1>;

  return (
    <div className="min-h-screen bg-[#fbf5f0] p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left section - Image carousel */}
          <div className="md:col-span-2">
            <div className="relative rounded-lg overflow-hidden mb-4">
              <img
                src={storage.getFileView('6799fb94000edc47b27d', images[currentImageIndex])}
                className="w-full h-[300px] object-cover rounded-lg bg-[#ffcb6c]"
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
                        src={storage.getFileView('6799fb94000edc47b27d', images[index])}
                        className="w-20 h-14 object-cover rounded bg-[#ffcb6c]"
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
                  <h3 className="text-primary font-medium mb-1">Introduction</h3>
                  <h2 className="text-3xl font-bold mb-4">{petDetails.name}</h2>
                </div>
                <button className="p-2 rounded-full bg-[#fff5ef]">
                  <Share className="h-5 w-5 text-[#3f3f3f]" />
                </button>
              </div>

              <p className="mb-4">
                {petDetails.bio}
              </p>

              {/* General Info */}
              <div className="mt-6">
                <h3 className="text-[#55514f] font-medium mb-4">General Info</h3>
                <div className="grid grid-cols-3 gap-4 border-b border-[#eeeeee] pb-6">
                  <div>
                    <h4 className="text-primary text-xl font-medium">Name</h4>
                    <p className="font-medium">{petDetails.name}</p>
                  </div>
                  <div>
                    <h4 className="text-primary text-xl font-medium">Gender</h4>
                    <p className="font-medium">{petDetails.gender}</p>
                  </div>
                  <div>
                    <h4 className="text-primary text-xl font-medium">Age</h4>
                    <p className="font-medium">{petDetails.age}</p>
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
                <div className="min-w-20 min-h-20 rounded-full overflow-hidden">
                  <img
                    src={storage.getFileView('6799fb94000edc47b27d', petDetails.main_image)}
                    alt={petDetails.name}
                    width={80} height={80} className="rounded-full min-w-20 min-h-20 border-2 border-white shadow-sm object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">Considering {petDetails.name} for adoption?</h3>
                </div>
                <button className="ml-auto">
                  <Share className="h-5 w-5 text-[#3f3f3f] cursor-pointer hover:text-primary" />
                </button>
              </div>

              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-[#3f3f3f]" />
                  <div>
                    <p className="text-sm text-[#7d7d7d]">Location</p>
                    <p>{petDetails.location}</p>
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
                <Button className="w-full bg-primary hover:bg-primary/90 text-white" onClick={() => startInquiry(petDetails.organization_id)}>Start Inquiry</Button>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-[#fff5ef]">
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

              <h2 className="text-xl font-medium text-primary mb-6">Personality and Traits</h2>

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

