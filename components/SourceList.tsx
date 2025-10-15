
import React from 'react';
import type { GroundingSource } from '../types';

interface SourceListProps {
  sources: GroundingSource[];
}

const SourceList: React.FC<SourceListProps> = ({ sources }) => {
  const validSources = sources.filter(s => s.web?.uri && s.web?.title);

  if (validSources.length === 0) {
    return null;
  }
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Sources</h2>
      <ul className="space-y-2 list-decimal list-inside">
        {validSources.map((source, index) => (
          <li key={index} className="text-sm">
            <a 
              href={source.web!.uri} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-teal-600 hover:text-teal-800 hover:underline transition-colors"
              title={source.web!.uri}
            >
              {source.web!.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SourceList;
