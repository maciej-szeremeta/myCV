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
  position: string;
  experience: Experience[];
  education: string[];
}

const cvData: CVData = {
  photo: 'https://randomuser.me/api/portraits/men/72.jpg',
  name: 'Maciej',
  lastName: 'Szeremeta',
  position: 'Developer',
  experience: [
    { year: 2009, description: 'Loperm ipsum' },
    { year: 2010, description: 'Dolor sit amet' },
  ],
  education: ['Lorem ipsum', 'Dolor sit amet', 'Ala ma kota'],
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main className="cv-main">
      <header className="cv-header">
        <h1>
          CV {cvData.name}
          {cvData.lastName}
        </h1>
      </header>
      <aside className="cv-personal">
        <h2>Personal data</h2>
        <img
          className="cv-photo"
          src={cvData.photo}
          alt={`${cvData.name} ${cvData.lastName} profile photo`}
        />
        <p>
          {cvData.name} {cvData.lastName}
        </p>
        <small>{cvData.position}</small>
      </aside>
      <section className="cv-details">
        <h2>Experience</h2>
        <ul>
          {cvData.experience.map((experience) => (
            <li key={experience.year}>
              <strong>{experience.year}</strong> - {experience.description}
            </li>
          ))}
        </ul>
        <h2>Education</h2>
        <ul>
          {cvData.education.map((education, index) => (
            <li key={index}>{education}</li>
          ))}
        </ul>
      </section>
    </main>
  </React.StrictMode>
);
