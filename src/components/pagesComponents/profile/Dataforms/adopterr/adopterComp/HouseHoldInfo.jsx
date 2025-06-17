import { Home } from "lucide-react";
import { useState } from "react";


const HouseHoldInfo = ({ data, onChange }) => {

    const [isAllergic,setIsAllergic] = useState(false);

    const update = (index, value) => {
        const updated = [...data];
        updated[index] = value;
        onChange(updated); // give updated data to onChange
    };

    return (
        <>
            {/* Household Information */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-[#8a0e10] p-4">
                    <div className="flex items-center gap-3">
                        <Home className="h-5 w-5 text-white" />
                        <h2 className="text-lg font-semibold text-white">Household Information</h2>
                    </div>
                </div>
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Number of Adults *</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
                                value={data[0] || ""}
                                onChange={(e) => update(0, e.target.value)}
                            >
                                <option value="">Select number</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4+</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Number of Children</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
                                value={data[1] || ""}
                                onChange={(e) => update(1, e.target.value)}
                            >
                                <option value="">Select number</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4+</option>
                            </select>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Ages of Children (if applicable)
                            </label>
                            <input
                                type="text"
                                placeholder="e.g., 5, 8, 12"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
                                value={data[2] || ""}
                                onChange={(e) => update(2, e.target.value)}
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Do all household members agree to the adoption? *
                            </label>
                            <div className="flex gap-4">
                                <label className="flex items-center">
                                    <input type="radio" name="agree" value="yes" className="w-4 h-4 text-[#8a0e10] mr-2"

                                        onChange={(e) => update(3, e.target.value)}

                                    />
                                    <span className="text-gray-700">Yes</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="agree" value="no" className="w-4 h-4 text-[#8a0e10] mr-2"

                                        onChange={(e) => update(3, e.target.value)}
                                    />
                                    <span className="text-gray-700">No</span>
                                </label>
                            </div>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Is anyone allergic to animals? Please explain
                            </label>

                            <div className="flex gap-4">
                                <label className="flex items-center">
                                    <input type="radio" name="agree" value="yes" className="w-4 h-4 text-[#8a0e10] mr-2"
                                        onChange={() =>{ update(4, "");;setIsAllergic(true)}}
                                    />
                                    <span className="text-gray-700">Yes</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="agree" value="no" className="w-4 h-4 text-[#8a0e10] mr-2"
                                        onChange={(e) => {update(4, e.target.value);setIsAllergic(false)}}
                                    />
                                    <span className="text-gray-700">No</span>
                                </label>
                            </div>
                            {isAllergic ? 
                            <textarea
                                placeholder="Describe any allergies or sensitivities"
                                rows="3"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent resize-none"
                                value={data[4] || ""}
                                onChange={(e) => update(4, e.target.value)}
                            ></textarea> :
                                <></>
                            }

                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Who will be the primary caregiver? *
                            </label>
                            <input
                                type="text"
                                placeholder="Name of primary caregiver"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
                                required
                                value={data[5] || ""}
                                onChange={(e) => update(5, e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Type of Home *</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
                                value={data[6] || ""}
                                onChange={(e) => update(6, e.target.value)}
                            >
                                <option value="">Select home type</option>
                                <option value="house">House</option>
                                <option value="apartment">Apartment</option>
                                <option value="condo">Condo</option>
                                <option value="townhouse">Townhouse</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">Do you have a yard? *</label>
                            <div className="flex gap-4">
                                <label className="flex items-center">
                                    <input type="radio" name="yard" value="yes" className="w-4 h-4 text-[#8a0e10] mr-2"
                                        onChange={(e) => update(7, e.target.value)}
                                    />
                                    <span className="text-gray-700">Yes</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="yard" value="no" className="w-4 h-4 text-[#8a0e10] mr-2"
                                        onChange={(e) => update(7, e.target.value)}
                                    />
                                    <span className="text-gray-700">No</span>
                                </label>
                            </div>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Where will the pet spend most of its time? *
                            </label>
                            <textarea
                                placeholder="Describe where the pet will spend most of its time"
                                rows="3"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent resize-none"
                                required
                                value={data[8] || ""}
                                onChange={(e) => update(8, e.target.value)}
                            ></textarea>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Where will the pet sleep at night? *
                            </label>
                            <textarea
                                placeholder="Describe where the pet will sleep"
                                rows="3"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent resize-none"
                                required
                                value={data[9] || ""}
                                onChange={(e) => update(9, e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HouseHoldInfo;
