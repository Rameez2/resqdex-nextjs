import React from 'react';

const AdoptionPolicies = ({data,onChange}) => {
        const update = (value) => {
        onChange(value); // give updated data to onChange
    };
    return (
                  <div className="space-y-2">
                    <label htmlFor="adoptionPolicies" className="block text-sm font-medium text-red-600">
                      Adoption Policies
                    </label>
                    <label htmlFor="sterilizationApproach" className="block text-xs text-red-600">
                      How would you describe your adoption process for potential adopters?
                    </label>

                    <textarea
                      id="adoptionPolicies"
                      rows={4}
                      required
                      placeholder="Describe your adoption policies..."
                      value={data || ""}
                    onChange={(e) => update(e.target.value)}
                      className="w-full px-3 py-2 border border-red-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
    );
}

export default AdoptionPolicies;
