import { PawPrint } from "lucide-react";

const ExpericenceWithPets = ({ data, onChange }) => {

    const update = (index, value) => {
        const updated = [...data];
        updated[index] = value;
        onChange(updated); // give updated data to onChange
    };

    return (
        <>
            {/* Experience with Pets */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-[#8a0e10] p-4">
                    <div className="flex items-center gap-3">
                        <PawPrint className="h-5 w-5 text-white" />
                        <h2 className="text-lg font-semibold text-white">Experience with Pets</h2>
                    </div>
                </div>
                <div className="p-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">Have you owned pets before? *</label>
                            <div className="flex gap-4">
                                <label className="flex items-center">
                                    <input type="radio" name="owned" value="yes" className="w-4 h-4 text-[#8a0e10] mr-2"

                                        onChange={(e) => update(0, e.target.value)}
                                    />
                                    <span className="text-gray-700">Yes</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="owned" value="no" className="w-4 h-4 text-[#8a0e10] mr-2"

                                        onChange={(e) => update(0, e.target.value)}
                                    />
                                    <span className="text-gray-700">No</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                What types of pets have you owned?
                            </label>
                            <textarea
                                placeholder="e.g., Dogs, cats, birds, etc."
                                rows="3"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent resize-none"
                                value={data[1] || ""}
                                onChange={(e) => update(1, e.target.value)}
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">How long since your last pet?</label>
                            <input
                                type="text"
                                placeholder="e.g., 2 years ago, currently have pets"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
                                value={data[2] || ""}
                                onChange={(e) => update(2, e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">Do you currently have pets? *</label>
                            <div className="flex gap-4">
                                <label className="flex items-center">
                                    <input type="radio" name="current" value="yes" className="w-4 h-4 text-[#8a0e10] mr-2"

                                        onChange={(e) => update(3, e.target.value)}
                                    />
                                    <span className="text-gray-700">Yes</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="current" value="no" className="w-4 h-4 text-[#8a0e10] mr-2"

                                        onChange={(e) => update(3, e.target.value)}
                                    />
                                    <span className="text-gray-700">No</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Current pets (Type, Age, Spayed/Neutered)
                            </label>
                            <textarea
                                placeholder="e.g., Dog - Golden Retriever, 5 years old, spayed"
                                rows="3"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent resize-none"
                                value={data[4] || ""}
                                onChange={(e) => update(4, e.target.value)}
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Are your current animals up to date on vaccinations?
                            </label>
                            <div className="flex gap-4">
                                <label className="flex items-center">
                                    <input type="radio" name="vaccinations" value="yes" className="w-4 h-4 text-[#8a0e10] mr-2"

                                        onChange={(e) => update(5, e.target.value)}
                                    />
                                    <span className="text-gray-700">Yes</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="vaccinations" value="no" className="w-4 h-4 text-[#8a0e10] mr-2"

                                        onChange={(e) => update(5, e.target.value)}
                                    />
                                    <span className="text-gray-700">No</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="vaccinations" value="na" className="w-4 h-4 text-[#8a0e10] mr-2"

                                        onChange={(e) => update(5, e.target.value)}
                                    />
                                    <span className="text-gray-700">N/A</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                What happened to your previous pets?
                            </label>
                            <textarea
                                placeholder="e.g., Old age, illness, lost, etc."
                                rows="3"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent resize-none"
                                value={data[6] || ""}
                                onChange={(e) => update(6, e.target.value)}
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Have you ever surrendered a pet to a shelter or rescue?
                            </label>
                            <textarea
                                placeholder="If yes, please explain the circumstances"
                                rows="3"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent resize-none"
                                value={data[7] || ""}
                                onChange={(e) => update(7, e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ExpericenceWithPets;
