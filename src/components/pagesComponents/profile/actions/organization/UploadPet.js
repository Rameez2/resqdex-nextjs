"use client"
import ButtonSpinner from '@/components/atoms/buttonSpinner';
import Toast from '@/components/atoms/Toast';
import { useUser } from '@/context/userContext';
import { storage } from '@/lib/appwrite/appwrite';
import { uploadPet } from '@/lib/appwrite/pets';
import { ID } from 'appwrite';
import React, { useState } from 'react';
 
const UploadPet = () => {
  const { user } = useUser();
  const [petInfo, setPetInfo] = useState({
    name: 'next pet',
    age: 3,
    specie: 'Other',
    breed: 'Persian',
    size: 'Medium',
    temperament: 'Friendly',
    contact: '+92 3051088667',
    gender: 'Male',
    location: 'Peshawar, Pakistan',
    bio: 'hehehnext',
    rescue_story: 'next rescue',
  });

  const [mainImageFile, setMainImageFile] = useState(null);
  const [imageFiles, setImageFiles] = useState([]); // State for multiple images
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState(null);


  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      if (name === 'main_image') {
        setMainImageFile(files[0]); // Directly update the mainImageFile state
      } else if (name === 'images') {
        setImageFiles(files); // Directly update the imageFiles state
      }
    } else {
      setPetInfo((prevState) => ({
        ...prevState,
        [name]: name === 'age' ? parseInt(value, 10) || '' : value,
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
      setError(null);
      setShowToast(false);
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
      };

      const formType = "upload";

      formType === 'update'
        ? await updatePetById(petId, petData)
        : await uploadPet(petData);

      // alert('Pet uploaded successfully!');
      setShowToast(true);
      // Reset form states after submission
      setPetInfo({
        name: '',
        age: '',
        specie: 'Other',
        breed: '',
        size: '',
        temperament: '',
        contact: '',
        gender: 'Male',
        location: '',
        bio: '',
        rescue_story: '',
        images: [],
      });

      setMainImageFile(null);
      setImageFiles([]);
    } catch (error) {
      console.error('Error:', error);
      // alert('Failed to upload pet.');
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 flex flex-col h-full max-h-[90vh] overflow-auto">
      <form
        onSubmit={handleSubmit}
        className="p-4 bg-white shadow-md rounded-md flex flex-col space-y-4"
      >
        <h2 className="text-lg font-semibold mb-4">Upload Pet Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Name:</label>
            <input
              type="text"
              name="name"
              value={petInfo.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Age:</label>
            <input
              type="number"
              name="age"
              value={petInfo.age}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Specie:</label>
            <select
              name="specie"
              value={petInfo.specie}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="Other">Other</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Breed:</label>
            <input
              type="text"
              name="breed"
              value={petInfo.breed}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Size:</label>
            <input
              type="text"
              name="size"
              value={petInfo.size}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Temperament:</label>
            <input
              type="text"
              name="temperament"
              value={petInfo.temperament}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Contact:</label>
            <input
              type="text"
              name="contact"
              value={petInfo.contact}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Location:</label>
            <input
              type="text"
              name="location"
              value={petInfo.location}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-gray-700">Bio:</label>
            <textarea
              name="bio"
              value={petInfo.bio}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-gray-700">Rescue Story:</label>
            <textarea
              name="rescue_story"
              value={petInfo.rescue_story}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Gender:</label>
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

          <div>
            <label className="block text-gray-700">Main Image:</label>
            <input
              type="file"
              name="main_image"
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Additional Images:</label>
            <input
              type="file"
              name="images"
              multiple
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>

        <div className="mt-4">
          <button className="bg-[#E17716] text-white px-4 py-2 rounded-md">
            {loading && <ButtonSpinner />}
            Upload Pet
          </button>
        </div>
      </form>
      {showToast ?
        <Toast content='Pet Uploaded Successfully!' type='success' /> : ''
      }
      {error && <Toast content={error} type="error" />}
    </div>
  );
};

export default UploadPet;
