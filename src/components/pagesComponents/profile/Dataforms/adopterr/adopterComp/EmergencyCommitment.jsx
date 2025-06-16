import { Shield } from "lucide-react";

const EmergencyCommitment = ({data,onChange}) => {

    const update = (index, value) => {
        const updated = [...data];
        updated[index] = value;
        onChange(updated); // give updated data to onChange
    };

    return (
        <>
                       {/* Emergency & Commitment */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-[#8a0e10] p-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-white" />
                    <h2 className="text-lg font-semibold text-white">Emergency & Commitment</h2>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        If you move, what will happen to your pet? *
                      </label>
                      <textarea
                        placeholder="Describe your plan for keeping your pet if you move"
                        rows="3"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent resize-none"
                        required
                        value={data[0] || ""}
                                onChange={(e) => update(0, e.target.value)}
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        What would cause you to give up your pet? *
                      </label>
                      <textarea
                        placeholder="Be honest about circumstances that might lead to rehoming"
                        rows="3"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent resize-none"
                        required
                        value={data[1] || ""}
                        onChange={(e) => update(1, e.target.value)}
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Are you prepared for a long-term commitment (10-20+ years)? *
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center">
                          <input type="radio" name="commitment" value="yes" className="w-4 h-4 text-[#8a0e10] mr-2" 
                            
                        onChange={(e) => update(2, e.target.value)}
                          />
                          <span className="text-gray-700">Yes</span>
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="commitment" value="no" className="w-4 h-4 text-[#8a0e10] mr-2" 
                                                    onChange={(e) => update(2, e.target.value)}
                          />
                          <span className="text-gray-700">No</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional information or questions
                      </label>
                      <textarea
                        placeholder="Anything else you'd like us to know?"
                        rows="4"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent resize-none"
                        value={data[3] || ""}
                        onChange={(e) => update(3, e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>   
        </>
    );
}

export default EmergencyCommitment;
