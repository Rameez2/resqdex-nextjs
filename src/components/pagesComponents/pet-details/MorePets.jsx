import PetCardSkeleton from '@/components/skeletons/PetCardSkeleton';
import PetCard from '@/components/ui/PetCard';
import { getMyPets, getPetsByFilter } from '@/lib/appwrite/pets';
import React, { useEffect, useRef, useState } from 'react';

const MorePets = ({orgId}) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [similarPets, setSimilarPets] = useState(null);
    const [pets, setPets] = useState(null);
    const scrollContainerRef = useRef(null); // Reference to scrollable container

    useEffect(() => {
        (async () => {
            try {
                const petsResponse = await getPetsByFilter(7, 0); // numberOfPets, offset, filters
                const simPets = await getMyPets(orgId); // organization id of current pet
                setPets(petsResponse);
                setSimilarPets(simPets);
                setLoading(false);
            } catch (error) {
                console.log('Error while fetching pets', error.message);
                setLoading(false);
                setError(error.message);
            }
        })();
    }, []);


    return (
        <div className="bg-[#ffffff] py-20 px-4">
            {/* Header: Similar Option Available Nearby */}
            <h2 id="testimonials-heading" className="text-center text-primary text-5xl font-bold mb-16">
                Similar Option Available Nearby
            </h2>

            {/* Cards */}
            <div className="flex flex-wrap justify-center gap-6">
                <div className="w-full overflow-x-auto">
                    <div className="flex gap-4 w-max">
                        {loading ? (
                            <PetCardSkeleton />
                        ) : error ? (
                            <h1>Error : {error}</h1>
                        ) : pets ? (
                            pets.map((pet, index) => (
                                <PetCard
                                    key={index}
                                    petName={pet.name}
                                    breedName={pet.breed}
                                    petId={pet.$id}
                                    imageId={pet.main_image}
                                />
                            ))
                        ) : (
                            <h1>No pets Available at the moment!</h1>
                        )}
                    </div>
                </div>
            </div>
    

            {/* Header: Explore Other Options */}
            <h2 id="testimonials-heading" className="text-center text-primary text-5xl font-bold mb-16">
                Explore Other Options
            </h2>

            {/* Cards */}
            <div className="flex flex-wrap justify-center gap-6">
                <div className="w-full overflow-x-auto">
                    <div className="flex gap-4 w-max">
                        {loading ? (
                            <PetCardSkeleton />
                        ) : error ? (
                            <h1>Error : {error}</h1>
                        ) : pets ? (
                            pets.map((pet, index) => (
                                <PetCard
                                    key={index}
                                    petName={pet.name}
                                    breedName={pet.breed}
                                    petId={pet.$id}
                                    imageId={pet.main_image}
                                />
                            ))
                        ) : (
                            <h1>No pets Available at the moment!</h1>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MorePets;
