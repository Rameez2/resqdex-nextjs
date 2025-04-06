import { Heart } from "lucide-react";
import Link from "next/link";
import ArrowButton from "../ui/ArrowButton";

const PetCardSkeleton = () => {
    return (
        <>
            {[...Array(5)].map((_, index) => (
            <div key={index} role="status" className="rounded-lg overflow-hidden max-w-md space-y-4 border border-gray-200 divide-y divide-gray-200 rounded-sm shadow-sm animate-pulse dark:divide-gray-700 dark:border-gray-700">
        
            {/* Image Section */}
            <div className="h-48 w-full bg-gray-800 relative"></div>
        
            {/* Content Section (Name, Breed, and Arrow Button) */}
            <div className="p-4 flex justify-between items-center">
                <div>
                <h3 className="rounded-lg bg-gray-500 w-50 h-5 "></h3>
                <p className="rounded-lg bg-gray-500 w-20 h-3 mt-3"></p>
                </div>
                {/* Link to pet details */}
                <div className="rounded-full bg-gray-500 w-10 h-10"></div>
            </div>
            </div>
            ))}
        </>
    );
}

export default PetCardSkeleton;
