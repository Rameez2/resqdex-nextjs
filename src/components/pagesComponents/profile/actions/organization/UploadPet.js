"use client";
import ButtonSpinner from '@/components/ui/buttonSpinner';
import Toast from '@/components/ui/Toast';
import { useUser } from '@/context/userContext';
import { storage } from '@/lib/appwrite/appwrite';
import { uploadPet } from '@/lib/appwrite/pets';
import { ID } from 'appwrite';
import { ImageIcon } from 'lucide-react';
import React, { useState } from 'react';

const UploadPet = () => {
  const { user } = useUser();
  const [petInfo, setPetInfo] = useState({
    name: '',
    age: 3,
    specie: 'Other',
    breed: '',
    size: '',
    temperament: '',
    contact: '',
    gender: 'Male',
    location: '',
    bio: '',
    rescue_story: '',
  });

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
      };

      const formType = "upload";

      formType === 'update'
        ? await updatePetById(petId, petData)
        : await uploadPet(petData);

        setToast({ message: "Pet Upload success!", type: "success" });

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
      setToast({ message: error.message, type: "success" });

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 flex flex-col h-full max-h-[90vh] overflow-auto">
<form
  onSubmit={handleSubmit}
  className="p-6 bg-white shadow-md rounded-md flex flex-col space-y-6 max-w-5xl mx-auto w-full"
>
  <h2 className="text-lg font-semibold">Upload Pet Information</h2>

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

    <div className="flex-1 min-w-[160px] max-w-sm">
      <label className="block text-sm text-gray-700 mb-1">Specie:</label>
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

    <div className="flex-1 min-w-[200px] max-w-sm">
      <label className="block text-sm text-gray-700 mb-1">Breed:</label>
      <input
        type="text"
        name="breed"
        value={petInfo.breed}
        onChange={handleChange}
        className="w-full p-2 border rounded-md"
        placeholder="e.g. Persian"
        required
      />
    </div>

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
      <label className="block text-sm text-gray-700 mb-1">Temperament:</label>
      <input
        type="text"
        name="temperament"
        value={petInfo.temperament}
        onChange={handleChange}
        className="w-full p-2 border rounded-md"
        placeholder="e.g. Friendly"
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
      Upload Pet
    </button>
  </div>
</form>

{toast && <Toast content={toast.message} type={toast.type} />}

    </div>
  );
};

export default UploadPet;
