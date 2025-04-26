"use client"
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { breedsData } from "../../../../public/data/breeds";

const PetFilters = ({ filters,updateFilter }) => {
  const [selectedSpecie, setSelectedSpecie] = useState(filters.specie || "");

  const handleSpecieChange = (e) => {
    const value = e.target.value;
    setSelectedSpecie(value);
    updateFilter("specie", value);
    updateFilter("breed", ""); // Reset breed when specie changes
  };

  // Get breeds based on selected specie
  const breedOptions = selectedSpecie ? breedsData[selectedSpecie] || [] : [];
  
  return (
    <div className="w-full md:w-1/4 bg-white p-6 rounded-md h-fit">
      <h2 className="text-3xl font-bold mb-6">Filters</h2>

      <div className="space-y-6">

        {/* Specie filter */}
        <div>
          <h3 className="text-lg font-medium mb-2">Specie</h3>
          <div className="relative">
            <select
              className="w-full bg-[#f4f4f4] p-3 rounded-md appearance-none pr-10"
              onChange={handleSpecieChange}
              value={filters.specie || ""}
            >
              <option value="">All Species</option>
              {Object.keys(breedsData).map((specie,index) => (
                <option key={index} value={specie}>
                  {specie}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-primary h-5 w-5" />
          </div>
        </div>

        {/* Breed filter */}
        <div>
          <h3 className="text-lg font-medium mb-2">Breed</h3>
          <div className="relative">
            <select
              className="w-full bg-[#f4f4f4] p-3 rounded-md appearance-none pr-10"
              onChange={(e) => updateFilter("breed", e.target.value)}
              value={filters.breed || ""}
            >
              <option value="">All Breeds</option>
              {breedOptions.map((breed,index) => (
                <option key={index} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-primary h-5 w-5" />
          </div>
        </div>

        {/* Size filter */}
        <div>
          <h3 className="text-lg font-medium mb-2">Size</h3>
          <div className="relative">
            <select
              className="w-full bg-[#f4f4f4] p-3 rounded-md appearance-none pr-10"
              onChange={(e) => updateFilter("size", e.target.value)}
              value={filters.size || ""}
            >
              <option value="">All Sizes</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-primary h-5 w-5" />
          </div>
        </div>

        {/* Gender filter */}
        <div>
          <h3 className="text-lg font-medium mb-2">Gender</h3>
          <div className="relative">
            <select
              className="w-full bg-[#f4f4f4] p-3 rounded-md appearance-none pr-10"
              onChange={(e) => updateFilter("gender", e.target.value)}
              value={filters.gender || ""}
            >
              <option value="">All Genders</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-primary h-5 w-5" />
          </div>
        </div>

        {/* Shelter/Rescue filter */}
        {/* <div>
          <h3 className="text-lg font-medium mb-2">Shelter or Rescue</h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Search by Shelter"
              className="w-full bg-[#f4f4f4] p-3 rounded-md pr-10"
              onChange={(e) => updateFilter("shelter", e.target.value)}
            />
          </div>
        </div> */}

      </div>
    </div>
  );
};

export default PetFilters;