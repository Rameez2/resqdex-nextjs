"use client"
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { breedsData } from "../../../../public/data/breeds";

const PetFilters = ({ filters, updateFilter }) => {
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
              {Object.keys(breedsData).map((specie, index) => (
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
              {breedOptions.map((breed, index) => (
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

                {/* Good With filter */}
                <div>
          <h3 className="text-lg font-medium mb-2">Good with</h3>
          <div className="relative">
            <select
              className="w-full bg-[#f4f4f4] p-3 rounded-md appearance-none pr-10"
              onChange={(e) => updateFilter("good_with", e.target.value)}
              value={filters.good_with || ""}
            >
              <option value="">Any</option>
              <option value="dogs">Other Dogs</option>
              <option value="cats">Cats</option>
              <option value="kids">Small Kids</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-primary h-5 w-5" />
          </div>
        </div>

        {/* days on resqdex filter */}
        <div>
          <h3 className="text-lg font-medium mb-2">
            Days on ResQdex</h3>
          <div className="relative">
            <select
              className="w-full bg-[#f4f4f4] p-3 rounded-md appearance-none pr-10"
              onChange={(e) => updateFilter("days_on_resqdex", e.target.value)}  // Update days_on_resqdex in the filters
              value={filters.days_on_resqdex || ""}  // Bind value to the correct filter (days_on_resqdex)
            >
              <option value="">Not Selected</option>
              <option value="Less than 24 hrs">Less than 24 hrs</option>
              <option value="1–7 days">1–7 days</option>
              <option value="30+ days">30+ days</option>
              <option value="100+ days">100+ days</option>
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

        {/* Gender filter */}
        <div>
          <h3 className="text-lg font-medium mb-2">Colors</h3>
          <div className="relative">
            <select
              className="w-full bg-[#f4f4f4] p-3 rounded-md appearance-none pr-10"
              onChange={(e) => updateFilter("color", e.target.value)}
              value={filters.gender || ""}
            >
              <option value="">Any Color</option>
              <option value="Bicolor">Bicolor</option>
              <option value="Black">Black</option>
              <option value="Brindle">Brindle</option>
              <option value="Brown/Chocolate">Brown/Chocolate</option>
              <option value="Merle (Blue)">Merle (Blue)</option>
              <option value="Merle (Red)">Merle (Red)</option>
              <option value="Red">Red</option>
              <option value="Silver & Tan">Silver & Tan</option>
              <option value="Tan">Tan</option>
              <option value="White">White</option>
              <option value="Tricolor">Tricolor</option>
              <option value="Fawn">Fawn</option>
              <option value="Sable">Sable</option>
              <option value="Spotted">Spotted</option>
              <option value="Harlequin">Harlequin</option>
              <option value="Gray/Silver">Gray/Silver</option>
              <option value="Golden">Golden</option>

            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-primary h-5 w-5" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default PetFilters;