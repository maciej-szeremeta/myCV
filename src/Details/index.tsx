import { Props } from '../types/cv';
import './Details.scss';

const Details = ({ cvData }: Props) => {
  return (
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
  );
};

export { Details };
