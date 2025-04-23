import React from 'react';
import { breedsData } from '../../../../../../../public/data/breeds';

const PetCategories = ({ handleChange, petInfo }) => {

    return (
        <>
            <div className="flex-1 min-w-[160px] max-w-sm">
                <label className="block text-sm text-gray-700 mb-1">Specie:</label>
                <select
                    name="specie"
                    value={petInfo.specie}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md"
                    required
                >
                    <option value="Other">Other</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Horse">Horse</option>
                </select>
            </div>

            <div className="flex-1 min-w-[200px] max-w-sm">
                <label className="block text-sm text-gray-700 mb-1">Breed:</label>
                <select
                    name="breed"
                    value={petInfo.breed}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md"
                    required
                >
                    {/* Dynamically load breed options based on selected species */}
                    {breedsData[petInfo.specie]?.map((breed, index) => (
                        <option key={index} value={breed}>
                            {breed}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
}

export default PetCategories;
