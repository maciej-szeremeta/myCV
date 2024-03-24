import { CVDetails } from '../types/cv';
import './Details.scss';

type Props = {
  data: CVDetails;
};

const Details = ({ data: { experience, education } }: Props) => {
  return (
    <section className="cv-details">
      <h2>Experience</h2>
      <ul>
        {experience.map((experience) => (
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
        {education.map((education, index) => (
          <li key={index}>
            <small>{education}</small>
          </li>
        ))}
      </ul>
    </section>
  );
};

export { Details };
