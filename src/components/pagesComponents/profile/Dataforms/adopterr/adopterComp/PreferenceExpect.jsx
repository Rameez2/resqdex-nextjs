import { Heart } from "lucide-react";

const PreferenceExpect = ({ data, onChange }) => {

    const update = (index, value) => {
        const updated = [...data];
        updated[index] = value;
        onChange(updated); // give updated data to onChange
    };

    return (
        <>
            {/* Pet Preferences & Expectations */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-[#8a0e10] p-4">
                    <div className="flex items-center gap-3">
                        <Heart className="h-5 w-5 text-white" />
                        <h2 className="text-lg font-semibold text-white">Pet Preferences & Expectations</h2>
                    </div>
                </div>
                <div className="p-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Why do you want to adopt a pet? *
                            </label>
                            <textarea
                                placeholder="Tell us your motivation for adopting"
                                rows="4"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent resize-none"
                                required
                                value={data[0] || ""}
                                onChange={(e) => update(0, e.target.value)}
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                What qualities are you looking for in a pet? *
                            </label>
                            <textarea
                                placeholder="e.g., Friendly, calm, playful, good with children"
                                rows="3"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent resize-none"
                                required
                                value={data[1] || ""}
                                onChange={(e) => update(1, e.target.value)}
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                What age are you interested in? *
                            </label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
                                value={data[2] || ""}
                                onChange={(e) => update(2, e.target.value)}>
                                <option value="">Select age preference</option>
                                <option value="puppy-kitten">Puppy/Kitten (0-1 year)</option>
                                <option value="young">Young (1-3 years)</option>
                                <option value="adult">Adult (3-7 years)</option>
                                <option value="senior">Senior (7+ years)</option>
                                <option value="no-preference">No preference</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Are you willing to adopt a pet with special needs or medical conditions?
                            </label>
                            <div className="flex gap-4">
                                <label className="flex items-center">
                                    <input type="radio" name="special" value="yes" className="w-4 h-4 text-[#8a0e10] mr-2"

                                        onChange={(e) => update(3, e.target.value)}
                                    />
                                    <span className="text-gray-700">Yes</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="special" value="no" className="w-4 h-4 text-[#8a0e10] mr-2"

                                        onChange={(e) => update(3, e.target.value)}
                                    />
                                    <span className="text-gray-700">No</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="special" value="depends" className="w-4 h-4 text-[#8a0e10] mr-2"

                                        onChange={(e) => update(3, e.target.value)}
                                    />
                                    <span className="text-gray-700">Depends on the condition</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                What behaviors would be unacceptable to you?
                            </label>
                            <textarea
                                placeholder="e.g., Aggression, excessive barking, destructive behavior"
                                rows="3"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent resize-none"
                                value={data[4] || ""}
                                onChange={(e) => update(4, e.target.value)}
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Are you prepared to work on behavioral issues with training? *
                            </label>
                            <div className="flex gap-4">
                                <label className="flex items-center">
                                    <input type="radio" name="training" value="yes" className="w-4 h-4 text-[#8a0e10] mr-2"
                                        onChange={(e) => update(5, e.target.value)}
                                    />
                                    <span className="text-gray-700">Yes</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="training" value="no" className="w-4 h-4 text-[#8a0e10] mr-2"
                                        onChange={(e) => update(5, e.target.value)}
                                    />
                                    <span className="text-gray-700">No</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PreferenceExpect;
