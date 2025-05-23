import React from 'react';
import type { ResultsSummaryProps } from '../types';

interface SummaryProps {
  data: ResultsSummaryProps[];
}

const Summary: React.FC<SummaryProps> = ({ data }) => {
  return (
    <section
      className="bg-neutral-white w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between"
      aria-labelledby="summary-heading"
      role="region"
    >
      <h2
        id="summary-heading"
        className="text-xl font-bold text-neutral-dark-gray-blue mb-6"
        tabIndex={0}
      >
        Summary
      </h2>

      <ul className="space-y-4">
        {data.map((item, index) => (
          <li
            key={index}
            role="listitem"
            tabIndex={0}
            className={`flex items-center justify-between p-4 rounded-lg transition-all duration-200 transform 
              hover:scale-[1.02] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-dark-gray-blue cursor-pointer
              ${item.category.toLowerCase() === 'reaction' ? 'bg-primary-light-red/10' : ''}
              ${item.category.toLowerCase() === 'memory' ? 'bg-primary-orangey-yellow/10' : ''}
              ${item.category.toLowerCase() === 'verbal' ? 'bg-primary-green-teal/10' : ''}
              ${item.category.toLowerCase() === 'visual' ? 'bg-primary-cobalt-blue/10' : ''}
            `}
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.icon}
                alt={`${item.category} icon`}
                className="w-5 h-5 mr-3"
                aria-hidden="true"
              />
              <span
                className={`font-medium text-paragraph
                  ${item.category.toLowerCase() === 'reaction' ? 'text-primary-light-red' : ''}
                  ${item.category.toLowerCase() === 'memory' ? 'text-primary-orangey-yellow' : ''}
                  ${item.category.toLowerCase() === 'verbal' ? 'text-primary-green-teal' : ''}
                  ${item.category.toLowerCase() === 'visual' ? 'text-primary-cobalt-blue' : ''}
                `}
              >
                {item.category}
              </span>
            </div>
            <span
              className="font-bold text-neutral-dark-gray-blue text-lg"
              aria-label={`${item.score} out of 100 in ${item.category}`}
            >
              {item.score}{' '}
              <span className="text-neutral-light-lavender" aria-hidden="true">
                / 100
              </span>
            </span>
          </li>
        ))}
      </ul>

      <button
        className="bg-neutral-dark-gray-blue text-white py-4 px-8 mt-6 rounded-4xl font-semibold text-lg 
          hover:bg-gradient-to-b hover:from-gradient-light-slate-blue-background hover:to-gradient-light-royal-blue-background 
          focus:outline-none focus:ring-2 focus:ring-gradient-light-royal-blue-background transition-all duration-200 transform 
          hover:scale-105 w-full"
        aria-label="Continue to the next step"
      >
        Continue
      </button>
    </section>
  );
};

export default Summary;
