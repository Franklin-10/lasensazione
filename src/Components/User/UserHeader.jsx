import React from 'react';
import { useLocation } from 'react-router-dom';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/conta/UserCardapioPost':
        setTitle('Poste o Cardapio');
        break;
      default:
        setTitle('Minha Conta');
    }
  }, [location]);
  return (
    <header className={`${styles.header} container`}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
