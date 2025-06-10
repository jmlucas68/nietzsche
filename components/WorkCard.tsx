
import React from 'react';
import type { Work, WorkLink } from '../types';

interface WorkCardProps {
  work: Work;
}

const WorkCard: React.FC<WorkCardProps> = ({ work }) => {
  const getLinkPillColor = (type: WorkLink['type']) => {
    switch (type) {
      case 'Wikisource': return 'bg-blue-100 text-blue-700';
      case 'Gutenberg': return 'bg-green-100 text-green-700';
      case 'Archive.org': return 'bg-indigo-100 text-indigo-700';
      case 'Amazon.es': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full transform hover:scale-105 transition-transform duration-300">
      <img src={work.imageUrl} alt={work.title} className="w-full h-48 object-cover"/>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{work.title}</h3>
        <p className="text-sm text-gray-500 mb-1">({work.year})</p>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{work.description}</p>
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Enlaces:</h4>
          <ul className="space-y-2">
            {work.links.map((link) => (
              <li key={link.url}>
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`inline-flex items-center text-xs font-medium px-3 py-1 rounded-full hover:opacity-80 transition-opacity ${getLinkPillColor(link.type)}`}
                >
                  <i className={`${link.icon} mr-2`}></i>
                  {link.type}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
