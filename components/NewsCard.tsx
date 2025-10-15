
import React from 'react';
import type { NewsStory } from '../types';

interface NewsCardProps {
  stories: NewsStory[];
}

const NewsIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 12h6M7 8h6" />
    </svg>
);


const NewsCard: React.FC<NewsCardProps> = ({ stories }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 h-full">
      <div className="flex items-center mb-4">
        <NewsIcon />
        <h2 className="text-2xl font-bold text-gray-800">Top Stories</h2>
      </div>
      <div className="space-y-5">
        {stories.map((story, index) => (
          <div key={index} className="border-l-4 border-teal-400 pl-4">
            <h3 className="font-semibold text-lg text-gray-700">{story.headline}</h3>
            <p className="text-gray-600 mt-1 text-sm">{story.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCard;
