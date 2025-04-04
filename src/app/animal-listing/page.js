"use client"
import { ChevronDown } from "lucide-react"
import PetCard from "@/components/resuable/PetCard"
import PetFilters from "@/components/pagesComponents/animals-listing/PetFilters"
import { useEffect, useState } from "react"
import { getPetsByFilter } from "@/lib/appwrite/pets"

export default function Home() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pets, setPets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const petsResponse = await getPetsByFilter(10, 0); // limit,offset
        const filteredPets = petsResponse.filter(pet => pet.post_by !== "Adopter");
        setPets(filteredPets);
      } catch (error) {
        console.log("Error while fetching pets", error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="min-h-screen bg-[#fbf5f0]">
      {/* Main Content */}
      <main className="w-full pl-4 py-8 flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <PetFilters />

        {/* Pet Listings */}
        <div className="w-full md:w-3/4">
          <h1 className="text-4xl font-bold mb-8">Listing Of Animal Nearby</h1>

          {/* Sort Options */}
          <div className="mb-8">
            <p className="text-[#e17716] font-medium mb-2">Sort By</p>
            <div className="relative max-w-[250px]">
              <select className="w-full bg-white border border-gray-200 p-3 rounded-md appearance-none pr-10">
                <option>Nearest</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#e17716] h-5 w-5" />
            </div>
          </div>

          {/* Pet Cards Grid */}
          <div className="flex flex-wrap gap-6">

            {loading ? <h1>Loading</h1>
              : error ? <h1>Error : {error}</h1> :
                (
                  <>
                    {pets ? pets.map((pet, index) => (
                      <PetCard
                        key={index}
                        petName={pet.name}
                        breedName={pet.breed}
                        petId={pet.$id}
                        imageId={pet.main_image}
                      />
                    )) :
                      <h1>No pets Available at the moment!</h1>
                    }
                  </>)
            }
          </div>
        </div>
      </main>
    </div>
  )
}

