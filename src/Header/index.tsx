import { Props } from '../types/cv';
import './Header.scss';

const Header = ({ cvData }: Props) => {
  return (
    <header className="cv-header">
      <h1>
        {cvData.name} {cvData.lastName}
      </h1>
      <p>{cvData.position}</p>
    </header>
  );
};

export { Header };
