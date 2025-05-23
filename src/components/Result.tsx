import React from 'react';

interface ResultProps {
  score: number;
  percentile: number;
}

const Result: React.FC<ResultProps> = ({ score, percentile }) => {
  return (
    <section
      role="region"
      aria-label="Your score summary"
      className="bg-gradient-to-b from-gradient-light-slate-blue-background to-gradient-light-royal-blue-background
        flex flex-col items-center justify-center text-neutral-white text-center
        rounded-b-2xl lg:rounded-2xl p-8 lg:p-12 w-full lg:w-1/2"
    >
      <header className="mb-10">
        <h1 className="text-2xl font-medium text-neutral-light-lavender" tabIndex={0}>
          Your Results
        </h1>
      </header>

      <div
        className="bg-gradient-to-b from-gradient-violet-blue-circle to-gradient-persian-blue-circle
          w-36 h-36 rounded-full mb-8 flex flex-col items-center justify-center"
        role="presentation"
        aria-hidden="true"
      >
        <span className="text-6xl md:text-7xl font-extrabold leading-tight mb-2">{score}</span>
        <span className="text-neutral-light-lavender text-sm">of 100</span>
      </div>

      <h2 className="text-2xl font-semibold text-white mb-4" tabIndex={0}>Great</h2>
      <p className="text-lg text-neutral-light-lavender max-w-xs" tabIndex={0}>
        You scored higher than {percentile}% of the people who have taken these tests.
      </p>
    </section>
  );
};

export default Result;
