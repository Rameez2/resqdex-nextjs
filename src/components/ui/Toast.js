import React, { useEffect, useState } from 'react';

const Toast = ({content,type='success',closeTime=3000}) => {

  // State to manage visibility of the toast
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // Hide the toast after closeTime
    }, closeTime);

    // Cleanup the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, [closeTime]);

  // Render null if not visible
  if (!isVisible) return null;

    return (
        <div
        className={`p-4 mb-4 border text-sm rounded-lg fixed left-1/2 transform -translate-x-1/2 top-10 z-50 ${type === 'success' ? 'text-green-800 bg-green-50 border-green-500' : 'text-red-800 bg-red-50 border-red-500'}`}
        role="alert"
      >
        <span className="font-medium">{type === 'success' ? 'Success!' : 'Error!'}</span> {content}
      </div>
    );
}

export default Toast;
