import PetCardSkeleton from '@/components/skeletons/PetCardSkeleton';
import PetCard from '@/components/ui/PetCard';
import ArrowButton from '@/components/ui/ArrowButton';
import { getMyPets, getPetsByFilter } from '@/lib/appwrite/pets';
import React, { useEffect, useRef, useState } from 'react';
import { useUser } from '@/context/userContext';

const MorePets = ({ orgId }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [similarPets, setSimilarPets] = useState(null);
  const [pets, setPets] = useState(null);

  const {user} = useUser();
  
  const similarRef = useRef(null);
  const exploreRef = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const petsResponse = await getPetsByFilter(7, 0);
        const simPets = await getMyPets(orgId);
        setPets(petsResponse);
        setSimilarPets(simPets);
        setLoading(false);
      } catch (error) {
        console.log('Error while fetching pets', error.message);
        setError(error.message);
        setLoading(false);
      }
    })();
  }, []);

  const scroll = (ref, direction) => {
    if (!ref.current) return;
    const scrollAmount = 300;
    ref.current.scrollBy({ left: direction === 'right' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
  };

  const renderPetCards = (data) =>
    loading ? (
      <PetCardSkeleton />
    ) : error ? (
      <h1>Error: {error}</h1>
    ) : data?.length ? (
      data.map((pet, index) => (
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
      <h1>No pets available at the moment!</h1>
    );

  return (
    <div className="bg-[#ffffff] py-20 px-4">
      {/* Header: Similar Options */}
      <h2 className="text-center text-primary text-5xl font-bold mb-16">
        Similar Option Available Nearby
      </h2>

      <div className="flex justify-end gap-2 pr-5 mb-3">
        <div onClick={() => scroll(similarRef, 'left')}>
          <ArrowButton right={false} />
        </div>
        <div onClick={() => scroll(similarRef, 'right')}>
          <ArrowButton />
        </div>
      </div>

      <div className="w-full overflow-x-auto" ref={similarRef}  style={{scrollbarWidth:'none'}}>
        <div className="flex gap-4 w-max pb-4 pt-4 px-4" >{renderPetCards(similarPets)}</div>
      </div>

      {/* Header: Explore Other Options */}
      <h2 className="text-center text-primary text-5xl font-bold mt-24 mb-16">
        Explore Other Options
      </h2>

      <div className="flex justify-end gap-2 pr-5 mb-3">
        <div onClick={() => scroll(exploreRef, 'left')}>
          <ArrowButton right={false} />
        </div>
        <div onClick={() => scroll(exploreRef, 'right')}>
          <ArrowButton />
        </div>
      </div>

      <div className="w-full overflow-x-auto" ref={exploreRef}  style={{scrollbarWidth:'none'}}>
        <div className="flex gap-4 w-max pb-4 pt-4 px-4" >{renderPetCards(pets)}</div>
      </div>
    </div>
  );
};

export default MorePets;
