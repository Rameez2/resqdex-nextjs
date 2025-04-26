import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import ArrowButton from "./ArrowButton";
import { storage } from "@/lib/appwrite/appwrite";
import { useState, useEffect } from "react";
import { addToFavorite } from "@/lib/appwrite/favorites";

const PetCard = ({ petName, breedName, petId, imageId ,fav ,user}) => {
  const [isFavorite, setIsFavorite] = useState(fav);

  useEffect(() => {
    setIsFavorite(fav);
  }, [fav]); // if fav changes outside, keep it updated
  
  const handleFavoriteClick = () => {
      setIsFavorite(!isFavorite); // instantly update UI
      addToFavorite(user.$id, petId); // async backend update
  };

  return (
    <div
      className="bg-white rounded-lg overflow-hidden relative w-[280px] h-[280px] flex-shrink-0 hover:scale-105 transition-transform duration-300 ease-in-out group"
      style={{
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      }}
    >
      {/* Heart button */}
      {user?.role === "Adopter" && 
        <button
          className="absolute top-4 right-4 z-10 cursor-pointer transition-colors"
          aria-label="Add to favorites"
          onClick={handleFavoriteClick}
        >
       { isFavorite ? 
          <Heart className="w-7 h-7 text-red-500" fill="red" /> :
          <Heart className="h-7 w-7" />}
        </button>
      }

      {/* Image */}
      <div className="h-48 relative">
        <img
          src={storage.getFileView("6799fb94000edc47b27d", imageId)}
          alt={`Image of ${petName}`}
          className="w-full h-[183px] object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold">{petName}</h3>
          <p className="text-gray-600">{breedName}</p>
        </div>

        <Link
          href={`/pet/${petId}`}
          className="transform transition-transform duration-300 group-hover:rotate-[40deg]"
        >
          <ArrowButton />
        </Link>
      </div>
    </div>
  );
};

export default PetCard;
