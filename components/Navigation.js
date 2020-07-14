import Link from 'next/link';
import styles from './Navigation.module.scss'



export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/auth">
            <a>Auth</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
