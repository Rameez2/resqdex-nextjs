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
import MorePets from "@/components/pagesComponents/pet-details/MorePets";

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


  if (loading) return <PageLoader />;
  if (error) return <h1>NO PET FOUND</h1>;

  return (
    <div className="min-h-screen bg-[#fbf5f0] p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Top - Image Section */}


        <div className="relative overflow-x-auto py-4">
          <div className="flex gap-4 snap-x snap-mandatory justify-center items-center">
            {images.map((img, index) => (
              <div
                key={index}
                className={`snap-center transition-all duration-300 shrink-0 cursor-pointer`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img
                  src={storage.getFileView('6799fb94000edc47b27d', img)}
                  alt={`Pet image ${index + 1}`}
                  className={`w-[200px] h-[200px] object-cover rounded-lg 
            transition-all duration-300 
            ${index === currentImageIndex ? 'opacity-100 scale-110' : 'opacity-40 scale-95'}`}
                />
              </div>
            ))}
          </div>

          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5 text-[#3f3f3f]" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 z-10"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5 text-[#3f3f3f]" />
          </button>
        </div>


        {/* 2x2 Layout */}
        <div className="flex flex-col md:flex-row gap-6">

          {/* LEFT COLUMN */}
          <div className="md:w-[65%] space-y-6">

            {/* Furry Facts */}
            <div className="bg-[#ffffff] p-6 md:p-8 lg:p-10 rounded-lg min-h-[340px]">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-[#000000] text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Furry Facts & Fluffy Dreams of {petDetails.name}
                </h1>
                <div className="flex flex-col md:flex-row gap-4 md:gap-12 text-[#000000] text-lg md:text-xl">
                  <div className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>
                      Days in Care : <span className="font-semibold">{petDetails.days_in_care}</span>
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>
                      Days on ResQDex: <span className="font-semibold">{Math.floor((Date.now() - new Date(petDetails.$createdAt)) / (1000 * 60 * 60 * 24)) || 1}</span>

                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* General Info */}
            <div className="bg-[#ffffff] p-6 md:p-8 lg:p-10 rounded-lg min-h-[340px]">
              <div className="space-y-8">
                {/* General Info Section */}
                <div>
                  <h2 className="text-[#55514f] text-3xl font-medium mb-8">General Info</h2>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <h3 className="text-[#e17716] text-5xl font-bold mb-6">Name</h3>
                      <p className="text-[#000000] text-4xl font-medium">{petDetails.name}</p>
                    </div>

                    <div>
                      <h3 className="text-[#e17716] text-5xl font-bold mb-6">Gender</h3>
                      <p className="text-[#000000] text-4xl font-medium">{petDetails.gender}</p>
                    </div>

                    <div>
                      <h3 className="text-[#e17716] text-5xl font-bold mb-6">Age</h3>
                      <p className="text-[#000000] text-4xl font-medium">{petDetails.age} Months</p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <hr className="border-[#c6c6c6]" />

                {/* Health Info Section */}
                <div>
                  <h2 className="text-[#55514f] text-3xl font-medium mb-8">Health Info</h2>

                  <ul className="space-y-4 text-[#000000] text-2xl">

                    {petDetails && petDetails.health_info.map((item,index) =>
                      <li key={index} className="flex items-start">
                        <span className="text-3xl mr-4">•</span>
                        <span>{item}</span>
                      </li>)}
                  </ul>
                </div>
              </div>
            </div>



          </div>


          {/* RIGHT COLUMN */}
          <div className="md:w-[35%] space-y-6">

            {/* Right section - Info and Traits (moved here from original right) */}
            <div className="bg-[#ffffff] rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">

                <div className="min-w-20 min-h-20 rounded-full overflow-hidden">
                  <img
                    src={storage.getFileView('6799fb94000edc47b27d', petDetails.main_image)}
                    alt={petDetails.name}
                    width={80} height={80}
                    style={{ width: "80px", height: "80px" }}
                    className="rounded-full w-20 h-20 border-2 border-white shadow-sm object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-medium">Considering {petDetails.name} for adoption?</h3>
                </div>
                <button className="ml-auto">
                  <Share className="h-5 w-5 text-[#3f3f3f] cursor-pointer hover:text-primary" />
                </button>
              </div>

              {/* Contact and location */}
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

              {/* Buttons */}
              <div className="space-y-3">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white" onClick={() => startInquiry(petDetails.organization_id)}>Start Inquiry</Button>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-[#fff5ef]">
                  Sponsor
                </Button>
              </div>
            </div>

            {/* Personality and Traits */}
            <div className="max-w-md mx-auto p-6 rounded-3xl relative bg-[#ffffff] h-[390px]">
              {/* Corner dots */}
              <div className="absolute top-4 left-4 w-4 h-4 rounded-full bg-[#7d7d7d]"></div>
              <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-[#7d7d7d]"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 rounded-full bg-[#7d7d7d]"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 rounded-full bg-[#7d7d7d]"></div>

              {/* Content */}
              <div className="py-10 px-4">
                <h1 className="text-[#e17716] text-2xl font-[20px] mb-2">Personality and Traits</h1>

                <div className="space-y-1">
                  {/* Temperament */}
                  <div>
                    <h2 className="text-[#000000] text-sm font-medium">
                      Temperament{" "}
                      {/* <span className="text-[#7d7d7d] font-[10px] text-base">(e.g., playful, calm, friendly, shy)</span> */}
                    </h2>
                    <p className="text-[#e17716] text-sm mt-1">{petDetails.personality_and_traits[0]}</p>
                  </div>

                  {/* Activity level */}
                  <div>
                    <h2 className="text-[#000000] text-sm font-medium">
                      Activity level{" "}
                      {/* <span className="text-[#7d7d7d] font-normal text-base">(e.g., energetic, moderate, low-energy)</span> */}
                    </h2>
                    <p className="text-[#e17716] text-sm mt-1">{petDetails.personality_and_traits[1]}</p>
                  </div>

                  {/* Special skills */}
                  <div>
                    <h2 className="text-[#000000] text-sm font-medium">
                      Special skills or quirks{" "}
                      {/* <span className="text-[#7d7d7d] font-normal text-base">(e.g., knows basic commands)</span> */}
                    </h2>
                    <p className="text-[#e17716] text-sm mt-1">{petDetails.personality_and_traits[2]}</p>
                  </div>

                  {/* Behavior */}
                  <div>
                    <h2 className="text-[#000000] text-sm font-medium">
                      Behavior
                       {/* <span className="text-[#7d7d7d] font-normal text-base">(around other pets and children)</span> */}
                    </h2>
                    <p className="text-[#e17716] text-sm mt-1">{petDetails.personality_and_traits[3]}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* Rescue Story */}
        <div className="bg-[#ffffff] rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Rescue Story</h2>
          <p className="text-[#55514f]">{petDetails.rescue_story}</p>
        </div>
        {/* My Dream */}
        <div className="min-h-screen bg-white p-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="md:col-span-2 space-y-6">
              <h1 className="text-3xl font-bold font-sans">My Dream</h1>
              <p>
                {petDetails.my_dream}
              </p>
            </div>

            {/* Right Content - Map */}
            <div>
              <div className="bg-orange-100 p-4 rounded-t-md shadow-md">
                <h2 className="text-sm font-semibold">Organization Location</h2>
                <p className="text-xs text-gray-600">
                  Browse through organization location on map
                </p>
              </div>
              <iframe
                title="Organization Map"
                className="w-full h-[500px] rounded-b-md shadow-md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.801514648506!2d67.12473077536062!3d24.841466777926664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e8cd7801cf1%3A0x8a4f7151e42c0bde!2sGutter%20Baghicha!5e0!3m2!1sen!2s!4v1683521019216!5m2!1sen!2s"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <MorePets orgId={petDetails.organization_id} />
      </div>
    </div>

  )
}

