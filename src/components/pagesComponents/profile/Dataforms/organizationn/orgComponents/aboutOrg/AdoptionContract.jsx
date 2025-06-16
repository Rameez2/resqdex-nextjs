import { storage } from '@/lib/appwrite/appwrite';
import { ID } from 'appwrite';
import React, { useState } from 'react';

const AdoptionContract = ({data,onChange}) => {
    const [adoptionContract,setAdoptionContract] = useState(data);

  async function uploadFile(file) {
    try {
        console.log('Uploading contract',file);
        let uploadedImage = await storage.createFile('6799fb94000edc47b27d', ID.unique(), file);
        // setAdoptionContract(uploadedImage.$id);
        onChange(uploadedImage.$id)

    } catch (error) {
      console.error('File Upload Error:', error);
      return null;
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        console.log('got file',file);
        uploadFile(file);
    }
  };


    return (
   <div className="space-y-3">
                    <label className="block text-xs font-medium text-red-600">
                        Do you have an adoption contract? (PDF) *
                    </label>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <input
                                type="radio"
                                id="contract-yes"
                                name="adoptionContract"
                                value="yes"
                                checked={adoptionContract === "yes"}
                                onChange={(e) => setAdoptionContract(e.target.value)}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            />
                            <label htmlFor="contract-yes" className="text-sm text-gray-700">
                                Yes
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="radio"
                                id="contract-no"
                                name="adoptionContract"
                                value="no"
                                checked={adoptionContract === "no"}
                                onChange={(e) => setAdoptionContract(e.target.value)}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            />
                            <label htmlFor="contract-no" className="text-sm text-gray-700">
                                No
                            </label>
                        </div>
                    </div>
                    {adoptionContract === "yes" && (
                        <div className="mt-2">
                            <input
                                type="file"
                                accept=".pdf"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                onChange={handleFileChange}
                            />
                        </div>
                    )}
                </div>
    );
}

export default AdoptionContract;
