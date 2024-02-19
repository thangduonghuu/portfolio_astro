import Button from '../core/Button';
import Container from '../core/Container';
import Icon from '../core/Icon';
import Link from '../core/Link';
import '@/assets/sass/components/main/header.scss';

export default function Header() {
  return (
    <header className="main-header">
      <Container className="main-header__container">
        <Link>
          <Icon name="logo" size="large" className="main-header__icon" />
        </Link>
        <nav className="main-header__navbar">
          <ul className="navbar__list">
            <li className="navbar__item">About</li>
            <li className="navbar__item">Works</li>
            <li className="navbar__item">Services</li>
            <li className="navbar__item">Contact</li>
          </ul>
        </nav>

        <Button>Contact</Button>
      </Container>
    </header>
  );
}
