import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import ArrowButton from "../atoms/ArrowButton";
import { storage } from "@/lib/appwrite/appwrite";

const PetCard = ({ petName, breedName, petId, imageId }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-100 relative w-[280px] h-[280px] flex-shrink-0">
      {/* Heart button for "favorite" */}
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors z-10 pointer-cursor"
        aria-label="Add to favorites"
      >
        <Heart className="h-7 w-7" />
      </button>

      {/* Image Section */}
      <div className="h-48 relative">
        <img
          src={storage.getFileView('6799fb94000edc47b27d', imageId)}
          alt={`Image of ${petName}`}
          className="w-full h-[183px] object-cover"
        />
      </div>

      {/* Content Section (Name, Breed, and Arrow Button) */}
      <div className="p-4 flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold">{petName}</h3>
          <p className="text-gray-600">{breedName}</p>
        </div>

        {/* Link to pet details */}
        <Link
          href={`/pet/${petId}`}
          className="transform transition-transform duration-300 hover:rotate-[40deg] hover:scale-110"
        >
          <ArrowButton />
        </Link>
      </div>
    </div>

  );
}

export default PetCard;
