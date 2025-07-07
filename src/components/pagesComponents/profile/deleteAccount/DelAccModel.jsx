import { useUser } from '@/context/userContext';
import { deleteAccount } from '@/lib/appwrite/user';
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import ButtonSpinner from '@/components/ui/buttonSpinner';


const DelAccModel = ({ setIsOpen }) => {

    const { setUser } = useUser();
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    async function handleDeleteAccount() {
        setLoading(true);
        try {
            await deleteAccount();
            setUser(null);
            router.push("/login");
        } catch (error) {
            console.log('Error while deleting account:', error);
        } finally {
            setIsOpen(false);
            setLoading(false);
        }
    }

    return (
        <>
            {true && (
                <div className="fixed inset-0 z-50 backdrop-blur-sm bg-white/30 flex items-center justify-center">
                    {/* Modal box */}
                    <div className="absolute bg-white dark:bg-gray-800 rounded-lg shadow w-full max-w-md p-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        {/* Close button */}
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 absolute top-2.5 right-2.5 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>

                        {/* Icon */}
                        <svg
                            className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-4 mx-auto"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>

                        {/* Text */}
                        <p className="mb-4 text-gray-500 dark:text-gray-300">
                            Are you sure you want to delete this item?
                        </p>

                        {/* Action buttons */}
                        <div className="flex justify-center items-center space-x-4">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                            >
                                No, cancel
                            </button>
                            <button
                                type="button"
                                className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                                onClick={handleDeleteAccount}
                            >
                                {loading ? <ButtonSpinner /> : "Yes, I'm sure"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default DelAccModel;
