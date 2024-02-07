import Button from './core/Button';
import Container from './core/Container';
import Icon from './core/Icon';
import Link from './core/Link';
import '@/assets/sass/components/main/header.scss';

export default function Header() {
  return (
    <header className="main-header">
      <Container className="main-header__container">
        <Link>
          <Icon name="logo" size="large" />
        </Link>
        <nav className="main-header__navbar">
          <ul>
            <li>About</li>
            <li>Works</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </nav>

        <Button>Contact</Button>
      </Container>
    </header>
  );
}
