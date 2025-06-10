
import React from 'react';
import type { Section } from '../types';

interface NavigationProps {
  sections: Section[];
}

const Navigation: React.FC<NavigationProps> = ({ sections }) => {
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <aside className="w-1/4 md:w-1/5 lg:w-1/6 sticky top-8 self-start pr-8 hidden md:block">
      <nav className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">Navegación</h3>
        <ul>
          {sections.map((section) => (
            <li key={section.id} className="mb-2">
              <button
                onClick={() => scrollToSection(section.ref)}
                className="text-gray-600 hover:text-blue-600 hover:font-semibold transition-all duration-200 w-full text-left py-1 text-sm"
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Navigation;
