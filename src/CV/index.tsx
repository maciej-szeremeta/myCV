import { Details } from '../Details';
import { Header } from '../Header';
import { Personal } from '../Personal';
import { CVData } from '../types/cv';

import './CV.scss';

const cvData: CVData = {
  personal: {
    photo: 'https://randomuser.me/api/portraits/men/72.jpg',
    name: 'Jan',
    lastName: 'Kowalski',
    position: 'Developer',
    phone: '555 666 777',
    email: 'jan@kowalski.dev',
    github: 'https://github.com/kowalski',
  },
  details: {
    experience: [
      {
        year: 2009,
        description: 'Zdobycie podstaw języka JavaScript oraz manipulacji DOM.',
      },
      {
        year: 2011,
        description:
          'Poszerzenie umiejętności o zaawansowane techniki JavaScript oraz praca z asynchronicznymi operacjami.',
      },
      {
        year: 2013,
        description:
          'Specjalizacja w frameworkach front-endowych, takich jak React, Angular lub Vue.js.',
      },
      {
        year: 2015,
        description:
          'Zaawansowane technologie front-endowe i optymalizacja wydajności aplikacji.',
      },
      {
        year: 2022,
        description:
          'Mentoring młodszych programistów oraz udział w konferencjach i wydarzeniach branżowych.',
      },
    ],
    education: [
      'Samodzielne studiowanie języka JavaScript, w tym: Podstawy składni języka JavaScript, Manipulacja DOM, Obsługa zdarzeń, Programowanie obiektowe w JavaScript',
      'Udział w kursach online lub szkoleniach dotyczących zaawansowanych technik i narzędzi używanych w ekosystemie JavaScript, takich jak: Frameworki front-endowe (np. React, Angular, Vue.js).',
      'Praktyczne doświadczenie poprzez realizację projektów, udział w hackathonach lub pracy nad otwartym oprogramowaniem, w celu zdobycia praktycznej wiedzy i umiejętności w rozwiązywaniu rzeczywistych problemów związanych z programowaniem w JavaScript.',
      'Ciągłe poszerzanie wiedzy poprzez czytanie dokumentacji, artykułów branżowych, uczestnictwo w warsztatach, konferencjach oraz aktywność w społeczności programistycznej online, aby być na bieżąco z najnowszymi trendami i technologiami w świecie JavaScript.',
    ],
  },
};

const Cv = () => {
  return (
    <main className="cv-main">
      <Header data={cvData.personal} />
      <Personal data={cvData.personal} />
      <Details data={cvData.details} />
    </main>
  );
};

export { Cv };
