import { useState } from "react";
import { Users } from "lucide-react";

export default function OrgBasicInfo({ data, onChange }) {
  const [hideFromPublic, setHideFromPublic] = useState(false);
  const [confirmEmail,setConfirmEmail] = useState('');

  const update = (index, value) => {
    const updated = [...data];
    updated[index] = value;
    onChange(updated); // give updated data to onChange
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200 flex items-center flex-col">
  <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
      <Users className="w-5 h-5 text-white" />
    </div>
    Basic Information
  </h2>
        <p className="text-gray-600 mt-1">Tell us about your organization</p>
      </div>
      <div className="p-6 space-y-6">
        <div className="flex items-center space-x-2 mb-4">
          <input
            type="checkbox"
            id="hideFromPublic"
            checked={hideFromPublic}
            onChange={(e) => {setHideFromPublic(e.target.checked);update(6,hideFromPublic ? "no" : "yes")}}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="hideFromPublic" className="text-sm text-gray-700">
            Hide name from public
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="shelterName" className="block text-sm font-medium text-red-600">
              General Shelter/Rescue Name *
            </label>
            <input
              type="text"
              id="shelterName"
              required
              value={data[0]}
              onChange={(e) => update(0, e.target.value)}
              placeholder="Enter organization name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="orgType" className="block text-sm font-medium text-red-600">
              Type of Organization *
            </label>
            <select
              id="orgType"
              value={data[5]}
              onChange={(e) => update(5, e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select type</option>
              <option value="rescue">Rescue Group</option>
              <option value="shelter">Animal Shelter</option>
              <option value="sanctuary">Animal Sanctuary</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="directorName" className="block text-sm font-medium text-gray-700">
              Director/Manager Name
            </label>
            <input
              type="text"
              id="directorName"
              value={`${data[1]} ${data[2]}`}
              onChange={(e) => {
                const [first, ...last] = e.target.value.split(" ");
                update(1, first || "");
                update(2, last.join(" ") || "");
              }}
              placeholder="Full name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={data[3]}
              onChange={(e) => update(3, e.target.value)}
              placeholder="Job title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-red-600">
              Email *
            </label>
            <input
              type="email"
              id="email"
              required
              value={data[4]}
              onChange={(e) => update(4, e.target.value)}
              placeholder="contact@organization.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="verifyEmail" className="block text-sm font-medium text-red-600">
              Verify Email *
            </label>
            <input
              type="email"
              required
              id="verifyEmail"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
              placeholder="Confirm email address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        {(data[4] !== confirmEmail) && <p className="block text-sm font-medium text-red-600 text-center">
  Email and Confirm Email do not match.
</p> }


      </div>
    </div>
  );
}

