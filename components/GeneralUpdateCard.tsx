
import React from 'react';

interface GeneralUpdateCardProps {
  update: string;
}

const GeneralUpdateCard: React.FC<GeneralUpdateCardProps> = ({ update }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
      <div className="flex items-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="text-2xl font-bold text-gray-800">General Update</h2>
      </div>
      <p className="text-gray-600 leading-relaxed">{update}</p>
    </div>
  );
};

export default GeneralUpdateCard;
