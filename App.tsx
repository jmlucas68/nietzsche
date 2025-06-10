
import React, { useRef, createRef } from 'react';
import { nietzscheData } from './constants/nietzscheData';
import type { Section, PhilosophicalIdea, Work as WorkType, InfluencePoint, LinkItem as LinkItemType, Quote as QuoteType } from './types';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import SectionContainer from './components/SectionContainer';
import WorkCard from './components/WorkCard';
import QuoteDisplay from './components/QuoteDisplay';
import Footer from './components/Footer';

const App: React.FC = () => {
  const { 
    hero, biography, philosophy, works, 
    influencesReceived, influenceExerted, 
    context, externalLinks 
  } = nietzscheData;

  const sectionRefs = {
    biography: useRef<HTMLElement>(null),
    philosophy: useRef<HTMLElement>(null),
    works: useRef<HTMLElement>(null),
    influencesReceived: useRef<HTMLElement>(null),
    influenceExerted: useRef<HTMLElement>(null),
    context: useRef<HTMLElement>(null),
    externalLinks: useRef<HTMLElement>(null),
  };

  const sections: Section[] = [
    { id: 'biography', title: 'Biografía', ref: sectionRefs.biography },
    { id: 'philosophy', title: 'Pensamiento', ref: sectionRefs.philosophy },
    { id: 'works', title: 'Obras', ref: sectionRefs.works },
    { id: 'influencesReceived', title: 'Influencias Recibidas', ref: sectionRefs.influencesReceived },
    { id: 'influenceExerted', title: 'Influencia Ejercida', ref: sectionRefs.influenceExerted },
    { id: 'context', title: 'Contexto', ref: sectionRefs.context },
    { id: 'externalLinks', title: 'Enlaces Externos', ref: sectionRefs.externalLinks },
  ];

  const renderParagraphs = (paragraphs: string[]) => paragraphs.map((p, i) => <p key={i} className="mb-4 text-gray-700 leading-relaxed">{p}</p>);
  
  const renderInfluencePoints = (points: InfluencePoint[]) => points.map(point => (
    <div key={point.id} className="mb-6 p-4 border-l-4 border-blue-600 bg-blue-50 rounded-r-lg">
      <h4 className="text-xl font-semibold text-blue-700 mb-2">{point.name}</h4>
      {renderParagraphs(point.description)}
    </div>
  ));

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Hero title={hero.title} subtitle={hero.subtitle} imageUrl={hero.imageUrl} />
      
      <div className="flex flex-1 container mx-auto px-4 py-8">
        <Navigation sections={sections} />
        
        <main className="w-3/4 md:w-4/5 lg:w-5/6 pl-8">
          <SectionContainer ref={sectionRefs.biography} title={biography.title} titleClassName="text-4xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2">
            <div className="md:flex md:space-x-8 items-start">
              <div className="md:w-2/3">
                <div className="mb-4 text-sm text-gray-600">
                  <p><strong>Nacimiento:</strong> {biography.birthDate}</p>
                  <p><strong>Fallecimiento:</strong> {biography.deathDate}</p>
                  <p><strong>Nacionalidad:</strong> {biography.nationality}</p>
                </div>
                {renderParagraphs(biography.paragraphs)}
              </div>
              <div className="md:w-1/3 mt-6 md:mt-0">
                <img src={biography.imageUrl} alt="Friedrich Nietzsche" className="rounded-lg shadow-lg mx-auto" style={{maxWidth: '300px'}} />
              </div>
            </div>
          </SectionContainer>

          <SectionContainer ref={sectionRefs.philosophy} title={philosophy.title} titleClassName="text-4xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2">
            <div className="md:flex md:space-x-8 items-start mb-6">
              <div className="md:w-2/3">
                {renderParagraphs(philosophy.introduction)}
              </div>
               <div className="md:w-1/3 mt-6 md:mt-0">
                <img src={philosophy.imageUrl} alt="Concepto Filosófico" className="rounded-lg shadow-lg mx-auto" style={{maxWidth: '350px'}}/>
              </div>
            </div>
            {philosophy.ideas.map((idea: PhilosophicalIdea) => (
              <div key={idea.id} className="mb-8 p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-blue-700 mb-3">{idea.name}</h3>
                {renderParagraphs(idea.explanation)}
                {idea.quotes.map((quote: QuoteType) => <QuoteDisplay key={quote.id} text={quote.text} source={quote.source} />)}
              </div>
            ))}
          </SectionContainer>

          <SectionContainer ref={sectionRefs.works} title={works.title} titleClassName="text-4xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2">
            {renderParagraphs(works.introduction)}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
              {works.list.map((work: WorkType) => <WorkCard key={work.id} work={work} />)}
            </div>
          </SectionContainer>

          <SectionContainer ref={sectionRefs.influencesReceived} title={influencesReceived.title} titleClassName="text-4xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2">
             <div className="md:flex md:space-x-8 items-start mb-6">
                <div className="md:w-2/3">
                    {renderParagraphs(influencesReceived.introduction)}
                </div>
                <div className="md:w-1/3 mt-6 md:mt-0">
                    <img src={influencesReceived.imageUrl} alt="Influencias Recibidas" className="rounded-lg shadow-lg mx-auto" style={{maxWidth: '350px'}}/>
                </div>
            </div>
            {renderInfluencePoints(influencesReceived.points)}
          </SectionContainer>

          <SectionContainer ref={sectionRefs.influenceExerted} title={influenceExerted.title} titleClassName="text-4xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2">
            <div className="md:flex md:space-x-8 items-start mb-6">
                <div className="md:w-2/3">
                    {renderParagraphs(influenceExerted.introduction)}
                </div>
                <div className="md:w-1/3 mt-6 md:mt-0">
                    <img src={influenceExerted.imageUrl} alt="Influencia Ejercida" className="rounded-lg shadow-lg mx-auto" style={{maxWidth: '350px'}}/>
                </div>
            </div>
            {renderInfluencePoints(influenceExerted.points)}
          </SectionContainer>

          <SectionContainer ref={sectionRefs.context} title={context.title} titleClassName="text-4xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2">
             <div className="md:flex md:space-x-8 items-start mb-6">
                <div className="md:w-2/3">
                    {renderParagraphs(context.introduction)}
                    {renderParagraphs(context.paragraphs)}
                </div>
                <div className="md:w-1/3 mt-6 md:mt-0">
                    <img src={context.imageUrl} alt="Contexto Histórico" className="rounded-lg shadow-lg mx-auto" style={{maxWidth: '350px'}}/>
                </div>
            </div>
          </SectionContainer>

          <SectionContainer ref={sectionRefs.externalLinks} title={externalLinks.title} titleClassName="text-4xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2">
            <ul className="space-y-3">
              {externalLinks.items.map((link: LinkItemType) => (
                <li key={link.id} className="p-3 bg-gray-50 hover:bg-gray-200 rounded-md transition-colors duration-200">
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">
                    <i className="fas fa-external-link-alt mr-2"></i>{link.text}
                    <span className="ml-2 text-xs uppercase px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">{link.category.replace('_', ' ')}</span>
                  </a>
                </li>
              ))}
            </ul>
          </SectionContainer>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
