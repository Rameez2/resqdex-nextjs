import React from 'react';

const AdoptionProcess = ({data,onChange}) => {
            const update = (value) => {
        onChange(value); // give updated data to onChange
    };
    return (
                  <div className="space-y-2">
                    <label htmlFor="adoptionProcess" className="block text-sm font-medium text-red-600">
                      Adoption Process
                    </label>
                    <textarea
                      id="adoptionProcess"
                      rows={4}
                      placeholder="Describe your adoption process..."
                      value={data || ""}
                      required
                    onChange={(e) => update(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
    );
}

export default AdoptionProcess;
