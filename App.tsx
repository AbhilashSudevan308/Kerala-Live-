import React, { useState, useEffect, useCallback } from 'react';
import { fetchKeralaUpdates } from './services/geminiService';
import { parseUpdateText } from './utils/parser';
import type { KeralaUpdates, GroundingSource } from './types';
import Header from './components/Header';
import NewsCard from './components/NewsCard';
import WeatherCard from './components/WeatherCard';
import GeneralUpdateCard from './components/GeneralUpdateCard';
import SourceList from './components/SourceList';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorDisplay from './components/ErrorDisplay';

const App: React.FC = () => {
  const [updates, setUpdates] = useState<KeralaUpdates | null>(null);
  const [sources, setSources] = useState<GroundingSource[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getUpdates = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const { text, groundingChunks } = await fetchKeralaUpdates();
      if (text) {
        const parsedData = parseUpdateText(text);
        setUpdates(parsedData);
        setSources(groundingChunks || []);
      } else {
        throw new Error("Received empty response from the server.");
      }
    } catch (err) {
      console.error("Failed to fetch updates:", err);
      setUpdates(null);
      setSources([]);
      setError(err instanceof Error ? err.message : "An unknown error occurred.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getUpdates();
  }, [getUpdates]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Header onRefresh={getUpdates} />
      <main className="container mx-auto p-4 md:p-8">
        {loading && <LoadingSpinner />}
        {error && <ErrorDisplay message={error} />}
        {updates && !loading && !error && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                {updates.topStories.length > 0 && <NewsCard stories={updates.topStories} />}
              </div>
              <div className="space-y-8">
                {updates.weather.length > 0 && <WeatherCard weatherData={updates.weather} />}
                {updates.generalUpdate && <GeneralUpdateCard update={updates.generalUpdate} />}
              </div>
            </div>
             {sources.length > 0 && <SourceList sources={sources} />}
          </div>
        )}
      </main>
      <footer className="text-center p-4 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Kerala Live Updates. All information is AI-generated and for demonstration purposes.</p>
      </footer>
    </div>
  );
};

export default App;