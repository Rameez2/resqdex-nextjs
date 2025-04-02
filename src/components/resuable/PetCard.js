import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import ArrowButton from "../atoms/ArrowButton";
import { storage } from "@/lib/appwrite/appwrite";

const PetCard = ({petName,breedName,petId,imageId}) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden border border-gray-100 relative min-w-[16rem] max-w-[20rem] flex-shrink-0">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors">
          <Heart className="h-6 w-6" />
        </button>
        <div className="h-48 relative">
          {/* <Image src={storage.getFileView('6799fb94000edc47b27d', imageId)} alt="Cat named Max" fill className="object-cover" /> */}
          <Image src="/dog main image.jpeg" alt="Cat named Max" fill className="object-cover" />
          
        </div>
        <div className="p-4 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold">{petName}</h3>
            <p className="text-gray-600">{breedName}</p>
          </div>
          <Link href={`/pet/${petId}`}>
            <ArrowButton/>
          </Link>
        </div>
      </div>
    );
}

export default PetCard;
