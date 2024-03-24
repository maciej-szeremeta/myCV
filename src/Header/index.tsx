import { CVPersonal } from '../types/cv';
import './Header.scss';

type Props = {
  data: CVPersonal;
};

const Header = ({ data: { name, lastName, position } }: Props) => {
  return (
    <header className="cv-header">
      <h1>
        {name} {lastName}
      </h1>
      <p>{position}</p>
    </header>
  );
};

export { Header };
