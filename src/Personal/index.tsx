import { Props } from '../types/cv';
import './Personal.scss';

const Personal = ({ cvData }: Props) => {
  return (
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
  );
};

export { Personal };
