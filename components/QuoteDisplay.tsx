
import React from 'react';

interface QuoteDisplayProps {
  text: string;
  source: string;
}

const QuoteDisplay: React.FC<QuoteDisplayProps> = ({ text, source }) => {
  return (
    <blockquote className="my-4 p-4 border-l-4 border-blue-500 bg-blue-50 italic rounded-r-md">
      <p className="text-gray-700 leading-relaxed">"{text}"</p>
      <footer className="mt-2 text-sm text-gray-600 text-right">- {source}</footer>
    </blockquote>
  );
};

export default QuoteDisplay;
