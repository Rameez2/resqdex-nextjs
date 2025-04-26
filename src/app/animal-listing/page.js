"use client";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import PetCard from "@/components/ui/PetCard";
import PetFilters from "@/components/pagesComponents/animals-listing/PetFilters";
import { useEffect, useState } from "react";
import { getPetsByFilter } from "@/lib/appwrite/pets";
import PetCardSkeleton from "@/components/skeletons/PetCardSkeleton";
import { useUser } from "@/context/userContext";
import { useSearchParams } from "next/navigation";


export default function Home() {
  const searchParams = useSearchParams();
  // ******* CHECK FILTERS FROM (SEARCH-PARAMS) ******* //
  const [filters, setFilters] = useState(() => ({
    specie: searchParams.get("specie") || "",
    breed: searchParams.get("breed") || "",
    gender: searchParams.get("gender") || "",
    age: searchParams.get("age") ? parseInt(searchParams.get("age")) : "",
    // size: searchParams.get("size") || "",
    // shelter: searchParams.get("location") || "",
  }));
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const limit = 6; // pets per page

  const {user} = useUser();

  const fetchPets = async (filters = {}, page = 0) => {
    try {
      setLoading(true);
      const offset = page * limit;
      const petsResponse = await getPetsByFilter(limit, offset, filters);
      const filteredPets = petsResponse.filter(pet => pet.post_by !== "Adopter");
      setPets(filteredPets);
    } catch (error) {
      console.log("Error while fetching pets", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPets(filters, currentPage);
  }, [filters, currentPage]);

  const updateFilter = (field, value) => {
    setCurrentPage(0); // Reset page on new filter
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (pets.length === limit) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#fbf5f0]">
      <main className="w-full pl-4 py-8 flex flex-col md:flex-row gap-8 ">
        {/* Pet Filters */}
        <PetFilters filters={filters} updateFilter={updateFilter} />
        <div className="w-full md:w-3/4 flex flex-col">
          {/* Sort */}
          <div className="mb-8 mr-8 flex justify-between">
            <div>
              <p className="text-primary font-medium mb-2">Sort By</p>
              <div className="relative max-w-[250px]">
                <select className="w-full bg-white border border-gray-200 p-3 rounded-md appearance-none pr-10">
                  <option>Nearest</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-primary h-5 w-5" />
              </div>

            </div>

          </div>

          {/* Pet Cards */}
          <div className="flex flex-wrap gap-6 ">
            {loading ? (
              <PetCardSkeleton />
            ) : error ? (
              <h1>Error: {error}</h1>
            ) : pets.length ? (
              pets.map((pet, index) => (
                <PetCard
                  key={index}
                  petName={pet.name}
                  breedName={pet.breed}
                  petId={pet.$id}
                  imageId={pet.main_image}
                  user={user}
                  fav={user?.favorite?.includes(pet.$id)}
                />
              ))
            ) : (
              <h1>No pets Available at the moment!</h1>
            )}
          </div>
          {/* Pagination */}
          {!loading && (
            <div className="flex justify-center mt-10 gap-4 mt-auto pt-10">
              <button
                onClick={handlePrev}
                disabled={currentPage === 0}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={18} />
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={pets.length < limit}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>

      </main>
    </div>
  );
}
