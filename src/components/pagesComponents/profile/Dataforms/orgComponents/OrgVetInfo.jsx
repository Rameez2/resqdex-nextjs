import { Shield } from "lucide-react";
const OrgVetInfo = ({data,onChange}) => {

    const update = (index, value) => {
        const updated = [...data];
        updated[index] = value;
        onChange(updated); // give updated data to onChange
    };

    return (
        <>
                      {/* Veterinarian Information */}
                      <div className="bg-green-50 rounded-lg shadow-sm border border-green-200">
                        <div className="p-6 border-b border-gray-200">
                          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                              <Shield className="w-5 h-5 text-white" />
                            </div>
                            Veterinarian Information
                          </h2>
                          <p className="text-green-700 mt-1">Used only as a reference </p>
            
                        </div>
            
                        <div className="p-6 space-y-6">
            
                          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                            <div className="space-y-2">
                              <label htmlFor="vetName" className="block text-sm font-medium text-gray-700">
                                Vet Name
                              </label>
                              <input
                                type="text"
                                id="vetName"
                                placeholder="Veterinarian name"
                                value={data[0] || ""}
                                onChange={(e) => update(0, e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              />
                            </div>
                          </div>
            
                          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            
                            <div className="space-y-2">
                              <label htmlFor="vetPhone" className="block text-sm font-medium text-gray-700">
                                Vet Phone
                              </label>
                              <input
                                type="tel"
                                id="vetPhone"
                                placeholder="Phone number"
                                value={data[1] || ""}
                                onChange={(e) => update(1, e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              />
                            </div>
            
                            <div className="space-y-2">
                              <label htmlFor="vetPhoneExt" className="block text-sm font-medium text-gray-700">
                                Vet Phone Ext
                              </label>
                              <input
                                type="text"
                                id="vetPhoneExt"
                                placeholder="Extension"
                                value={data[2] || ""}
                                onChange={(e) => update(2, e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              />
                            </div>
                          </div>
            
                        </div>
                      </div>
            
        </>
    );
}

export default OrgVetInfo;
