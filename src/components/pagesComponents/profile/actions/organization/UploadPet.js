"use client";
import ButtonSpinner from '@/components/ui/buttonSpinner';
import Toast from '@/components/ui/Toast';
import { useUser } from '@/context/userContext';
import { storage } from '@/lib/appwrite/appwrite';
import { getPetById, updatePet, uploadPet } from '@/lib/appwrite/pets';
import { ID } from 'appwrite';
import { ImageIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import PetCategories from './upload/PetCategories';

const UploadPet = ({ setShowModel,formType = "upload",petId }) => {
  const { user } = useUser();
const [petInfo, setPetInfo] = useState({
  name: "", // Pet's name
  age: 1, // Age in years
  adoption_fees: 1, // Fee required for adoption
  specie: "", // Type of animal (e.g., Dog, Cat, Other)
  breed: "", // Specific breed
  size: "", // Size category (Small, Medium, Large)
  contact: "", // Contact email or phone
  gender: "", // Gender of the pet
  location: "", // Where the pet is located
  days_in_care: 1, // How many days the pet has been in care

  // Describes the pet's personality
  personality_and_traits: [
    "", "", "", "" // Empty personality traits
  ],

  // Who the pet is good with
  good_with: [],

  // Who the pet is not good with
  not_good_with: [],

  hair_length: "", // Hair or fur length
  color: "", // Main color of the pet

  // Health-related notes
  health_info: [],

  // A sentence or two describing the pet's dream
  my_dream: "",

  // A short biography of the pet
  bio: "",

  // Story of how the pet was rescued
  rescue_story: ""
});



console.log('got petid',petId);
console.log('got formtype',formType);
useEffect(() => {
  if (formType && petId) {
    (async () => {
      const petDetailsResponse = await getPetById(petId);
      console.log('got pet info', petDetailsResponse);
      setPetInfo(petDetailsResponse);
    })();
  }
}, [formType, petId]); // <-- Fix: dependency array


  const [mainImageFile, setMainImageFile] = useState(null);
  const [imageFiles, setImageFiles] = useState([]); // State for multiple images
  const [mainImagePreview, setMainImagePreview] = useState(null);
  const [additionalImagePreviews, setAdditionalImagePreviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      if (name === 'main_image' && files.length > 0) {
        setMainImageFile(files[0]);
        setMainImagePreview(URL.createObjectURL(files[0]));
      } else if (name === 'images' && files.length > 0) {
        const fileList = Array.from(files);
        setImageFiles(fileList);
        const previews = fileList.map((file) => URL.createObjectURL(file));
        setAdditionalImagePreviews(previews);
      }
    } else {
      setPetInfo((prevState) => ({
        ...prevState,
        [name]: ['good_with', 'not_good_with', 'health_info'].includes(name)
          ? value
          : name === 'age' || name === 'days_in_care'
            ? parseInt(value, 10) || ''
            : name === 'adoption_fees'
              ? parseFloat(value) || ''
              : value,
      }));
    }
  };

  async function uploadImage(file) {
    try {
      let uploadedImage = await storage.createFile('6799fb94000edc47b27d', ID.unique(), file);
      return uploadedImage.$id;
    } catch (error) {
      console.error('File Upload Error:', error);
      return null;
    }
  }

  async function uploadMultipleImages(files) {
    const uploadedIds = [];
    for (let file of files) {
      const imageId = await uploadImage(file);
      if (imageId) uploadedIds.push(imageId);
    }
    return uploadedIds;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.role !== 'Organization') {
      return alert('Only Organizations can upload pets.');
    }

    setLoading(true);

    try {
      setToast(false);
      // Upload main image
      let mainImgId = await uploadImage(mainImageFile);
      // Upload additional images
      let imageIds = await uploadMultipleImages(imageFiles);

      // Prepare the pet data to be uploaded
      const petData = {
        ...petInfo,
        main_image: mainImgId,
        images: imageIds,
        organization_id: user.$id,
        owner: user.$id
      };

      // const formType = "upload";

      formType === 'update'
        ? await updatePet(petId, petData)
        : await uploadPet(petData, user.status);

      setToast({ message: "Pet Upload success!", type: "success" });

      // Reset form states after submission
      setPetInfo({
        name: '',
        age: '',
        specie: 'Other',
        breed: '',
        size: '',
        contact: '',
        gender: 'Male',
        location: '',
        bio: '',
        rescue_story: '',
        personality_and_traits: [''],
        good_with: [],
        not_good_with: [],
        health_info: [''],
        my_dream: '',
        days_in_care: 0,
      });

      // close model after pet is uploaded
      setShowModel(false);

      setMainImageFile(null);
      setImageFiles([]);
    } catch (error) {
      console.error('Error:', error);
      setToast({ message: error.message, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="relative w-[90vw] h-[90vh] p-6 flex flex-col overflow-auto bg-white rounded-2xl shadow-lg">

        {/* Close Button */}
        <button
          onClick={() => setShowModel(false)} // Replace with your close function
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="p-6 bg-white shadow-md rounded-md flex flex-col space-y-6 max-w-5xl mx-auto w-full"
        >
          <h2 className="text-lg font-semibold">{formType === "upload" ? 'Upload Pet Information' : 'Update Pet Information'}</h2>

          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[220px] max-w-sm">
              <label className="block text-sm text-gray-700 mb-1">Name:</label>
              <input
                type="text"
                name="name"
                value={petInfo.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Enter pet's name"
                required
              />
            </div>

            <div className="flex-1 min-w-[120px] max-w-[150px]">
              <label className="block text-sm text-gray-700 mb-1">Age:</label>
              <input
                type="number"
                name="age"
                value={petInfo.age}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="e.g. 3"
                required
              />
            </div>

            <PetCategories handleChange={handleChange} petInfo={petInfo} />

            <div className="flex-1 min-w-[180px] max-w-sm">
              <label className="block text-sm text-gray-700 mb-1">Size:</label>
              <input
                type="text"
                name="size"
                value={petInfo.size}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="e.g. Medium"
                required
              />
            </div>

            <div className="flex-1 min-w-[200px] max-w-sm">
              <label className="block text-sm text-gray-700 mb-1">Contact:</label>
              <input
                type="text"
                name="contact"
                value={petInfo.contact}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="e.g. +92 3001234567"
                required
              />
            </div>

            <div className="flex-1 min-w-[220px] max-w-sm">
              <label className="block text-sm text-gray-700 mb-1">Location:</label>
              <input
                type="text"
                name="location"
                value={petInfo.location}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="e.g. Peshawar, Pakistan"
                required
              />
            </div>

            <div className="flex-1 min-w-[200px] max-w-sm">
              <label className="block text-sm text-gray-700 mb-1">Color:</label>
              <input
                type="text"
                name="color"
                value={petInfo.color}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="e.g. White, Black, Brown"
                required
              />
            </div>

            <div className="flex-1 min-w-[200px] max-w-sm">
              <label className="block text-sm text-gray-700 mb-1">Hair Length:</label>
              <input
                type="text"
                name="hair_length"
                value={petInfo.hair_length}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="e.g. Short, Medium, Long"
                required
              />
            </div>


            <div className="flex-1 min-w-[160px] max-w-sm">
              <label className="block text-sm text-gray-700 mb-1">Gender:</label>
              <select
                name="gender"
                value={petInfo.gender}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 w-full">
            <div className="flex-1 min-w-[250px] max-w-[50%]">
              <label className="block text-sm text-gray-700 mb-1">Bio:</label>
              <textarea
                name="bio"
                value={petInfo.bio}
                onChange={handleChange}
                className="w-full p-2 border rounded-md h-20"
                placeholder="Short description about the pet"
                required
              />
            </div>

            <div className="flex-1 min-w-[250px] max-w-[50%]">
              <label className="block text-sm text-gray-700 mb-1">Rescue Story:</label>
              <textarea
                name="rescue_story"
                value={petInfo.rescue_story}
                onChange={handleChange}
                className="w-full p-2 border rounded-md h-20"
                placeholder="How was this pet rescued?"
                required
              />
            </div>
          </div>




          <div className="flex flex-wrap gap-4 w-full">
            <div className="flex-1 min-w-[250px] max-w-[50%] space-y-4">
              <label className="block text-sm text-gray-700 mb-1">Personality & Traits:</label>

              {/* Temperament */}
              <input
                type="text"
                name="temperament"
                value={petInfo.personality_and_traits[0] || ''}
                onChange={(e) => {
                  const updatedTraits = [...petInfo.personality_and_traits];
                  updatedTraits[0] = e.target.value;
                  setPetInfo(prev => ({ ...prev, personality_and_traits: updatedTraits }));
                }}
                className="w-full p-2 border rounded-md"
                placeholder="Temperament (e.g., friendly, affectionate)"
              />

              {/* Activity Level */}
              <input
                type="text"
                name="activity_level"
                value={petInfo.personality_and_traits[1] || ''}
                onChange={(e) => {
                  const updatedTraits = [...petInfo.personality_and_traits];
                  updatedTraits[1] = e.target.value;
                  setPetInfo(prev => ({ ...prev, personality_and_traits: updatedTraits }));
                }}
                className="w-full p-2 border rounded-md"
                placeholder="Activity level (e.g., energetic, low-energy)"
              />

              {/* Special Skills */}
              <input
                type="text"
                name="special_skills"
                value={petInfo.personality_and_traits[2] || ''}
                onChange={(e) => {
                  const updatedTraits = [...petInfo.personality_and_traits];
                  updatedTraits[2] = e.target.value;
                  setPetInfo(prev => ({ ...prev, personality_and_traits: updatedTraits }));
                }}
                className="w-full p-2 border rounded-md"
                placeholder="Special skills or quirks (e.g., knows tricks)"
              />

              {/* Behavior */}
              <input
                type="text"
                name="behavior"
                value={petInfo.personality_and_traits[3] || ''}
                onChange={(e) => {
                  const updatedTraits = [...petInfo.personality_and_traits];
                  updatedTraits[3] = e.target.value;
                  setPetInfo(prev => ({ ...prev, personality_and_traits: updatedTraits }));
                }}
                className="w-full p-2 border rounded-md"
                placeholder="Behavior (e.g., good with kids)"
              />
            </div>




            <div className="flex-1 min-w-[250px] max-w-[50%]">





              {/* Health Info */}
              <label className="block text-sm text-gray-700 mb-1">Health Info: (comma sperated)</label>
              <input
                type="text"
                name="health_info"
                value={petInfo.health_info.join(', ')}
                onChange={(e) => handleChange({ target: { name: 'health_info', value: e.target.value.split(', ') } })}
                className="w-full p-2 border rounded-md"
                placeholder="Enter health details (comma separated)"
              />
              {/* My Dream */}
              <label className="block text-sm text-gray-700 mb-1">My Dream:</label>
              <textarea
                name="my_dream"
                value={petInfo.my_dream}
                onChange={handleChange}
                className="w-full p-2 border rounded-md h-20"
                placeholder="What is the pet's dream?"
              />

              <label className="block text-sm text-gray-700 mb-1">Days in care:</label>
              <input
                type="number"
                name="days_in_care"
                value={petInfo.days_in_care}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="e.g. 3"
                required
              />
            </div>

          </div>

          <div className="flex flex-wrap gap-4">
            {/* Adoption Fees */}
            <div className="flex-1 min-w-[120px] max-w-[150px]">
              <label className="block text-sm text-gray-700 mb-1">Adoption Fees ($):</label>
              <input
                type="number"
                name="adoption_fees"
                value={petInfo.adoption_fees}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="e.g. 50"
                required
              />
            </div>

            {/* Good With */}
            <div className="flex-1 min-w-[120px] max-w-[200px]">
              <label className="block text-sm text-gray-700 mb-1">Good With:</label>
              <input
                type="text"
                name="good_with"
                value={petInfo.good_with?.join(', ') || ''}
                onChange={(e) =>
                  handleChange({
                    target: {
                      name: 'good_with',
                      value: e.target.value.split(',').map((item) => item.trim()),
                    },
                  })
                }
                className="w-full p-2 border rounded-md"
                placeholder="e.g. Kids, Cats, Other Dogs"
              />
            </div>

            {/* Not Good With */}
            <div className="flex-1 min-w-[120px] max-w-[200px]">
              <label className="block text-sm text-gray-700 mb-1">Not Good With:</label>
              <input
                type="text"
                name="not_good_with"
                value={petInfo.not_good_with?.join(', ') || ''}
                onChange={(e) =>
                  handleChange({
                    target: {
                      name: 'not_good_with',
                      value: e.target.value.split(',').map((item) => item.trim()),
                    },
                  })
                }
                className="w-full p-2 border rounded-md"
                placeholder="e.g. Small pets, Loud noises"
              />
            </div>
          </div>





          <div className="flex flex-wrap gap-4 w-full">
            {/* Main Image Upload + Preview */}
            <div className="flex-1 min-w-[220px] max-w-[50%]">
              <label className="block text-sm text-gray-700 mb-1">Main Image:</label>
              <label className="flex items-center justify-center gap-2 p-2 border rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100">
                <ImageIcon className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-600">Choose Image</span>
                <input
                  type="file"
                  name="main_image"
                  accept="image/*"
                  onChange={handleChange}
                  className="hidden"
                  required
                />
              </label>
              {mainImagePreview && (
                <img
                  src={mainImagePreview}
                  alt="Main Preview"
                  className="mt-2 h-32 w-40 object-cover rounded-md border"
                />
              )}
            </div>

            {/* Additional Images Upload + Previews */}
            <div className="flex-1 min-w-[220px] max-w-[50%]">
              <label className="block text-sm text-gray-700 mb-1">Additional Images:</label>
              <label className="flex items-center justify-center gap-2 p-2 border rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100">
                <ImageIcon className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-600">Upload Multiple</span>
                <input
                  type="file"
                  name="images"
                  accept="image/*"
                  multiple
                  onChange={handleChange}
                  className="hidden"
                />
              </label>
              {additionalImagePreviews.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {additionalImagePreviews.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`Preview ${index + 1}`}
                      className="h-20 w-20 object-cover rounded-md border"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex">
            <button className="bg-primary text-white px-4 py-2 rounded-md w-full max-w-xs mx-auto">
              {loading && <ButtonSpinner />}
              {formType === "upload" ? 'Upload Pet' : 'Update Pet'}
            </button>
          </div>
        </form>

        {toast && <Toast content={toast.message} type={toast.type} />}
      </div>

    </div>

  );
};

export default UploadPet;
