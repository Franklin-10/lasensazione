import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
import Lasensazione from '../Assets/logo.svg?react';
import styles from './Header.module.css';

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label="Lasensazione" className={styles.logo}>
          <Lasensazione />
        </Link>
        {data ? (
          <Link to="/conta" className={styles.login}>
            {data.nome}{' '}
          </Link>
        ) : (
          <Link to="/login" className={styles.login}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
