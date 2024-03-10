import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

interface Experience {
  year: number;
  description: string;
}

interface CVData {
  photo: string;
  name: string;
  lastName: string;
  phone: string;
  email: string;
  github: string;
  position: string;
  experience: Experience[];
  education: string[];
}

const cvData: CVData = {
  photo: 'https://randomuser.me/api/portraits/men/72.jpg',
  name: 'Jan',
  lastName: 'Kowalski',
  position: 'Developer',
  phone: '555 666 777',
  email: 'jan@kowalski.dev',
  github: 'https://github.com/kowalski',
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
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main className="cv-main">
      <header className="cv-header">
        <h1>
          {cvData.name} {cvData.lastName}
        </h1>
        <p>{cvData.position}</p>
      </header>
      <aside className="cv-personal">
        <img
          className="cv-photo"
          src={cvData.photo}
          alt={`${cvData.name} ${cvData.lastName} profile photo`}
        />
        <h2>Personal data</h2>
        <p>
          Email: <small>{cvData.email}</small>
        </p>
        <p>
          Phone: <small>{cvData.phone}</small>
        </p>
        <p>
          Github <small>{cvData.github}</small>
        </p>
      </aside>
      <section className="cv-details">
        <h2>Experience</h2>
        <ul>
          {cvData.experience.map((experience) => (
            <li
              key={experience.year}
              className="cv-experience">
              <strong>{experience.year}</strong>
              <small>{experience.description}</small>
            </li>
          ))}
        </ul>
        <h2>Education</h2>
        <ul>
          {cvData.education.map((education, index) => (
            <li key={index}>
              <small>{education}</small>
            </li>
          ))}
        </ul>
      </section>
    </main>
  </React.StrictMode>
);
