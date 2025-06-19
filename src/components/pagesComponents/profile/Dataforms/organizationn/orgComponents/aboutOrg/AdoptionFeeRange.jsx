import React from 'react';

const AdoptionFeeRange = ({ data, onChange }) => {

    const update = (index, value) => {
        const updated = [...data];
        updated[index] = value;
        onChange(updated); // give updated data to onChange
    };

    return (
        <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Adoption Fee Range</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
   
                <div className="space-y-2">
                    <label htmlFor="lowestFee" className="block text-xs text-red-600">
                        Lowest Adoption Fee
                    </label>
                    <input
                        type="text"
                        id="lowestFee"
                        placeholder="$"
                        required
                        value={data[1] || ""}
                        onChange={(e) => update(1, e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

             <div className="space-y-2">
                    <label htmlFor="highestFee" className="block text-xs text-red-600">
                        Highest Adoption Fee
                    </label>
                    <input
                        type="text"
                        id="highestFee"
                        required
                        placeholder="$"
                        value={data[0] || ""}
                        onChange={(e) => update(0, e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

            </div>
        </div>
    );
}

export default AdoptionFeeRange;
