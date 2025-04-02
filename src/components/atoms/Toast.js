import React, { useEffect, useState } from 'react';

const Toast = ({content,type='success',closeTime=3000}) => {


    // State to manage the visibility of the toast
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false); // Hide the toast after 3 seconds
        }, closeTime);

        // Cleanup the timeout if the component unmounts or is hidden before 3 seconds
        return () => clearTimeout(timer);
    }, []);

    // Handler to close the toast
    const handleClose = () => {
        setIsVisible(false);
    };


    if (!isVisible) return null;

    return (
        <div
            id="toast-success"
            className="toast flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800"
            role="alert"
            style={{
                position: 'fixed',
                top: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 9999,
            }}
        >
            {type === "error" ? 
                <div className="ms-3 text-sm font-normal text-red-500">{content}</div> :
                <div className="ms-3 text-sm font-normal text-green-500">{content}</div>
            }
            

            <button
                onClick={handleClose}
                type="button"
                className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                data-dismiss-target="#toast-success"
                aria-label="Close"
            >
                <span className="sr-only">Close</span>
                <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                </svg>
            </button>
        </div>
    );
}

export default Toast;
