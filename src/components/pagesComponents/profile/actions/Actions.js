import React, { useState } from 'react';
import MyPets from './MyPets';
import UploadPet from './UploadPet';

const Actions = () => {
    const [activeTab, setActiveTab] = useState('Upload Pet');

    return (
        <div>
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200">
                {['Upload Pet','My Pets', 'Other'].map((tab) => (
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
            {activeTab === 'Upload Pet' && <UploadPet />}
        </div>
    );
}

export default Actions;