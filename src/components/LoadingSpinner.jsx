// src/LoadingSpinner.js
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div >
       <div className="spinner border-4 border-t-4 border-gray-200 border-t-gray-900 rounded-full w-16 h-16"></div>
      <style>
        {`
          .spinner {
            animation: spin 2s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};




export default LoadingSpinner;
