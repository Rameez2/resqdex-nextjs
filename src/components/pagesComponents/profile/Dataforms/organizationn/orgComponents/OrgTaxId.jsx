import React, { useState } from 'react';

const OrgTaxId = ({ data, onChange }) => {
    const [isQualified, setIsQualified] = useState(false);

    const update = (value) => {
        onChange(value); // give updated data to onChange
    };

    return (
        <>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200 flex items-center flex-col">
                    <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        Organization Qualification
                    </h2>
                    <p className="text-gray-600 mt-1">Verify your organization's status and credentials</p>
                </div>
                <div className="p-6 space-y-6">
                    <div className="space-y-4">
                        <div className="space-y-3">
                            <label className="block text-sm font-medium text-red-600">
                                Does your organization qualify as any of the following? (You may be asked to provide supporting
                                documentation):
                            </label>

                            <div className="bg-gray-50 p-4 rounded-lg">
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <span>Federal 501(c)(3) non-profit</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <span>State tax-exempt non-profit</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <span>Revenue Canada non-profit</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <span>Governmental, Municipal, or Tribal Agency</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex items-center space-x-6">
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        id="qualification-yes"
                                        name="organizationQualification"
                                        value="yes"
                                        onChange={() => setIsQualified(true)}
                                        className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500"
                                    />
                                    <label htmlFor="qualification-yes" className="text-sm font-medium text-red-600">
                                        Yes
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        id="qualification-no"
                                        name="organizationQualification"
                                        value="no"
                                        onChange={() => setIsQualified(false)}
                                        className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500"
                                    />
                                    <label htmlFor="qualification-no" className="text-sm font-medium text-red-600">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>

                        {isQualified && (
                            <div className="space-y-2">
                                <label htmlFor="taxIdNumber" className="block text-sm font-medium text-gray-700">
                                    Tax ID Number
                                </label>
                                <input
                                    type="text"
                                    id="taxIdNumber"
                                    placeholder="Enter your Tax ID Number"
                                    value={data || ""}
                                    onChange={(e) => update(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                                />
                                <p className="text-xs text-gray-500">
                                    Please provide your organization's Tax ID or EIN number for verification purposes.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrgTaxId;
