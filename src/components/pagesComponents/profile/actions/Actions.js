import React, { useState } from 'react';
import MyPets from './organization/MyPets';
import UploadPet from './organization/UploadPet';
import { useUser } from '@/context/userContext';
import MyPosts from './adopter/MyPosts';
import UploadPost from './adopter/UploadPost';

const Actions = () => {
    const { user } = useUser();
    const [activeTab, setActiveTab] = useState(user.role === "Organization" ? 'My Pets' : 'Upload Post');

    if (user.status !== "Approved") {
        return (
            <div className="flex flex-col justify-center items-center text-center min-h-[200px]">
                <h1 className="text-xl font-semibold text-red-600">Access Denied</h1>
                <p className="text-gray-700 mt-2 max-w-md">
                    You are not verified. Please verify your account to access this feature.
                </p>
            </div>
        );
    }
    

    return (
        <>

            {user.role === "Organization" ?
                <div >
                    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200" >
                        {[
                        'My Pets',
                         'Other'].map((tab) => (
                            <li key={tab} className="me-2">
                                <button
                                    onClick={() => setActiveTab(tab)}
                                    className={`inline-block p-4 rounded-t-lg ${activeTab === tab ? 'text-blue-600 bg-gray-100' : 'hover:text-gray-600 hover:bg-gray-50'}`}
                                >
                                    {tab}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {activeTab === 'My Pets' && <MyPets />}
                    {/* {activeTab === 'Upload Pet' && <UploadPet />} */}
                </div>
                :
                <div >
                    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200" >
                        {['Upload Post', 'My Posts', 'Other'].map((tab) => (
                            <li key={tab} className="me-2">
                                <button
                                    onClick={() => setActiveTab(tab)}
                                    className={`inline-block p-4 rounded-t-lg ${activeTab === tab ? 'text-blue-600 bg-gray-100' : 'hover:text-gray-600 hover:bg-gray-50'}`}
                                >
                                    {tab}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {activeTab === 'Upload Post' && <UploadPost />}
                    {activeTab === 'My Posts' && <MyPosts />}
                </div>
            }
        </>
    );
}

export default Actions;