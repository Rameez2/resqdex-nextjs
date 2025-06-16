import { DollarSign } from "lucide-react";

const FinancialResponsibility = ({ data, onChange }) => {

    const update = (index, value) => {
        const updated = [...data];
        updated[index] = value;
        onChange(updated); // give updated data to onChange
    };

    return (
        <>
            {/* Financial Responsibility */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-[#8a0e10] p-4">
                    <div className="flex items-center gap-3">
                        <DollarSign className="h-5 w-5 text-white" />
                        <h2 className="text-lg font-semibold text-white">Financial Responsibility</h2>
                    </div>
                </div>
                <div className="p-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Are you financially prepared for pet ownership? *
                            </label>
                            <div className="flex gap-4">
                                <label className="flex items-center">
                                    <input type="radio" name="prepared" value="yes" className="w-4 h-4 text-[#8a0e10] mr-2"
                                        onChange={(e) => update(0, e.target.value)}
                                    />
                                    <span className="text-gray-700">Yes</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="prepared" value="no" className="w-4 h-4 text-[#8a0e10] mr-2"
                                        onChange={(e) => update(0, e.target.value)}
                                    />
                                    <span className="text-gray-700">No</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Are you prepared for emergency veterinary expenses? *
                            </label>
                            <div className="flex gap-4">
                                <label className="flex items-center">
                                    <input type="radio" name="emergency" value="yes" className="w-4 h-4 text-[#8a0e10] mr-2"
                                        onChange={(e) => update(1, e.target.value)}
                                    />
                                    <span className="text-gray-700">Yes</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="emergency" value="no" className="w-4 h-4 text-[#8a0e10] mr-2"
                                        onChange={(e) => update(1, e.target.value)}
                                    />
                                    <span className="text-gray-700">No</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                How would you handle a $1,000+ emergency vet bill? *
                            </label>
                            <textarea
                                placeholder="e.g., Savings, credit card, payment plan, pet insurance"
                                rows="3"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent resize-none"
                                required
                                value={data[2] || ""}
                                onChange={(e) => update(2, e.target.value)}
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Do you have pet insurance or plan to get it?
                            </label>
                            <div className="flex gap-4">
                                <label className="flex items-center">
                                    <input type="radio" name="insurance" value="have" className="w-4 h-4 text-[#8a0e10] mr-2"
                                        onChange={(e) => update(3, e.target.value)}
                                    />
                                    <span className="text-gray-700">Already have it</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="insurance" value="plan" className="w-4 h-4 text-[#8a0e10] mr-2"
                                        onChange={(e) => update(3, e.target.value)}
                                    />
                                    <span className="text-gray-700">Plan to get it</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="insurance" value="no" className="w-4 h-4 text-[#8a0e10] mr-2"
                                        onChange={(e) => update(3, e.target.value)}
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

export default FinancialResponsibility;
