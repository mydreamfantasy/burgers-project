import { GiHamburger } from 'react-icons/gi';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div>
        <Link href="/">
          <GiHamburger />
        </Link>
      </div>
      <nav>
        <Link href="/">Домой</Link>
        <Link href="/about">О нас</Link>
        <Link href="/reviews">Отзывы</Link>
        <Link href="/burgers">Бургеры</Link>
      </nav>
    </header>
  );
};

export default Header;
