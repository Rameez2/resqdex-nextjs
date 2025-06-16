import React from 'react';

const AddressInfo = ({ data, onChange }) => {

    const update = (index, value) => {
        const updated = [...data];
        updated[index] = value;
        onChange(updated); // give updated data to onChange
    };

    return (
        <>

            <div>
                <h3 className="text-md font-medium text-gray-900 mb-4">Current Address</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Street Address *</label>
                        <input
                            type="text"
                            placeholder="123 Main Street"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
                            required
                            value={data[0] || ""}
                            onChange={(e) => update(0, e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                        <input
                            type="text"
                            placeholder="Your city"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
                            required
                            value={data[1] || ""}
                            onChange={(e) => update(1, e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code *</label>
                        <input
                            type="text"
                            placeholder="12345"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
                            required
                            value={data[2] || ""}
                            onChange={(e) => update(2, e.target.value)}
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
                            value={data[3] || ""}
                            onChange={(e) => update(3, e.target.value)}
                        >
                            <option value="">Select your state</option>
                            <option value="ca">California</option>
                            <option value="ny">New York</option>
                            <option value="tx">Texas</option>
                            <option value="fl">Florida</option>
                        </select>
                    </div>
                </div>
            </div>

        </>
    );
}

export default AddressInfo;
