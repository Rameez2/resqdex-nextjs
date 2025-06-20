import { MapPin } from "lucide-react";

const OrgAddress = ({ data, onChange }) => {
  // onChange: (index: number, value: string) => void

  const handleAddressChange = (index, value) => {
    // Call parent's onChange with updated index and value
    onChange(index, value);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200 flex items-center flex-col">
        <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          Organization Address
        </h2>
        <p className="text-gray-600 mt-1">Physical location of your organization</p>
      </div>

      <div className="p-6 space-y-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 flex gap-2">
          <input
            type="checkbox"
            id="willBePublic"
              value={data[7] || ""}
              required
              onChange={e => handleAddressChange(7, e.target.value)}
            className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
          />
          <label htmlFor="willBePublic" className="text-sm text-blue-800 flex gap-2">
            <strong>Public:</strong> Will be shown on map in the address | Check box to have map go to city center
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-2">
            <label htmlFor="address" className="block text-sm font-medium text-red-600">
              Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="Street address"
              value={data[0] || ""}
              required
              onChange={e => handleAddressChange(0, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="city" className="block text-sm font-medium text-red-600">
              City
            </label>
            <input
              type="text"
              id="city"
              placeholder="City"
              value={data[1] || ""}
              required
              onChange={e => handleAddressChange(1, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="zip" className="block text-sm font-medium text-red-600">
              Zip/Postal Code
            </label>
            <input
              type="text"
              id="zip"
              placeholder="ZIP"
              value={data[2] || ""}
              required
              onChange={e => handleAddressChange(2, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-red-600 mb-2">State</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
              value={data[3] || ""}
              required
              onChange={(e) => handleAddressChange(3, e.target.value)}
            >
              <option value="">Select your state</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-red-600">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              required
              placeholder="Phone number"
              value={data[4] || ""}
              onChange={e => handleAddressChange(4, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="ext" className="block text-sm font-medium text-red-600">
              Ext
            </label>
            <input
              type="text"
              id="ext"
              required
              placeholder="Extension"
              value={data[5] || ""}
              onChange={e => handleAddressChange(5, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="fax" className="block text-sm font-medium text-grey-600">
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
