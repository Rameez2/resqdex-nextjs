"use client"

import { useEffect, useRef, useState } from "react"
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
  const [petDetails, setPetDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const carouselRef = useRef(null); // Ref for scrolling

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        setLoading(true);
        const data = await getPetById(petId);
        console.log('got pet details', data);

        setPetDetails(data);
        setImages([data.main_image, ...data.images]);
      } catch (err) {
        setError('Failed to fetch pet details.');
      } finally {
        setLoading(false);
      }
    };

    fetchPetDetails();
  }, [petId]);

  useEffect(() => {
    const selectedImg = carouselRef.current?.children[currentImageIndex];
    if (selectedImg) {
      selectedImg.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [currentImageIndex]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

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
        {/* Image Carousel */}
        <div className="relative overflow-x-auto py-4 flex justify-center">
          <div
            ref={carouselRef}
            className="flex gap-4 snap-x snap-mandatory justify-start items-center overflow-x-auto" style={{ scrollbarWidth: 'none' }}
          >
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

            <div className="relative bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
              {/* Share button in top-right */}
              <Share
                className="absolute top-4 right-4 h-5 w-5 text-[#3f3f3f] cursor-pointer hover:text-primary transition"
                aria-label="Share"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href)
                    .then(() => {
                      setShowToast(true);
                      setTimeout(() => setShowToast(false), 3000);
                    })
                    .catch(() => {
                      alert("Failed to copy URL");
                    });
                }}
              />


              {/* Title */}
              <h2 className="text-primary text-3xl font-bold text-center mb-8">The Basics</h2>

              {/* Grid layout */}
              <div className="grid grid-cols-2 gap-y-6 gap-x-16 mb-10">
                <div className="flex justify-between text-base text-gray-700">
                  <span className="font-semibold">Breed</span>
                  <span>{petDetails.breed}</span>
                </div>
                <div className="flex justify-between text-base text-gray-700">
                  <span className="font-semibold">Pet ID</span>
                  <span>{petDetails.$id}</span>
                </div>

                <div className="flex justify-between text-base text-gray-700">
                  <span className="font-semibold">Color</span>
                  <span>{petDetails.color}</span>
                </div>
                <div className="flex justify-between text-base text-gray-700">
                  <span className="font-semibold">Hair Length</span>
                  <span>{petDetails.hair_length}</span>
                </div>

                <div className="flex justify-between text-base text-gray-700">
                  <span className="font-semibold">Age</span>
                  <span>{petDetails.age}</span>
                </div>
                <div className="flex justify-between text-base text-gray-700">
                  <span className="font-semibold">Sex</span>
                  <span>{petDetails.gender}</span>
                </div>
              </div>

              <hr className="border-t border-gray-300 mb-8" />

              {/* Health Info */}
              <div>
                <h2 className="text-primary text-2xl font-semibold mb-6">Health Info</h2>
                <ul className="space-y-4 text-base text-gray-800">
                  {petDetails?.health_info?.map((item, index) => (
                    <li key={index} className="flex items-start leading-relaxed">
                      <span className="text-xl mr-3 text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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

                  <Share
                    className="h-5 w-5 text-[#3f3f3f] cursor-pointer hover:text-primary"
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href)
                        .then(() => {
                          setShowToast(true);
                          setTimeout(() => setShowToast(false), 3000); // Hide after 3 sec
                        })
                        .catch(() => {
                          alert("Failed to copy URL"); // fallback
                        });
                    }}
                  />
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
                <div className="flex justify-center">
                  <span>Adoption Fee ${petDetails.adoption_fees}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="space-y-3">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white" onClick={() => startInquiry(petDetails.organization_id)}>Ask about me!</Button>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-[#fff5ef]">
                  FAQ
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
                <h1 className="text-primary text-2xl font-[20px] mb-2">Personality and Traits</h1>

                <div className="space-y-1">
                  {/* Temperament */}
                  <div>
                    <h2 className="text-[#000000] text-sm font-medium">
                      Temperament{" "}
                      {/* <span className="text-[#7d7d7d] font-[10px] text-base">(e.g., playful, calm, friendly, shy)</span> */}
                    </h2>
                    <p className="text-primary text-sm mt-1">{petDetails.personality_and_traits[0]}</p>
                  </div>

                  {/* Activity level */}
                  <div>
                    <h2 className="text-[#000000] text-sm font-medium">
                      Activity level{" "}
                      {/* <span className="text-[#7d7d7d] font-normal text-base">(e.g., energetic, moderate, low-energy)</span> */}
                    </h2>
                    <p className="text-primary text-sm mt-1">{petDetails.personality_and_traits[1]}</p>
                  </div>

                  {/* Special skills */}
                  <div>
                    <h2 className="text-[#000000] text-sm font-medium">
                      Special skills or quirks{" "}
                      {/* <span className="text-[#7d7d7d] font-normal text-base">(e.g., knows basic commands)</span> */}
                    </h2>
                    <p className="text-primary text-sm mt-1">{petDetails.personality_and_traits[2]}</p>
                  </div>

                  {/* Behavior */}
                  <div>
                    <h2 className="text-[#000000] text-sm font-medium">
                      Behavior
                      <span className="text-[#7d7d7d] font-normal text-base"> (around other pets and children)</span>
                    </h2>
                    <h3 className="text-[#000000] text-sm font-bold">GOOD IN HOME WITH</h3>
                    <p className="text-primary text-sm mt-1">{petDetails.good_with}</p>

                    <h3 className="text-[#000000] text-sm font-bold">NOT GOOD IN HOME WITH</h3>
                    <p className="text-primary text-sm mt-1">{petDetails.not_good_with}</p>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* Rescue Story */}
        <div className="bg-[#ffffff] rounded-lg p-6">
          <h2 className="text-2xl text-primary font-bold mb-6">My Story</h2>
          <p className="text-[#55514f]">{petDetails.rescue_story}</p>
        </div>
        {/* My Dream */}
        <div className="min-h-screen bg-white p-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="md:col-span-2 space-y-6">
              <h1 className="text-3xl font-bold font-sans text-primary">My Dream</h1>
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
        <MorePets orgId={petDetails.owner.$id} orgName={petDetails.owner.name} specieName={petDetails.specie} />
      </div>

      {showToast && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-sm px-4 py-2 rounded shadow-md transition-opacity duration-300">
          URL copied to clipboard!
        </div>
      )}
    </div>
  );
}
