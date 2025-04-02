"use client"
import { getMyPets } from '@/lib/appwrite/pets';
import React, { useEffect, useState } from 'react';

const MyPets = () => {

    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const response = await getMyPets();
                console.log('log my perst', response);
                setPets(response);
            } catch (error) {
                setError(error.message);
                console.log('eerror', error);
            }
            finally {
                setLoading(false);
            }
        })()
    }, []);

    const RowLoader = () => {
        return (<tr className="bg-white">
            <th scope="row" className="px-6 py-4 font-medium text-[#000000] whitespace-nowrap">
                <div role="status" className="max-w-sm animate-pulse">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2"></div>
                </div>
            </th>
            <td className="px-6 py-4">
                <div role="status" className="max-w-sm animate-pulse">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2"></div>
                </div>
            </td>
            <td className="px-6 py-4">
                <div role="status" className="max-w-sm animate-pulse">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2"></div>
                </div>
            </td>
            <td className="px-6 py-4">
                <div role="status" className="max-w-sm animate-pulse">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2"></div>
                </div>
            </td>
            <td className="px-6 py-4">
                <a href="#" className="font-medium text-[#E17716] hover:underline">Edit</a>
            </td>
        </tr>)
    };

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-5">
            <table className="w-full text-sm text-left rtl:text-right text-[#000000]">
                <thead className="text-xs text-[#000000] uppercase bg-[#faf4f0]">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Index
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {loading ?
                        <>
                            <RowLoader />
                            <RowLoader />
                            <RowLoader />
                            <RowLoader />
                        </>
                        :
                        <>
                            {pets.length ? (
                                pets.map((item, index) => (
                                    <tr className="bg-white" key={index}>
                                        <th scope="row" className="px-6 py-4 font-medium text-[#000000] whitespace-nowrap">
                                            {index + 1} {/* Displaying index + 1 to show the correct pet number */}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.category}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.name}
                                        </td>
                                        <td className="px-6 py-4 gap-5">
                                            <a href="#" className="font-medium text-[#E17716] hover:underline">Edit</a>
                                            <a href="#" className="font-medium text-[#ff0000] ml-2 hover:underline">Delete</a>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <h1>No pets at the moment</h1>
                            )}
                        </>

                    }

                </tbody>
            </table>
        </div>
    );
}

export default MyPets;