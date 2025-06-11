export default function ShelterForm() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Shelter Registration</h1>
          <p className="text-lg text-gray-600">Join our network of animal rescue organizations</p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium border rounded-full text-red-600 border-red-200 bg-red-50">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              Required fields
            </span>
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium border rounded-full text-green-600 border-green-200 bg-green-50">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Private information
            </span>
          </div>
        </div>

        <form className="space-y-8">
          {/* General Information */}
          <div className="rounded-lg shadow-lg border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
            <div className="p-6 pb-4 border-b border-gray-100">
              <h2 className="flex items-center gap-2 text-xl font-semibold">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                General Information
              </h2>
              <p className="text-sm text-gray-500 mt-1">Basic details about your shelter or rescue organization</p>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="shelterName" className="block text-sm font-medium text-gray-700">
                    General Shelter/Rescue Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="shelterName"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="directorName" className="block text-sm font-medium text-gray-700">
                    Director/Manager Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="directorName"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="organizationType" className="block text-sm font-medium text-gray-700">
                  Type of Organization <span className="text-red-500">*</span>
                </label>
                <select
                  id="organizationType"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select organization type</option>
                  <option value="shelter">Animal Shelter</option>
                  <option value="rescue">Rescue Organization</option>
                  <option value="sanctuary">Animal Sanctuary</option>
                  <option value="nonprofit">Non-Profit Organization</option>
                </select>
              </div>
            </div>
          </div>

          {/* Organization Address */}
          <div className="rounded-lg shadow-lg border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
            <div className="p-6 pb-4 border-b border-gray-100">
              <h2 className="flex items-center gap-2 text-xl font-semibold">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                Organization Address
              </h2>
              <p className="text-sm text-gray-500 mt-1">Physical location of your organization</p>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="address"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="city"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                    Zip/Postal Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="zipCode"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mailing Address */}
          <div className="rounded-lg shadow-lg border-0 bg-green-50/80 backdrop-blur-sm border-green-200 overflow-hidden">
            <div className="p-6 pb-4 border-b border-green-100">
              <h2 className="flex items-center gap-2 text-xl font-semibold text-green-800">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                Mailing Address
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-600 border border-green-300 ml-2">
                  Private
                </span>
              </h2>
              <p className="text-sm text-green-700 mt-1">Address for correspondence (not seen by public)</p>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="mailingAddress" className="block text-sm font-medium text-green-800">
                    Address
                  </label>
                  <input
                    id="mailingAddress"
                    type="text"
                    className="w-full px-3 py-2 bg-white/80 border border-green-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="mailingCity" className="block text-sm font-medium text-green-800">
                    City
                  </label>
                  <input
                    id="mailingCity"
                    type="text"
                    className="w-full px-3 py-2 bg-white/80 border border-green-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="mailingState" className="block text-sm font-medium text-green-800">
                    State
                  </label>
                  <input
                    id="mailingState"
                    type="text"
                    className="w-full px-3 py-2 bg-white/80 border border-green-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="mailingZip" className="block text-sm font-medium text-green-800">
                    Zip/Postal Code
                  </label>
                  <input
                    id="mailingZip"
                    type="text"
                    className="w-full px-3 py-2 bg-white/80 border border-green-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Adoption Ambassador */}
          <div className="rounded-lg shadow-lg border-0 bg-green-50/80 backdrop-blur-sm border-green-200 overflow-hidden">
            <div className="p-6 pb-4 border-b border-green-100">
              <h2 className="flex items-center gap-2 text-xl font-semibold text-green-800">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Adoption Ambassador
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-600 border border-green-300 ml-2">
                  Private
                </span>
              </h2>
              <p className="text-sm text-green-700 mt-1">Primary contact for adoption inquiries</p>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="ambassadorFirstName" className="block text-sm font-medium text-green-800">
                    First Name
                  </label>
                  <input
                    id="ambassadorFirstName"
                    type="text"
                    className="w-full px-3 py-2 bg-white/80 border border-green-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="ambassadorLastName" className="block text-sm font-medium text-green-800">
                    Last Name
                  </label>
                  <input
                    id="ambassadorLastName"
                    type="text"
                    className="w-full px-3 py-2 bg-white/80 border border-green-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="ambassadorPhone" className="block text-sm font-medium text-green-800">
                    Phone
                  </label>
                  <input
                    id="ambassadorPhone"
                    type="tel"
                    className="w-full px-3 py-2 bg-white/80 border border-green-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="ambassadorPhoneExt" className="block text-sm font-medium text-green-800">
                    Phone Ext
                  </label>
                  <input
                    id="ambassadorPhoneExt"
                    type="text"
                    className="w-full px-3 py-2 bg-white/80 border border-green-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="ambassadorEmail" className="block text-sm font-medium text-green-800">
                    Email
                  </label>
                  <input
                    id="ambassadorEmail"
                    type="email"
                    className="w-full px-3 py-2 bg-white/80 border border-green-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="ambassadorVerifyEmail" className="block text-sm font-medium text-green-800">
                    Verify Email
                  </label>
                  <input
                    id="ambassadorVerifyEmail"
                    type="email"
                    className="w-full px-3 py-2 bg-white/80 border border-green-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Veterinarian Information */}
          <div className="rounded-lg shadow-lg border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
            <div className="p-6 pb-4 border-b border-gray-100">
              <h2 className="flex items-center gap-2 text-xl font-semibold">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                Veterinarian Information
              </h2>
              <p className="text-sm text-gray-500 mt-1">Primary veterinary care provider</p>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="vetName" className="block text-sm font-medium text-gray-700">
                    Vet Name
                  </label>
                  <input
                    id="vetName"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="vetPhone" className="block text-sm font-medium text-gray-700">
                    Vet Phone
                  </label>
                  <input
                    id="vetPhone"
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="vetPhoneExt" className="block text-sm font-medium text-gray-700">
                  Vet Phone Ext
                </label>
                <input
                  id="vetPhoneExt"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 max-w-xs"
                />
              </div>
            </div>
          </div>

          {/* About Your Organization */}
          <div className="rounded-lg shadow-lg border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
            <div className="p-6 pb-4 border-b border-gray-100">
              <h2 className="flex items-center gap-2 text-xl font-semibold">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                About Your Organization
              </h2>
              <p className="text-sm text-gray-500 mt-1">Tell us about your mission and work</p>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-2">
                <label htmlFor="organizationDescription" className="block text-sm font-medium text-gray-700">
                  Organization Description
                </label>
                <textarea
                  id="organizationDescription"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 min-h-[100px] resize-vertical"
                  placeholder="Tell us about your organization's mission, history, and the work you do..."
                />
              </div>
            </div>
          </div>

          {/* Adoption Information */}
          <div className="rounded-lg shadow-lg border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
            <div className="p-6 pb-4 border-b border-gray-100">
              <h2 className="flex items-center gap-2 text-xl font-semibold">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
                Adoption Information
              </h2>
              <p className="text-sm text-gray-500 mt-1">Details about your adoption process and fees</p>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="highestFee" className="block text-sm font-medium text-gray-700">
                    Highest Adoption Fee
                  </label>
                  <input
                    id="highestFee"
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="$0"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lowestFee" className="block text-sm font-medium text-gray-700">
                    Lowest Adoption Fee
                  </label>
                  <input
                    id="lowestFee"
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="$0"
                  />
                </div>
              </div>

              <hr className="border-gray-200" />

              <div className="space-y-4">
                <label className="block text-base font-semibold text-gray-700">
                  Types of Animals You Have Adopted Out
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="dogs"
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="dogs" className="text-sm font-medium text-gray-700 cursor-pointer">
                      Dogs
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="cats"
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="cats" className="text-sm font-medium text-gray-700 cursor-pointer">
                      Cats
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="horses"
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="horses" className="text-sm font-medium text-gray-700 cursor-pointer">
                      Horses
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="reptiles"
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="reptiles" className="text-sm font-medium text-gray-700 cursor-pointer">
                      Reptiles
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="pocketPets"
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="pocketPets" className="text-sm font-medium text-gray-700 cursor-pointer">
                      Pocket Pets
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="rabbits"
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="rabbits" className="text-sm font-medium text-gray-700 cursor-pointer">
                      Rabbits
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="farmAnimals"
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="farmAnimals" className="text-sm font-medium text-gray-700 cursor-pointer">
                      Farm Animals
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="birds"
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="birds" className="text-sm font-medium text-gray-700 cursor-pointer">
                      Birds
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="exotics"
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="exotics" className="text-sm font-medium text-gray-700 cursor-pointer">
                      Exotics
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="fish"
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="fish" className="text-sm font-medium text-gray-700 cursor-pointer">
                      Fish
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="ferrets"
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="ferrets" className="text-sm font-medium text-gray-700 cursor-pointer">
                      Ferrets
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="currentAnimals" className="block text-sm font-medium text-gray-700">
                  Current Animals Available
                </label>
                <input
                  id="currentAnimals"
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Number of animals currently available"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="animalAcquisition" className="block text-sm font-medium text-gray-700">
                  How do you acquire animals?
                </label>
                <textarea
                  id="animalAcquisition"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 min-h-[80px] resize-vertical"
                  placeholder="Describe how animals come to your organization..."
                />
              </div>
            </div>
          </div>

          {/* Medical Care and Policies */}
          <div className="rounded-lg shadow-lg border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
            <div className="p-6 pb-4 border-b border-gray-100">
              <h2 className="flex items-center gap-2 text-xl font-semibold">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Medical Care & Policies
              </h2>
              <p className="text-sm text-gray-500 mt-1">Information about medical care and adoption policies</p>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-2">
                <label htmlFor="medicalCare" className="block text-sm font-medium text-gray-700">
                  Standard Medical Care
                </label>
                <textarea
                  id="medicalCare"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[80px] resize-vertical"
                  placeholder="Describe the standard medical care provided to animals..."
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="spayNeuter" className="block text-sm font-medium text-gray-700">
                  Are all animals spayed/neutered?
                </label>
                <select
                  id="spayNeuter"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select option</option>
                  <option value="yes-always">Yes, always</option>
                  <option value="yes-when-age-appropriate">Yes, when age appropriate</option>
                  <option value="no">No</option>
                  <option value="varies">Varies by situation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="adoptionPolicies" className="block text-sm font-medium text-gray-700">
                  Adoption Policies
                </label>
                <textarea
                  id="adoptionPolicies"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[100px] resize-vertical"
                  placeholder="Describe your adoption policies and requirements..."
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="adoptionProcess" className="block text-sm font-medium text-gray-700">
                  Adoption Process
                </label>
                <textarea
                  id="adoptionProcess"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[100px] resize-vertical"
                  placeholder="Describe your step-by-step adoption process..."
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="adoptionContract"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="adoptionContract" className="text-sm font-medium text-gray-700 cursor-pointer">
                  Do you have an adoption contract? (PDF)
                </label>
              </div>

              <div className="space-y-2">
                <label htmlFor="missionStatement" className="block text-sm font-medium text-gray-700">
                  Mission Statement
                </label>
                <textarea
                  id="missionStatement"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[100px] resize-vertical"
                  placeholder="Share your organization's mission statement..."
                />
              </div>
            </div>
          </div>

          {/* Online Presence */}
          <div className="rounded-lg shadow-lg border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
            <div className="p-6 pb-4 border-b border-gray-100">
              <h2 className="flex items-center gap-2 text-xl font-semibold">
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                Online Presence
              </h2>
              <p className="text-sm text-gray-500 mt-1">Your organization's digital footprint</p>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-2">
                <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                  Website
                </label>
                <input
                  id="website"
                  type="url"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="https://your-website.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="facebook" className="block text-sm font-medium text-gray-700">
                    Facebook
                  </label>
                  <input
                    id="facebook"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Facebook page URL or handle"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">
                    Instagram
                  </label>
                  <input
                    id="instagram"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Instagram handle"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="otherSocial" className="block text-sm font-medium text-gray-700">
                  Other Social Media
                </label>
                <input
                  id="otherSocial"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Other social media platforms"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-8">
            <button
              type="submit"
              className="px-12 py-3 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-md shadow-lg transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
