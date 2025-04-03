import { adminDeletePetById } from "@/lib/appwrite/admin";
import { storage } from "@/lib/appwrite/appwrite";
import { getPetsByFilter } from "@/lib/appwrite/pets";
import React, { useEffect, useState } from "react";


const PetsManagement = () => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [deletingPetId, setDeletingPetId] = useState(null); // Track deleting pet
    const [searchTerm, setSearchTerm] = useState(""); // Search input state

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const petsResponse = await getPetsByFilter();
                const filteredPets = petsResponse.filter(pet => pet.post_by !== "Adopter");
                setPets(filteredPets);
            } catch (err) {
                setError("Failed to fetch pets.");
            } finally {
                setLoading(false);
            }
        };

        fetchPets();
    }, []);

    async function deletePet(petId) {
        setDeletingPetId(petId);
        try {
            await adminDeletePetById(petId);
            setPets((prevPets) => prevPets.filter((pet) => pet.$id !== petId));
        } catch (error) {
            console.log("Pet delete Error:", error);
            alert("Failed to delete pet.");
        } finally {
            setDeletingPetId(null);
        }
    }

    // Filter pets based on search term (name or ID)
    const filteredPets = pets.filter(
        (pet) =>
            pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            pet.$id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <p className="text-center text-xl">Loading pets...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="p-6 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">Pets Management</h2>

            {/* Search Bar */}
            <input
                type="text"
                name="search"
                placeholder="Search by name or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-3 w-3/4 max-w-md mb-6 border border-gray-300 rounded"
            />

            {/* Pets List */}
            {filteredPets.length > 0 ? (
                <ul className="list-none p-0 max-w-2xl mx-auto">
                    {filteredPets.map((pet, index) => (
                        <li
                            key={pet.$id}
                            className={`flex justify-between items-center p-4 border-b ${
                                index % 2 === 0 ? "bg-gray-100" : "bg-white"
                            }`}
                        >
                            <img
                                src={storage.getFileView('6799fb94000edc47b27d', pet.main_image)}
                                className="w-24 h-16 object-cover"
                                alt={pet.name}
                            />
                            <span>{index + 1}. {pet.name} (ID: {pet.$id})</span>
                            {/* Delete Button */}
                            <button
                                onClick={() => deletePet(pet.$id)}
                                disabled={deletingPetId === pet.$id}
                                className={`px-4 py-2 rounded text-white font-semibold ${
                                    deletingPetId === pet.$id ? "bg-gray-400" : "bg-red-500"
                                }`}
                            >
                                {deletingPetId === pet.$id ? "Deleting..." : "Delete"}
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500 mt-4">No pets found.</p>
            )}
        </div>
    );
};

export default PetsManagement;