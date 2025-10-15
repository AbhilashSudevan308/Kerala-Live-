
import React from 'react';
import type { WeatherInfo } from '../types';

interface WeatherCardProps {
  weatherData: WeatherInfo[];
}

const WeatherIcon = ({ condition }: { condition: string }) => {
  const lowerCondition = condition.toLowerCase();
  
  if (lowerCondition.includes('rain') || lowerCondition.includes('shower')) {
    return <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M15.75 8a.75.75 0 00.75.75v5.5a.75.75 0 00-1.5 0V8.75a.75.75 0 00.75-.75zM12.75 8a.75.75 0 00.75.75v2.5a.75.75 0 00-1.5 0V8.75a.75.75 0 00.75-.75zM9.75 8a.75.75 0 00.75.75v5.5a.75.75 0 00-1.5 0V8.75a.75.75 0 00.75-.75zM6.75 8a.75.75 0 00.75.75v2.5a.75.75 0 00-1.5 0V8.75a.75.75 0 00.75-.75z" /><path d="M3 8.25a.75.75 0 01.75-.75h12.5a.75.75 0 010 1.5H3.75A.75.75 0 013 8.25zM2.25 10a.75.75 0 01.75-.75h14a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zM2 13.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" /></svg>;
  }
  if (lowerCondition.includes('cloud')) {
    return <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" viewBox="0 0 20 20" fill="currentColor"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0z" /><path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 3zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM4.22 5.22a.75.75 0 011.06-.02l1.07 1.07a.75.75 0 01-1.06 1.06l-1.07-1.07a.75.75 0 01-.02-1.06zM14.78 14.78a.75.75 0 01-1.06.02l-1.07-1.07a.75.75 0 011.06-1.06l1.07 1.07a.75.75 0 01.02 1.06zM5.22 14.78a.75.75 0 01.02-1.06l1.07-1.07a.75.75 0 011.06 1.06l-1.07 1.07a.75.75 0 01-1.06-.02zM13.72 5.22a.75.75 0 011.06-.02l1.07 1.07a.75.75 0 11-1.06 1.06l-1.07-1.07a.75.75 0 01-.02-1.06z" /></svg>;
  }
  return <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM5.22 5.22a.75.75 0 011.06 0l1.06 1.06a.75.75 0 01-1.06 1.06L5.22 6.28a.75.75 0 010-1.06zM2 10a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm10.78 4.78a.75.75 0 010-1.06l1.06-1.06a.75.75 0 011.06 1.06l-1.06 1.06a.75.75 0 01-1.06 0zM10 18a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zm3.72-5.22a.75.75 0 01-1.06 0l-1.06-1.06a.75.75 0 111.06-1.06l1.06 1.06a.75.75 0 010 1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zm-5.22-4.78a.75.75 0 010 1.06l-1.06 1.06a.75.75 0 01-1.06-1.06L11.72 5.22a.75.75 0 011.06 0zM10 11a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" /></svg>;
};


const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
      <div className="flex items-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
        <h2 className="text-2xl font-bold text-gray-800">Weather</h2>
      </div>
      <div className="space-y-4">
        {weatherData.map((weather, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center">
              <WeatherIcon condition={weather.condition} />
              <div className="ml-4">
                <p className="font-semibold text-gray-700">{weather.city}</p>
                <p className="text-sm text-gray-500">{weather.condition}</p>
              </div>
            </div>
            <p className="font-bold text-xl text-gray-800">{weather.temperature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherCard;
