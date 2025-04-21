import React from 'react';
import { UserContext } from '../../UserContext';
import { useNavigate, NavLink, useLocation } from 'react-router-dom';
import UserCardapioPost from './UserCardapioPost';
import styles from './UserHeaderNav.module.css';
import Sair from '../../Assets/sair.svg?react';
import Adicionar from '../../Assets/adicionar.svg?react';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);

  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  return (
    <>
      <div className={styles.div}>
        <NavLink to="/conta/UserCardapioPost" end>
          <Adicionar />
        </NavLink>
        <button onClick={handleLogout}>
          <Sair />
        </button>
      </div>
    </>
  );
};

export default UserHeaderNav;
