"use client";
import ButtonSpinner from '@/components/ui/buttonSpinner';
import Toast from '@/components/ui/Toast';
import { useUser } from '@/context/userContext';
import { storage } from '@/lib/appwrite/appwrite';
import { deleteMyPet, getMyPets } from '@/lib/appwrite/pets';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import UploadPet from './UploadPet';

const MyPets = () => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [deletingPetId, setDeletingPetId] = useState(null);
    const [showToast, setShowToast] = useState(false);
    const [showModel,setShowModel] = useState(false);
    const [formType,setFormType] = useState("upload");
    const [petId,setPetId] = useState("");


    const { user } = useUser();

    useEffect(() => {
        if (user) (async () => {
            try {
                setLoading(true);
                // FOR LATEST DATA TO BE FETCHED EVERYTIME WE CAN REMOVE THE COMMENTS 
                const response = await getMyPets(user.$id);
                // console.log('user',user);
                // console.log('my pets',response);
                
                // setPets(user.my_pets);
                setPets(response)
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    async function deletePet(petId) {
        setDeletingPetId(petId);
        try {
            await deleteMyPet(petId);
            setShowToast(true);
            setPets((prevPets) => prevPets.filter((pet) => pet.$id !== petId));
        } catch (error) {
            console.error("Error While Deleting Pet:", error.message);
        } finally {
            setDeletingPetId(null);
        }
    }

    const RowLoader = () => (
        <tr className="bg-white animate-pulse">
            {[...Array(5)].map((_, i) => (
                <td key={i} className="px-6 py-4">
                    <div className="h-4 bg-gray-200 rounded w-20"></div>
                </td>
            ))}
        </tr>
    );

    return (
        <div className="max-w-5xl relative mx-auto mt-6 bg-white shadow-md rounded-lg overflow-hidden p-6">
<button
  className="absolute top-2 right-5 px-4 py-2 text-white bg-primary rounded-md hover:bg-primary/90"
  onClick={() => setShowModel(true)}
>
  Add new pet
</button>

            <h1 className="text-2xl font-semibold text-center mb-4">My Pets</h1>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-black">
                    <thead className="text-xs uppercase bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3">Image</th>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Specie</th>
                            <th scope="col" className="px-6 py-3">Gender</th>
                            <th scope="col" className="px-6 py-3 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <>
                                <RowLoader />
                                <RowLoader />
                                <RowLoader />
                            </>
                        ) : pets.length ? (
                            pets.map((item, index) => (
                                <tr key={item.$id} className="bg-white border-b">
                                    <td className="px-6 py-4">
                                        <img
                                            src={storage.getFileView('6799fb94000edc47b27d', item.main_image)}
                                            alt={item.name}
                                            className="w-14 h-14 object-cover rounded-lg"
                                        />
                                    </td>

                                    <td className="px-6 py-4">
                                        <Link href={`/pet/${item.$id}`}>
                                            {item.name}
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4">{item.specie}</td>
                                    <td className="px-6 py-4">{item.gender}</td>
                                    <td className="px-6 py-4 flex justify-center items-center space-x-4">
                                        <button
                                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 flex items-center justify-center w-20"
                                            disabled={deletingPetId === item.$id}
                                            onClick={() => {setFormType("update");setPetId(item.$id);setShowModel(true)}}
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() => deletePet(item.$id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 flex items-center justify-center w-20"
                                            disabled={deletingPetId === item.$id}
                                        >
                                            {deletingPetId === item.$id ? (
                                                <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                                            ) : (
                                                "Delete"
                                            )}
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">No Pets Available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {showToast && <Toast content="Pet Deleted!" type="success" />}
            {showModel && <UploadPet setShowModel={setShowModel} formType={formType} petId={petId}/>}
        </div>
    );
};

export default MyPets;
