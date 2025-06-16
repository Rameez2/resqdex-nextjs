"use client"
import React, { useReducer, useState } from "react";
import { updateRecord } from "@/lib/appwrite/dataForms";
import { useUser } from "@/context/userContext";
import ButtonSpinner from "@/components/ui/buttonSpinner";
import Toast from "@/components/ui/Toast";

import { Heart, Home, User, DollarSign, Calendar, Shield, PawPrint } from "lucide-react"

// ----------------- INITIAL STATE -----------------
const initialState = {
  personal_info: [
  "", // first name 
  "", // last name
  "", // Date of Birth
  "", // Phone
  "" // Email
],
  address: [
  "", // currentAddress
  "", // city
  "", // zip
  "", // state
  "", // mail address
  ],
  mail_address: [
  "", // mail address
  "", // city
  "", // zip
  "", // state
  ],
  
  household_info: [
  "", // No of Adults
  "", // No of childrens
  "", // Age of children
  "", // all agree for adoption
  "", // anyone allergic to animals (explain)
  "", // primary caregiver
  "", // type of home 
  "", // do have yard
  "", // where will pet spend most of time
  "", // where will pet sleep at night
  ],
  experience_with_pets: [
  "", // owned pets before 
  "", // type of pet owned 
  "", // how long since your last pet 
  "", // currently have pets
  "", // currently have pets (Type, Age, Neutrant or not)
  "", // current animals on vaccinations (☐ Yes ☐ No ☐ N/A)
  "", // What happened to your previous pets? (Old age, illness, lost, etc)
  "", // Have you ever surrendered a pet to a shelter or rescue (if Yes Explain)
  ], 
  lifestyle_schedule: [
  "", // how many hours per day pet will be alone?
  "", // you typical daily schedule
  "", // do you travel frquently
  "", // arrangements for pet care during travel/ vacation?
  "", // activity level
  ],
  financial_responsibility: [
  "", // prepared for pet ownership (yes,no)
  "", // prepared for emergency veterinary expenses 
  "", // How would you handle a $1,000+ emergency vet bill
  "", // Do you have pet insurance or plan to get it?
  ],
  pet_preference_expectation:[
  "", // Why do you want to adopt?
  "", // What qualities are you looking for in a pet?
  "", // What age are you interested in?
  "", // Are you willing to adopt a pet with special needs or medical conditions
  "", // What behaviors would be unacceptable to you?
  "", // Are you prepared yo work on behavioral issues with training ? ☐ Yes ☐ No
  ],
  emergency_commitment:[
  "", // If you move what will happen to your pet?
  "", // What would cause you to give up your pet?
  "", // Are you prepared for a long term commitment (10-20+ years) ? ☐ Yes ☐ No 
  "", // What would cause you to give up your pet?
  ],

};

