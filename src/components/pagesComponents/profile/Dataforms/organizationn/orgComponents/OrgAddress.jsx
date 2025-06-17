import { MapPin } from "lucide-react";

const OrgAddress = ({ data, onChange }) => {
  // onChange: (index: number, value: string) => void

  const handleAddressChange = (index, value) => {
    // Call parent's onChange with updated index and value
    onChange(index, value);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          Organization Address
        </h2>
        <p className="text-gray-600 mt-1">Physical location of your organization</p>
      </div>

      <div className="p-6 space-y-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800">
            <strong>Public:</strong> Will be shown on map in the address | Check box to have map go to city center
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-2">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="Street address"
              value={data[0] || ""}
              onChange={e => handleAddressChange(0, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              id="city"
              placeholder="City"
              value={data[1] || ""}
              onChange={e => handleAddressChange(1, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
              Zip/Postal Code
            </label>
            <input
              type="text"
              id="zip"
              placeholder="ZIP"
              value={data[2] || ""}
              onChange={e => handleAddressChange(2, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
              value={data[3] || ""}
              onChange={(e) => handleAddressChange(3, e.target.value)}
            >
              <option value="">Select your state</option>
              <option value="ca">California</option>
              <option value="ny">New York</option>
              <option value="tx">Texas</option>
              <option value="fl">Florida</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Phone number"
              value={data[4] || ""}
              onChange={e => handleAddressChange(4, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="ext" className="block text-sm font-medium text-gray-700">
              Ext
            </label>
            <input
              type="text"
              id="ext"
              placeholder="Extension"
              value={data[5] || ""}
              onChange={e => handleAddressChange(5, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="fax" className="block text-sm font-medium text-gray-700">
            Fax
          </label>
          <input
            type="text"
            id="fax"
            placeholder="Fax"
            value={data[6] || ""}
            onChange={e => handleAddressChange(6, e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>

      </div>
    </div>
  );
};

export default OrgAddress;
