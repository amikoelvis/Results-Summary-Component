import React, { useEffect, useState } from 'react';
import type { ResultsSummaryProps } from '../types';
import Result from './Result';
import Summary from './Summary';

const ResultsSummary: React.FC = () => {
  const [summaryData, setSummaryData] = useState<ResultsSummaryProps[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./data.json');
        if (!response.ok) throw new Error('Failed to load JSON data');
        const data: ResultsSummaryProps[] = await response.json();
        setSummaryData(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An unknown error occurred');
      }
    };
    fetchData();
  }, []);

  if (error) {
    return (
      <main role="main" className="min-h-screen flex items-center justify-center bg-neutral-white">
        <div
          role="alert"
          tabIndex={-1}
          className="text-primary-light-red bg-primary-light-red/10 px-6 py-4 rounded shadow-md max-w-md text-center focus:outline-none focus:ring-2 focus:ring-primary-light-red"
        >
          {error}
        </div>
      </main>
    );
  }

  if (!summaryData.length) {
    return (
      <main role="main" className="min-h-screen flex items-center justify-center bg-neutral-white">
        <div
          aria-busy="true"
          aria-live="polite"
          className="text-neutral-dark-gray-blue px-6 py-4 max-w-md text-center"
        >
          Loading...
        </div>
      </main>
    );
  }

  return (
    <main role="main" className="flex items-center justify-center min-h-screen bg-neutral-white lg:bg-neutral-pale-blue">
      <div
        className="flex flex-col lg:flex-row w-full max-w-md lg:max-w-5xl mx-auto lg:rounded-2xl overflow-hidden shadow-xl focus:outline-none"
        role="region"
        aria-label="Results summary"
      >
        <Result score={76} percentile={65} />
        <Summary data={summaryData} />
      </div>
    </main>
  );
};

export default ResultsSummary;
