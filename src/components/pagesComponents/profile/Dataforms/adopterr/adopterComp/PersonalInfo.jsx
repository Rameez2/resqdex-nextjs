import { User } from "lucide-react";

const PersonalInfo = ({ data, onChange }) => {

    const update = (index, value) => {
        const updated = [...data];
        updated[index] = value;
        onChange(updated); // give updated data to onChange
    };

    return (
        <>
            {/* Personal Information */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-[#8a0e10] p-4">
                    <div className="flex items-center gap-3">
                        <User className="h-5 w-5 text-white" />
                        <h2 className="text-lg font-semibold text-white">Personal Information</h2>
                    </div>
                </div>
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                            <input
                                type="text"
                                placeholder="Enter your first name"
                                value={data[0] || ""}
                                onChange={(e) => update(0, e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                            <input
                                type="text"
                                placeholder="Enter your last name"
                                value={data[1] || ""}
                                onChange={(e) => update(1, e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
                            <input
                                type="date"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
                                required
                                value={data[2] || ""}
                                onChange={(e) => update(2, e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                            <input
                                type="tel"
                                placeholder="(555) 123-4567"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
                                required
                                value={data[3] || ""}
                                onChange={(e) => update(3, e.target.value)}
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                            <input
                                type="email"
                                placeholder="your.email@example.com"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
                                required
                                value={data[4] || ""}
                                onChange={(e) => update(4, e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default PersonalInfo;
