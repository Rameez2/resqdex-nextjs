"use client";
import { useUser } from '@/context/userContext';
import { storage } from '@/lib/appwrite/appwrite';
import React, { useEffect, useState } from 'react';
import { getFavoritePets } from '@/lib/appwrite/favorites';
import PetCard from '@/components/ui/PetCard'; // <- import your PetCard

const Page = () => {
    const { user } = useUser();
    const [favPets, setFavPets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.favorite) return;

        (async () => {
            try {
                const petsResponse = await getFavoritePets(user.favorite);
                setFavPets(petsResponse);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        })();
    }, [user]);

    const handleRemove = (petId) => {
        console.log("Removing pet from favorites:", petId);
        setFavPets(prev => prev.filter(pet => pet.$id !== petId));
        // Backend remove can be called here too
    };

    return (
        <div className="min-h-screen bg-[#f9fafb] py-10 px-6">
            <h1 className="text-4xl font-bold text-center text-primary mb-10">Favorite Pets</h1>

            {loading ? (
                <div className="flex justify-center items-center h-40">
                    <p className="text-gray-500 text-lg">Loading favorite pets...</p>
                </div>
            ) : favPets.length > 0 ? (
                <div className="flex flex-wrap gap-6 justify-center">
                    {favPets.map((pet) => (
                        <div key={pet.$id} className="relative">
                            {/* Pet Card */}
                            <PetCard
                                petName={pet.name}
                                breedName={pet.breed}
                                petId={pet.$id}
                                imageId={pet.main_image}
                                user={user}
                                fav={true} // pass true if you want heart icon colored
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex justify-center items-center h-40">
                    <p className="text-gray-500 text-lg">No favorite pets found.</p>
                </div>
            )}
        </div>
    );
};

export default Page;
