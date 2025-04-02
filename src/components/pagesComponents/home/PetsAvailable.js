"use client";
import PetCard from '@/components/resuable/PetCard';
import React, { useEffect, useState, useRef } from 'react';
import ArrowButton from '@/components/atoms/ArrowButton';
import { getPetsByFilter } from '@/lib/appwrite/pets';

const PetsAvailable = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pets, setPets] = useState(null);
    const scrollContainerRef = useRef(null); // Reference to scrollable container

    useEffect(() => {
        (async () => {
            try {
                const petsResponse = await getPetsByFilter();
                const filteredPets = petsResponse.filter(pet => pet.post_by !== "Adopter");
                console.log('got pets', filteredPets);

                setPets(filteredPets);
                setLoading(false);
            } catch (error) {
                console.log('Error while fetching pets', error.message);
                setLoading(false);
                setError(error.message);
            }
        })();
    }, []);

    // Function to scroll left or right
    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300; // Adjust scroll amount as needed
            scrollContainerRef.current.scrollBy({
                left: direction === 'right' ? scrollAmount : -scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div>
            <h2 className="text-center text-[#e17716] text-3xl font-bold mb-10">Pets Available For Adoption</h2>

            <div className="flex justify-end gap-2 pr-5 mb-3">
                <ArrowButton right={false} onClick={() => scroll('left')} />
                <ArrowButton onClick={() => scroll('right')} />
            </div>
            <div ref={scrollContainerRef} className="flex gap-4 overflow-x-auto pb-4 px-4 scrollbar-hide">
                <div className="flex gap-4">
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
        </div>
    );
}

export default PetsAvailable;
