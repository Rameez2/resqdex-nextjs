import React from 'react';

const NumOfPets = ({data,onChange}) => {

    const update = (value) => {        
        onChange(value); // give updated data to onChange
    };

    return (
            <div className="space-y-2">
                <label htmlFor="numberOfPets" className="block text-xs text-red-600">
                    Approximately how many animals does your organization CURRENTLY have for adoption?
                </label>
                <input
                    type="text"
                    id="numberOfPets"
                    required
                    placeholder="1-25"
                    value={data || ""}
                    onChange={(e) => update(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
    );
}

export default NumOfPets;
