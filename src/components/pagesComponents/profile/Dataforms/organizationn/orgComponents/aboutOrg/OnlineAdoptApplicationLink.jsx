import React from 'react';

const OnlineAdoptApplicationLink = ({ data, onChange }) => {
    const update = (value) => {
        onChange(value); // give updated data to onChange
    };
    return (
        <div className="space-y-2">
            <label htmlFor="onlineLink" className="block text-sm font-medium text-gray-700">
                Online Adoption Application Link
            </label>
            <input
                type="url"
                id="onlineLink"
                placeholder="https://"
                value={data || ""}
                onChange={(e) => update(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
        </div>
    );
}

export default OnlineAdoptApplicationLink;
