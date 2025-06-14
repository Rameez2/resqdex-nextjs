import React from 'react';

const OrgDetailsComp = ({ orgData }) => {

    const animalsList = [
        { name: "Dogs", available: true },
        { name: "Cats", available: false },
        { name: "Horses", available: true },
        { name: "Pigs", available: false },
        { name: "Pocket Pets", available: false },
        { name: "Rabbits", available: true },
        { name: "Small & Furry", available: false },
        { name: "Birds", available: true },
        { name: "Exotics", available: false },
        { name: "Farm", available: false },
        { name: "Ferrets", available: true },
    ]

    const websiteLinks = [
        "https://www.petfinder.org",
        "https://facebook.com/YourShelterName",
        "https://instagram.com/yourshelter",
        "https://twitter.com/yourshelter",
    ]

    console.log('orgData', orgData);


    return (
        <>
<div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Organization Details</h1>
          <p className="text-gray-600 text-lg">Review and manage shelter information</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Shelter Information */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-orange-600">Shelter Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Shelter Name</label>
                    <p className="text-gray-900 font-medium">Happy Tails Animal Shelter</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Executive Director</label>
                    <p className="text-gray-900 font-medium">Sarah Johnson</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Gender</label>
                    <p className="text-gray-900 font-medium">Both</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Email</label>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="text-gray-900 font-medium">sarah.johnson@happytails.org</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

                {/* Hours */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                    <div className="bg-slate-50 border-b border-gray-200 px-6 py-4 rounded-t-lg">
                        <h2 className="text-lg font-semibold text-slate-700 flex items-center gap-2">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            Operating Hours
                        </h2>
                    </div>
                    <div className="p-6">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-200">
                                        <th className="text-left py-2 font-medium">Day</th>
                                        <th className="text-left py-2 font-medium">Opening Time</th>
                                        <th className="text-left py-2 font-medium">Closing Time</th>
                                        <th className="text-left py-2 font-medium">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-100">
                                        <td className="py-2 font-medium">Monday</td>
                                        <td className="py-2 text-gray-600">{orgData.hours[6].split("-")[0]}</td>
                                        <td className="py-2 text-gray-600">{orgData.hours[6].split("-")[1]}</td>
                                        <td className="py-2">
                                            {orgData.hours[6] === "Closed" ? 
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                Close
                                            </span> :
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                Open
                                            </span>
                                            }
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="py-2 font-medium">Tuesday</td>
                                        <td className="py-2 text-gray-600">{orgData.hours[5].split("-")[0]}</td>
                                        <td className="py-2 text-gray-600">{orgData.hours[5].split("-")[1]}</td>
                                        <td className="py-2">
                                            {orgData.hours[5] === "Closed" ? 
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                Close
                                            </span> :
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                Open
                                            </span>
                                            }
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="py-2 font-medium">Wednesday</td>
                                        <td className="py-2 text-gray-600">{orgData.hours[4].split("-")[0]}</td>
                                        <td className="py-2 text-gray-600">{orgData.hours[4].split("-")[1]}</td>
                                        <td className="py-2">
                                            {orgData.hours[4] === "Closed" ? 
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                Close
                                            </span> :
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                Open
                                            </span>
                                            }
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="py-2 font-medium">Thursday</td>
                                        <td className="py-2 text-gray-600">{orgData.hours[3].split("-")[0]}</td>
                                        <td className="py-2 text-gray-600">{orgData.hours[3].split("-")[1]}</td>
                                        <td className="py-2">
                                            {orgData.hours[3] === "Closed" ? 
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                Close
                                            </span> :
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                Open
                                            </span>
                                            }
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="py-2 font-medium">Friday</td>
                                        <td className="py-2 text-gray-600">{orgData.hours[2].split("-")[0]}</td>
                                        <td className="py-2 text-gray-600">{orgData.hours[2].split("-")[1]}</td>
                                        <td className="py-2">
                                            {orgData.hours[2] === "Closed" ? 
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                Close
                                            </span> :
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                Open
                                            </span>
                                            }
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="py-2 font-medium">Saturday</td>
                                        <td className="py-2 text-gray-600">{orgData.hours[1].split("-")[0]}</td>
                                        <td className="py-2 text-gray-600">{orgData.hours[1].split("-")[1]}</td>
                                        <td className="py-2">
                                            {orgData.hours[1] === "Closed" ? 
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                Close
                                            </span> :
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                Open
                                            </span>
                                            }
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="py-2 font-medium">Sunday</td>
                                        <td className="py-2 text-gray-600">{orgData.hours[0].split("-")[0]}</td>
                                        <td className="py-2 text-gray-600">{orgData.hours[0].split("-")[1]}</td>
                                        <td className="py-2">

                                            {orgData.hours[0] === "Closed" ? 
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                Close
                                            </span> :
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                Open
                                            </span>
                                            }

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            {/* Address Information */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-orange-600">Address Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">Physical Address</h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="font-medium">1234 Pleasant Lane</p>
                    <p>Springfield, IL 62704</p>
                    <p>USA</p>
                    <div className="flex items-center mt-3">
                      <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <p className="font-medium">(217) 555-0198</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">Mailing Address</h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="font-medium">P.O. Box 456</p>
                    <p>Springfield, IL 62704</p>
                    <p>USA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-orange-600">Key Contacts</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">Adoption Ambassador</h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="font-medium text-gray-900">Michael Thompson</p>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <p>(217) 555-0123</p>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <p>michael.thompson@happytails.org</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">Veterinarian Info</h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="font-medium text-gray-900">Dr. Lisa Green</p>
                    <p>(217) 555-0456</p>
                    <p>
                      <span className="font-medium">Tax ID:</span> 12-3456789
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Animals & Adoption */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-orange-600">Animals & Adoption</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 text-lg">Animals Adopted</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {animalsList.map((animal, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium ${
                          animal.available
                            ? "bg-green-100 text-green-800 border border-green-200"
                            : "bg-gray-100 text-gray-600 border border-gray-200"
                        }`}
                      >
                        <span>{animal.name}</span>
                        {animal.available ? (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg flex items-center">
                    <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                    Adoption Fees
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                      <p className="text-sm text-green-600 font-medium">Highest Fee</p>
                      <p className="text-xl font-bold text-green-800">$250</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                      <p className="text-sm text-blue-600 font-medium">Lowest Fee</p>
                      <p className="text-xl font-bold text-blue-800">$25</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Medical & Operations */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-orange-600">Medical & Operations</h2>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Current Animals</h3>
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 text-center">
                      <p className="text-3xl font-bold text-orange-800">25</p>
                      <p className="text-sm text-orange-600">Animals in care</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Adoption Contract</h3>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <p className="text-gray-700 text-sm">Standard Adoption Contract</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">Animal Source</h3>
                  <p className="text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-200">
                    Owner Surrenders, Strays, Transfers from other shelters
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">Medical & Adoption</h3>
                  <div className="space-y-2 text-gray-700 text-sm">
                    <div className="flex items-start">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p>All animals receive full medical screening and necessary vaccinations</p>
                    </div>
                    <div className="flex items-start">
                      <svg
                        className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <p>No additional services</p>
                    </div>
                    <div className="flex items-start">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p>All animals are sterilized prior to adoption unless medically exempt</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission & Policies */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-orange-600">Mission & Policies</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">Mission</h3>
                  <p className="text-gray-700 bg-orange-50 p-4 rounded-lg border border-orange-200 leading-relaxed">
                    To provide a safe haven for homeless animals and promote compassionate, lifelong adoptions.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">Adoption Process</h3>
                  <p className="text-gray-700 bg-blue-50 p-4 rounded-lg border border-blue-200 leading-relaxed">
                    Submit an application, attend an interview, and complete the adoption agreement upon approval.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">Adoption Policies</h3>
                  <p className="text-gray-700 bg-green-50 p-4 rounded-lg border border-green-200 leading-relaxed">
                    We require a home visit, advance checks, and medical-spay sessions with all adoptions.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">Adoption Link</h3>
                  <a
                    href="https://www.facebook.com/happytails.org"
                    className="text-orange-600 hover:text-orange-700 bg-orange-50 p-4 rounded-lg border border-orange-200 block hover:bg-orange-100 transition-colors"
                  >
                    https://www.facebook.com/happytails.org
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Online Presence */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 mt-8">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-orange-600">Online Presence</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {websiteLinks.map((link, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 rounded-xl bg-orange-50 hover:bg-orange-100 transition-colors border border-orange-200 hover:border-orange-300 group"
              >
                <svg
                  className="w-5 h-5 text-orange-600 mr-3 group-hover:text-orange-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                <span className="text-orange-700 group-hover:text-orange-800 font-medium truncate">
                  {link.replace("https://", "").replace("www.", "")}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 pb-4">
          <button className="flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Approve Organization
          </button>
          <button className="flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Reject Application
          </button>
        </div> */}
      </div>
    </div>
        </>
    );
}

export default OrgDetailsComp;