// ----------------- MAIN COMPONENT -----------------
const AdopterQuestionnaire = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState(initialState);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const { user, setUser } = useUser();

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('fornData', formData);
      
    } catch (error) {
      
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      {/* Modal Container with Scrollable Content */}
      <div className="relative bg-white w-full max-w-2xl p-6 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>

{/* MODEL STARTS */}

 <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="h-8 w-8 text-[#8a0e10]" />
            <h1 className="text-3xl font-bold text-gray-900">Pet Adoption Application</h1>
          </div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Help us find the perfect match for you and your new companion.
          </p>
        </div>

        <form className="space-y-6">
          {/* Personal Information */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-[#8a0e10] p-4">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-white" />
                <h2 className="text-lg font-semibold text-white">Personal Information</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-[#8a0e10] p-4">
              <div className="flex items-center gap-3">
                <Home className="h-5 w-5 text-white" />
                <h2 className="text-lg font-semibold text-white">Address Information</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-md font-medium text-gray-900 mb-4">Current Address</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Street Address *</label>
                      <input
                        type="text"
                        placeholder="123 Main Street"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                      <input
                        type="text"
                        placeholder="Your city"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code *</label>
                      <input
                        type="text"
                        placeholder="12345"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent">
                        <option value="">Select your state</option>
                        <option value="ca">California</option>
                        <option value="ny">New York</option>
                        <option value="tx">Texas</option>
                        <option value="fl">Florida</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <input
                      type="checkbox"
                      id="sameAddress"
                      className="w-4 h-4 text-[#8a0e10] rounded focus:ring-[#8a0e10]"
                    />
                    <label htmlFor="sameAddress" className="text-sm text-gray-700">
                      Mailing address is the same as current address
                    </label>
                  </div>

                  <h3 className="text-md font-medium text-gray-900 mb-4">Mailing Address</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                      <input
                        type="text"
                        placeholder="123 Main Street"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                      <input
                        type="text"
                        placeholder="Your city"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                      <input
                        type="text"
                        placeholder="12345"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent">
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
            </div>
          </div>

          {/* Household Information */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-[#8a0e10] p-4">
              <div className="flex items-center gap-3">
                <Home className="h-5 w-5 text-white" />
                <h2 className="text-lg font-semibold text-white">Household Information</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Adults *</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent">
                    <option value="">Select number</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Children</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent">
                    <option value="">Select number</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4+</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ages of Children (if applicable)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 5, 8, 12"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Do all household members agree to the adoption? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input type="radio" name="agree" value="yes" className="w-4 h-4 text-[#8a0e10] mr-2" />
                      <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="agree" value="no" className="w-4 h-4 text-[#8a0e10] mr-2" />
                      <span className="text-gray-700">No</span>
                    </label>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Is anyone allergic to animals? Please explain
                  </label>
                  <textarea
                    placeholder="Describe any allergies or sensitivities"
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent resize-none"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Who will be the primary caregiver? *
                  </label>
                  <input
                    type="text"
                    placeholder="Name of primary caregiver"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type of Home *</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent">
                    <option value="">Select home type</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="condo">Condo</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Do you have a yard? *</label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input type="radio" name="yard" value="yes" className="w-4 h-4 text-[#8a0e10] mr-2" />
                      <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="yard" value="no" className="w-4 h-4 text-[#8a0e10] mr-2" />
                      <span className="text-gray-700">No</span>
                    </label>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Where will the pet spend most of its time? *
                  </label>
                  <textarea
                    placeholder="Describe where the pet will spend most of its time"
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent resize-none"
                    required
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Where will the pet sleep at night? *
                  </label>
                  <textarea
                    placeholder="Describe where the pet will sleep"
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent resize-none"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* Experience with Pets */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-[#8a0e10] p-4">
              <div className="flex items-center gap-3">
                <PawPrint className="h-5 w-5 text-white" />
                <h2 className="text-lg font-semibold text-white">Experience with Pets</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Have you owned pets before? *</label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input type="radio" name="owned" value="yes" className="w-4 h-4 text-[#8a0e10] mr-2" />
                      <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="owned" value="no" className="w-4 h-4 text-[#8a0e10] mr-2" />
                      <span className="text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What types of pets have you owned?
                  </label>
                  <textarea
                    placeholder="e.g., Dogs, cats, birds, etc."
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">How long since your last pet?</label>
                  <input
                    type="text"
                    placeholder="e.g., 2 years ago, currently have pets"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Do you currently have pets? *</label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input type="radio" name="current" value="yes" className="w-4 h-4 text-[#8a0e10] mr-2" />
                      <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="current" value="no" className="w-4 h-4 text-[#8a0e10] mr-2" />
                      <span className="text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current pets (Type, Age, Spayed/Neutered)
                  </label>
                  <textarea
                    placeholder="e.g., Dog - Golden Retriever, 5 years old, spayed"
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Are your current animals up to date on vaccinations?
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input type="radio" name="vaccinations" value="yes" className="w-4 h-4 text-[#8a0e10] mr-2" />
                      <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="vaccinations" value="no" className="w-4 h-4 text-[#8a0e10] mr-2" />
                      <span className="text-gray-700">No</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="vaccinations" value="na" className="w-4 h-4 text-[#8a0e10] mr-2" />
                      <span className="text-gray-700">N/A</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What happened to your previous pets?
                  </label>
                  <textarea
                    placeholder="e.g., Old age, illness, lost, etc."
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Have you ever surrendered a pet to a shelter or rescue?
                  </label>
                  <textarea
                    placeholder="If yes, please explain the circumstances"
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent resize-none"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* Lifestyle & Schedule */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-[#8a0e10] p-4">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-white" />
                <h2 className="text-lg font-semibold text-white">Lifestyle & Schedule</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How many hours per day will the pet be alone? *
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent">
                    <option value="">Select hours</option>
                    <option value="0-2">0-2 hours</option>
                    <option value="3-4">3-4 hours</option>
                    <option value="5-6">5-6 hours</option>
                    <option value="7-8">7-8 hours</option>
                    <option value="9+">9+ hours</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Describe your typical daily schedule *
                  </label>
                  <textarea
                    placeholder="e.g., Work 9-5, home evenings and weekends"
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent resize-none"
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Do you travel frequently? *</label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input type="radio" name="travel" value="yes" className="w-4 h-4 text-[#8a0e10] mr-2" />
                      <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="travel" value="no" className="w-4 h-4 text-[#8a0e10] mr-2" />
                      <span className="text-gray-700">No</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="travel" value="sometimes" className="w-4 h-4 text-[#8a0e10] mr-2" />
                      <span className="text-gray-700">Sometimes</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What arrangements will you make for pet care during travel/vacation? *
                  </label>
                  <textarea
                    placeholder="e.g., Pet sitter, boarding, family member"
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent resize-none"
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">What is your activity level? *</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent">
                    <option value="">Select activity level</option>
                    <option value="low">Low - Prefer quiet activities</option>
                    <option value="moderate">Moderate - Some outdoor activities</option>
                    <option value="high">High - Very active, lots of outdoor time</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Responsibility */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-[#8a0e10] p-4">
              <div className="flex items-center gap-3">
                <DollarSign className="h-5 w-5 text-white" />
                <h2 className="text-lg font-semibold text-white">Financial Responsibility</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Are you financially prepared for pet ownership? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input type="radio" name="prepared" value="yes" className="w-4 h-4 text-[#8a0e10] mr-2" />
                      <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="prepared" value="no" className="w-4 h-4 text-[#8a0e10] mr-2" />
                      <span className="text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Are you prepared for emergency veterinary expenses? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input type="radio" name="emergency" value="yes" className="w-4 h-4 text-[#8a0e10] mr-2" />
                      <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="emergency" value="no" className="w-4 h-4 text-[#8a0e10] mr-2" />
                      <span className="text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How would you handle a $1,000+ emergency vet bill? *
                  </label>
                  <textarea
                    placeholder="e.g., Savings, credit card, payment plan, pet insurance"
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent resize-none"
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Do you have pet insurance or plan to get it?
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input type="radio" name="insurance" value="have" className="w-4 h-4 text-[#8a0e10] mr-2" />
                      <span className="text-gray-700">Already have it</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="insurance" value="plan" className="w-4 h-4 text-[#8a0e10] mr-2" />
                      <span className="text-gray-700">Plan to get it</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="insurance" value="no" className="w-4 h-4 text-[#8a0e10] mr-2" />
                      <span className="text-gray-700">No</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pet Preferences & Expectations */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-[#8a0e10] p-4">
              <div className="flex items-center gap-3">
                <Heart className="h-5 w-5 text-white" />
                <h2 className="text-lg font-semibold text-white">Pet Preferences & Expectations</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Why do you want to adopt a pet? *
                  </label>
                  <textarea
                    placeholder="Tell us your motivation for adopting"
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent resize-none"
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What qualities are you looking for in a pet? *
                  </label>
                  <textarea
                    placeholder="e.g., Friendly, calm, playful, good with children"
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent resize-none"
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What age are you interested in? *
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent">
                    <option value="">Select age preference</option>
                    <option value="puppy-kitten">Puppy/Kitten (0-1 year)</option>
                    <option value="young">Young (1-3 years)</option>
                    <option value="adult">Adult (3-7 years)</option>
                    <option value="senior">Senior (7+ years)</option>
                    <option value="no-preference">No preference</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Are you willing to adopt a pet with special needs or medical conditions?
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input type="radio" name="special" value="yes" className="w-4 h-4 text-[#8a0e10] mr-2" />
                      <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="special" value="no" className="w-4 h-4 text-[#8a0e10] mr-2" />
                      <span className="text-gray-700">No</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="special" value="depends" className="w-4 h-4 text-[#8a0e10] mr-2" />
                      <span className="text-gray-700">Depends on the condition</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What behaviors would be unacceptable to you?
                  </label>
                  <textarea
                    placeholder="e.g., Aggression, excessive barking, destructive behavior"
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Are you prepared to work on behavioral issues with training? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input type="radio" name="training" value="yes" className="w-4 h-4 text-[#8a0e10] mr-2" />
                      <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="training" value="no" className="w-4 h-4 text-[#8a0e10] mr-2" />
                      <span className="text-gray-700">No</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency & Commitment */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-[#8a0e10] p-4">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-white" />
                <h2 className="text-lg font-semibold text-white">Emergency & Commitment</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    If you move, what will happen to your pet? *
                  </label>
                  <textarea
                    placeholder="Describe your plan for keeping your pet if you move"
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent resize-none"
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What would cause you to give up your pet? *
                  </label>
                  <textarea
                    placeholder="Be honest about circumstances that might lead to rehoming"
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent resize-none"
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Are you prepared for a long-term commitment (10-20+ years)? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input type="radio" name="commitment" value="yes" className="w-4 h-4 text-[#8a0e10] mr-2" />
                      <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="commitment" value="no" className="w-4 h-4 text-[#8a0e10] mr-2" />
                      <span className="text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional information or questions
                  </label>
                  <textarea
                    placeholder="Anything else you'd like us to know?"
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8a0e10] focus:border-transparent resize-none"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              className="px-8 py-3 bg-[#8a0e10] text-white font-medium rounded-md hover:bg-[#6b0b0d] transition-colors duration-200 flex items-center gap-2"
            >
              <Heart className="h-5 w-5" />
              Submit Application
            </button>
          </div>

          {/* Footer Message */}
          <div className="text-center pt-4">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 max-w-2xl mx-auto">
              <p className="text-gray-600 text-sm">
                <span className="font-medium text-gray-800">Thank you for choosing Resqdex!</span>
                <br />
                Your application will be reviewed within 2-3 business days.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>




      </div>
      {toast && <Toast content={toast.message} type={toast.type} />}
    </div>
  );
};

export default AdopterQuestionnaire;
