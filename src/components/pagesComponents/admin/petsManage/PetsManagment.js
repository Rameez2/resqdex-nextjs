import { adminDeletePetById } from "@/lib/appwrite/admin"
import { storage } from "@/lib/appwrite/appwrite"
import { getPetsByFilter } from "@/lib/appwrite/pets"
import React, { useEffect, useState } from "react"
import { Search, Trash2 } from "lucide-react"
import Toast from "@/components/ui/Toast"

const PetsManagement = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletingPetId, setDeletingPetId] = useState(null)
  const [searchTerm, setSearchTerm] = useState("");
  const [toast, setToast] = useState(null);


  useEffect(() => {
    const fetchPets = async () => {
      try {
        const petsResponse = await getPetsByFilter()
        const filteredPets = petsResponse.filter((pet) => pet.post_by !== "Adopter")
        setPets(filteredPets)
      } catch (err) {
        setError("Failed to fetch pets.")
      } finally {
        setLoading(false)
      }
    }

    fetchPets()
  }, [])

  async function deletePet(petId) {
    setDeletingPetId(petId)
    try {
      setToast(null);
      await adminDeletePetById(petId)
      setToast({ message: `Pet delete success`, type: "success" });

      setPets((prevPets) => prevPets.filter((pet) => pet.$id !== petId));
    } catch (error) {
      setToast({ message: error.message, type: "error" });
      console.log("Pet delete Error:", error)
      alert("Failed to delete pet.")
    } finally {
      setDeletingPetId(null)
    }
  }

  const filteredPets = pets.filter(
    (pet) =>
      pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pet.$id.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (loading) return <p className="text-center text-xl text-[#0a1330]">Loading pets...</p>
  if (error) return <p className="text-center text-red-500">{error}</p>

  return (
    <div className="min-h-screen bg-[#fbf5f0] p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-[#0a1330]">Pets Management</h2>
          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-4 w-4" />
            <input
              type="text"
              placeholder="Search by name or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-[#0b1739] text-white pl-10 pr-4 py-2 rounded w-[250px] focus:outline-none"
            />
          </div>
        </div>

        {/* Pets List */}
        <div className="bg-[#0a1330] rounded-lg overflow-hidden">
          <div className="grid grid-cols-[1fr_2fr_1fr_auto] gap-6 px-6 py-4 border-b border-[#343b4f] text-[#aeb9e1] font-medium">
            <span>Image</span>
            <span>Pet Info</span>
            {/* <span>Posted By</span> */}
            <span>Action</span>
          </div>

          {filteredPets.length > 0 ? (
            filteredPets.map((pet, index) => (
              <div
                key={pet.$id}
                className="grid grid-cols-[1fr_2fr_1fr_auto] items-center gap-6 px-6 py-4 border-b border-[#343b4f] text-white"
              >
                <img
                  src={storage.getFileView("6799fb94000edc47b27d", pet.main_image)}
                  alt={pet.name}
                  className="w-24 h-16 object-cover rounded"
                />
                <div>
                  <div className="font-semibold">{pet.name}</div>
                  <div className="text-sm text-[#aeb9e1]">ID: {pet.$id}</div>
                </div>
                {/* <div>{pet.post_by}</div> */}
                <button
                  onClick={() => deletePet(pet.$id)}
                  disabled={deletingPetId === pet.$id}
                  className={`flex items-center w-35 cursor-pointer gap-2 px-4 py-2 rounded text-white font-semibold transition ${deletingPetId === pet.$id
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-red-500 hover:bg-red-600"
                    }`}
                >
                  <Trash2 className="h-4 w-4" />
                  {deletingPetId === pet.$id ? "Deleting..." : "Delete"}
                </button>
              </div>
            ))
          ) : (
            <div className="px-6 py-4 text-center text-[#aeb9e1]">No pets found.</div>
          )}
        </div>
      </div>
      {toast && <Toast content={toast.message} type={toast.type} />}

    </div>
  )
}

export default PetsManagement
