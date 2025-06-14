import React from 'react';
import { Users } from "lucide-react";

const OrgAdoptAmbassador = ({ data, onChange }) => {

    const update = (index, value) => {
        const updated = [...data];
        updated[index] = value;
        onChange(updated); // give updated data to onChange
    };


    return (
        <>
            <div className="bg-green-50 rounded-lg shadow-sm border border-green-200">
                <div className="p-6 border-b border-green-200">
                    <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                            <Users className="w-5 h-5 text-white" />
                        </div>
                        Adoption Ambassador
                    </h2>
                    <p className="text-green-700 mt-1">The person who posts pets to the site for adopters to see</p>
                </div>
                <div className="p-6 space-y-6">
                    <div className="bg-green-100 p-4 rounded-lg border border-green-200">
                        <p className="text-sm text-green-800 font-medium">All info same as "Main Shelter/Rescue Contact"</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="ambassadorFirst" className="block text-sm font-medium text-gray-700">First Name</label>
                            <input
                                type="text"
                                id="ambassadorFirst"
                                placeholder="First name"
                                value={data[0] || ""}
                                onChange={(e) => update(0, e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="ambassadorLast" className="block text-sm font-medium text-gray-700">Last Name</label>
                            <input
                                type="text"
                                id="ambassadorLast"
                                placeholder="Last name"
                                value={data[1] || ""}
                                onChange={(e) => update(1, e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="ambassadorPhone" className="block text-sm font-medium text-gray-700">Phone</label>
                            <input
                                type="tel"
                                id="ambassadorPhone"
                                placeholder="Phone number"
                                value={data[2] || ""}
                                onChange={(e) => update(2, e.target.value)}

                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="ambassadorExt" className="block text-sm font-medium text-gray-700">Phone Ext</label>
                            <input
                                type="text"
                                id="ambassadorExt"
                                placeholder="Extension"
                                value={data[3] || ""}
                                onChange={(e) => update(3, e.target.value)}

                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="ambassadorEmail" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="ambassadorEmail"
                                placeholder="Email address"
                                value={data[4] || ""}
                                onChange={(e) => update(4, e.target.value)}

                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                        {/* <div className="space-y-2">
              <label htmlFor="ambassadorVerifyEmail" className="block text-sm font-medium text-gray-700">Verify Email</label>
              <input
                type="email"
                id="ambassadorVerifyEmail"
                placeholder="Confirm email"
                value={data.verifyEmail || ""}
                onChange={handleChange("verifyEmail")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div> */}
                    </div>

                    <span>Will be used by person to log in</span>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="ambassadorPassword" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="ambassadorPassword"
                                placeholder="Password"
                                value={data[5] || ""}
                                onChange={(e) => update(5, e.target.value)}

                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                        {/* <div className="space-y-2">
              <label htmlFor="ambassadorConfirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="ambassadorConfirmPassword"
                placeholder="Confirm Password"
                value={data.confirmPassword || ""}
                onChange={handleChange("confirmPassword")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div> */}
                    </div>
                    <span>Password must be at least 6 characters long, contain 1 capital, 1 lowercase, 1 number, and 1 special character</span>
                </div>
            </div>
        </>
    );
};

export default OrgAdoptAmbassador;
