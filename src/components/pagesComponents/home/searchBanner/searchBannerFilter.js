"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import { breedsData } from '../../../../../public/data/breeds';
import { Search } from "lucide-react";

const SearchBannerFilter = () => {

    const [activeTab, setActiveTab] = useState("Cat");

    const [filters, setFilters] = useState({
        specie: "Cat",
        breed: "",
        age: undefined,
        gender: ""
        // location: "",
    });

    const router = useRouter();

    useEffect(() => {
        setFilters((prev) => ({ ...prev, specie: activeTab, breed: "" }));
    }, [activeTab]);

    const handleFilterChange = (key, value) => {
        setFilters((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Build the query string from filters
        const queryString = new URLSearchParams(filters).toString();

        // Navigate to /animal-listing with filters as query parameters
        router.push(`/animal-listing?${queryString}`);
    };

    return (
        <>
            {/* Tabs */}
            <nav role="tablist" aria-label="Animal Category Tabs" className="flex justify-center gap-8 mb-8">
                {["Cat", "Dog", "Horse", "Farm Animal", "Other"].map((tab) => (
                    <button
                        key={tab}
                        role="tab"
                        aria-selected={activeTab === tab}
                        className={`text-base font-medium px-2 py-1 ${activeTab === tab ? "border-b-2 border-primary" : "text-white/70"
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}s
                    </button>
                ))}
            </nav>

            {/* Search Form */}
            <form
                className="flex w-full items-center max-w-2xl gap-4 mb-8 flex-col sm:flex-row"
                role="search"
                aria-label="Pet Search Form"
                onSubmit={handleSubmit} // Attach submit handler
            >
                {/* Breed */}
                <div className="flex-1">
                    <label htmlFor="breed" className="sr-only">Breed</label>
                    <select
                        id="breed"
                        value={filters.breed}
                        onChange={(e) => handleFilterChange("breed", e.target.value)}
                        className="w-full p-3 border border-gray-200 rounded-md text-gray-500 bg-white focus:outline-none appearance-none"
                    >
                        <option value="">Select Breed</option>
                        {breedsData[activeTab]?.map((breed, index) => (
                            <option key={index} value={breed}>
                                {breed}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Age */}
                <div className="flex-1">
                    <label htmlFor="age" className="sr-only">Age</label>
                    <select
                        id="age"
                        value={filters.age}
                        onChange={(e) => handleFilterChange("age", e.target.value)}
                        className="w-full p-3 border border-gray-200 rounded-md text-gray-500 bg-white focus:outline-none appearance-none"
                    >
                        <option value="" >Age</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>

                {/* Gender */}
                <div className="flex-1">
                    <label htmlFor="gender" className="sr-only">Gender</label>
                    <select
                        id="gender"
                        value={filters.gender}
                        onChange={(e) => handleFilterChange("gender", e.target.value)}
                        className="w-full p-3 border border-gray-200 rounded-md text-gray-500 bg-white focus:outline-none appearance-none"
                    >
                        <option value="">Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="bg-primary text-white px-4 py-3 rounded-md flex items-center gap-2"
                    aria-label="Find pets matching your criteria"
                >
                    <Search size={20} />
                    <span>Find Pet</span>
                </button>
            </form>
                    {/* Debug: Show live filters */}
        {/* <pre className="mt-8 text-black bg-white p-4 rounded-md w-full max-w-2xl">
          {JSON.stringify(filters, null, 2)}
        </pre> */}
        </>
    );
}

export default SearchBannerFilter;
