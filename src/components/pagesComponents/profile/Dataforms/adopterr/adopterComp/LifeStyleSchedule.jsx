import { Calendar } from "lucide-react";

const LifeStyleSchedule = ({ data, onChange }) => {

    const update = (index, value) => {
        const updated = [...data];
        updated[index] = value;
        onChange(updated); // give updated data to onChange
    };

    return (
        <>
            {/* Lifestyle & Schedule */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-[#8a0e10] p-4">
                    <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-white" />
                        <h2 className="text-lg font-semibold text-white">Lifestyle & Schedule</h2>
                    </div>
                </div>
                <div className="p-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                How many hours per day will the pet be alone? *
                            </label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
                                value={data[0] || ""}
                                onChange={(e) => update(0, e.target.value)}>
                                <option value="">Select hours</option>
                                <option value="0-2">0-2 hours</option>
                                <option value="3-4">3-4 hours</option>
                                <option value="5-6">5-6 hours</option>
                                <option value="7-8">7-8 hours</option>
                                <option value="9+">9+ hours</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Describe your typical daily schedule *
                            </label>
                            <textarea
                                placeholder="e.g., Work 9-5, home evenings and weekends"
                                rows="4"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent resize-none"
                                required
                                value={data[1] || ""}
                                onChange={(e) => update(1, e.target.value)}
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">Do you travel frequently? *</label>
                            <div className="flex gap-4">
                                <label className="flex items-center">
                                    <input type="radio" name="travel" value="yes" className="w-4 h-4 text-[#8a0e10] mr-2"

                                        onChange={(e) => update(2, e.target.value)}
                                    />
                                    <span className="text-gray-700">Yes</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="travel" value="no" className="w-4 h-4 text-[#8a0e10] mr-2"

                                        onChange={(e) => update(2, e.target.value)}
                                    />
                                    <span className="text-gray-700">No</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="travel" value="sometimes" className="w-4 h-4 text-[#8a0e10] mr-2"

                                        onChange={(e) => update(2, e.target.value)} />
                                    <span className="text-gray-700">Sometimes</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                What arrangements will you make for pet care during travel/vacation? *
                            </label>
                            <textarea
                                placeholder="e.g., Pet sitter, boarding, family member"
                                rows="3"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent resize-none"
                                required
                                value={data[3] || ""}
                                onChange={(e) => update(3, e.target.value)}
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">What is your activity level? *</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
                                value={data[4] || ""}
                                onChange={(e) => update(4, e.target.value)}>
                                <option value="">Select activity level</option>
                                <option value="low">Low - Prefer quiet activities</option>
                                <option value="moderate">Moderate - Some outdoor activities</option>
                                <option value="high">High - Very active, lots of outdoor time</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LifeStyleSchedule;
