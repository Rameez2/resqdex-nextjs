import { Mail } from "lucide-react";
import { useEffect, useState } from "react";

const OrgMailAddress = ({ mailingAddress, sameData, onChange }) => {

  const [sameAs, setSameAs] = useState(false);

  useEffect(() => {
    if (sameAs) {
      console.log('mail address changed');

      onChange(sameData);
    }
  }, [sameAs]);

  const handleChange = (index, value) => {
    const updated = [...mailingAddress];
    updated[index] = value;
    onChange(updated);
  };

  return (
    <div className="bg-green-50 rounded-lg shadow-sm border border-green-200">
      <div className="p-6 border-b border-green-200">
        <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg flex items-center justify-center">
            <Mail className="w-5 h-5 text-white" />
          </div>
          Mailing Address
        </h2>
        <p className="text-green-700 mt-1">Address for correspondence (not seen by public)</p>
      </div>
      <div className="p-6 space-y-6">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="sameAsAddress"
            onChange={() => setSameAs(!sameAs)}
            className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
          />
          <label htmlFor="sameAsAddress" className="text-sm text-gray-700">
            All info same as Address above
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="mailingAddress" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="mailingAddress"
              placeholder="Mailing address"
              value={mailingAddress[0] || ""}
              onChange={(e) => handleChange(0, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="mailingCity" className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              id="mailingCity"
              placeholder="City"
              value={mailingAddress[1] || ""}
              onChange={(e) => handleChange(1, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="mailingZip" className="block text-sm font-medium text-gray-700">
              Zip/Postal Code
            </label>
            <input
              type="text"
              id="mailingZip"
              placeholder="ZIP"
              value={mailingAddress[2] || ""}
              onChange={(e) => handleChange(2, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
              value={mailingAddress[3] || ""}
              onChange={(e) => update(3, e.target.value)}
            >
              <option value="">Select your state</option>
              <option value="ca">California</option>
              <option value="ny">New York</option>
              <option value="tx">Texas</option>
              <option value="fl">Florida</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgMailAddress;


