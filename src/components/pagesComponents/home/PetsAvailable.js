import PetCard from '@/components/resuable/PetCard';
import React from 'react';
import { Heart, ArrowRight } from "lucide-react"


const PetsAvailable = () => {
    return (
        <div>
            <h1 className="text-orange-500 mt-5 mb-5 text-3xl font-bold text-center">Pets Available For Adoption</h1>

            <div className="flex justify-end gap-2 pr-5">
            <button className="h-10 w-10 rounded-full border border-[#e17716] flex items-center justify-center text-[#e17716] rotate-180 cursor-pointer">
    <ArrowRight className="h-5 w-5" />
</button>
                <button className="h-10 w-10 rounded-full border border-[#e17716] flex items-center justify-center text-[#e17716] cursor-pointer">
                    <ArrowRight className="h-5 w-5" />
                </button>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4 px-4 scrollbar-hide">
                <div className="flex gap-4">

                    <PetCard />
                    <PetCard />
                    <PetCard />
                    <PetCard />
                    <PetCard />
                    <PetCard />
                    <PetCard />
                    <PetCard />
                    <PetCard />
                    <PetCard />
                </div>
            </div>
        </div>
    );
}

export default PetsAvailable;
