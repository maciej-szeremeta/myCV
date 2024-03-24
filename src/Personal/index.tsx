import { CVPersonal } from '../types/cv';
import './Personal.scss';

type Props = {
  data: CVPersonal;
};

const Personal = ({
  data: { photo, name, lastName, email, phone, github },
}: Props) => {
  return (
    <aside className="cv-personal">
      <img
        className="cv-photo"
        src={photo}
        alt={`${name} ${lastName} profile photo`}
      />
      <h2>Personal data</h2>
      <p>
        Email: <small>{email}</small>
      </p>
      <p>
        Phone: <small>{phone}</small>
      </p>
      <p>
        Github <small>{github}</small>
      </p>
    </aside>
  );
};

export { Personal };
