import Image from "next/image"
import Link from "next/link"
import { Heart, ArrowRight } from "lucide-react"

const PetCard = () => {
    return (
        <div className="bg-white rounded-lg overflow-hidden border border-gray-100 relative min-w-[16rem] max-w-[20rem] flex-shrink-0">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors">
          <Heart className="h-6 w-6" />
        </button>
        <div className="h-48 relative">
          <Image src="/dog main image.jpeg" alt="Cat named Max" fill className="object-cover" />
        </div>
        <div className="p-4 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold">Max</h3>
            <p className="text-gray-600">Persian</p>
          </div>
          <button className="h-10 w-10 rounded-full border border-[#e17716] flex items-center justify-center text-[#e17716]">
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    );
}

export default PetCard;
