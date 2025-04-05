"use client"
import React, { useState } from 'react';
import PetsManagment from '@/components/pagesComponents/admin/petsManage/PetsManagment';
import UsersManagment from '@/components/pagesComponents/admin/usersManage/UsersManagment';
import withAdminAuth from '@/lib/middlewares/adminProtection';

const Page = () => {
    const [activeTab, setActiveTab] = useState('users'); // Default tab is 'users'

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='m-10'>

            {/* Tab Buttons */}
            <div className="flex space-x-4 mb-6">
                <button
                    onClick={() => handleTabChange('users')}
                    className={`py-2 px-4 rounded-md ${activeTab === 'users' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Users Management
                </button>
                <button
                    onClick={() => handleTabChange('pets')}
                    className={`py-2 px-4 rounded-md ${activeTab === 'pets' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Pets Management
                </button>
            </div>

            {/* Render Components based on Active Tab */}
            {activeTab === 'users' && <UsersManagment />}
            {activeTab === 'pets' && <PetsManagment />}
        </div>
    );
}

export default withAdminAuth(Page);
