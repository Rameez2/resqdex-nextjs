import React from 'react';

const MissionStatement = ({ data, onChange }) => {


    const update = (value) => {
        onChange(value); // give updated data to onChange
    };

    return (
        <div className="space-y-2">
            <label htmlFor="missionStatement" className="block text-sm font-medium text-red-600">
                Mission Statement
            </label>
            <textarea
                id="missionStatement"
                rows={4}
                required
                placeholder="Describe your organization's mission..."
                value={data || ""}
                onChange={(e) => update(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
        </div>
    );
}

export default MissionStatement;
