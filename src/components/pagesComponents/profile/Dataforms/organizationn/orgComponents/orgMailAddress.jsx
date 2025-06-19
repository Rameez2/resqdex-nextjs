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
      <div className="p-6 border-b border-green-200 flex items-center flex-col">
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
            <label htmlFor="mailingAddress" className="block text-sm font-medium text-red-600">
              Address
            </label>
            <input
              type="text"
              id="mailingAddress"
              placeholder="Mailing address"
              value={mailingAddress[0] || ""}
              required
              onChange={(e) => handleChange(0, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="mailingCity" className="block text-sm font-medium text-red-600">
              City
            </label>
            <input
              type="text"
              id="mailingCity"
              placeholder="City"
              value={mailingAddress[1] || ""}
              required
              onChange={(e) => handleChange(1, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="mailingZip" className="block text-sm font-medium text-red-600">
              Zip/Postal Code
            </label>
            <input
              type="text"
              id="mailingZip"
              placeholder="ZIP"
              value={mailingAddress[2] || ""}
              required
              onChange={(e) => handleChange(2, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-red-600 mb-2">State</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
              value={mailingAddress[3] || ""}
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
      </div>
    </div>
  );
};

export default OrgMailAddress;


