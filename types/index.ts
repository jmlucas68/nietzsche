
export interface WorkLink {
  type: 'Wikisource' | 'Gutenberg' | 'Archive.org' | 'Amazon.es' | 'Other Free';
  url: string;
  icon: string; // FontAwesome icon class
}

export interface Work {
  id: string;
  title: string;
  year: string;
  description: string;
  imageUrl: string;
  links: WorkLink[];
}

export interface Quote {
  id: string;
  text: string;
  source: string;
}

export interface LinkItem {
  id: string;
  text: string;
  url: string;
  category: 'fuente_primaria' | 'fuente_secundaria' | 'academia' | 'lectura_adicional';
}

export interface PhilosophicalIdea {
  id:string;
  name: string;
  explanation: string[];
  quotes: Quote[];
}

export interface InfluencePoint {
  id: string;
  name: string;
  description: string[];
}

export interface Section {
  id: string;
  title: string;
  ref: React.RefObject<HTMLElement>;
}

export interface NietzscheData {
  hero: {
    title: string;
    subtitle: string;
    imageUrl: string;
  };
  biography: {
    title: string;
    paragraphs: string[];
    imageUrl: string;
    birthDate: string;
    deathDate: string;
    nationality: string;
  };
  philosophy: {
    title: string;
    introduction: string[];
    imageUrl: string;
    ideas: PhilosophicalIdea[];
  };
  works: {
    title: string;
    introduction: string[];
    list: Work[];
  };
  influencesReceived: {
    title: string;
    introduction: string[];
    points: InfluencePoint[];
    imageUrl: string;
  };
  influenceExerted: {
    title: string;
    introduction: string[];
    points: InfluencePoint[];
    imageUrl: string;
  };
  context: {
    title: string;
    introduction: string[];
    paragraphs: string[];
    imageUrl: string;
  };
  externalLinks: {
    title: string;
    items: LinkItem[];
  };
}
