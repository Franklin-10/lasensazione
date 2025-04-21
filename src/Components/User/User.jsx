import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserCardapioPost from './UserCardapioPost';
import UserHeader from './UserHeader';
import Feed from '../Feed/Feed';
import { UserContext } from '../../UserContext';
import Head from '../Helper/Head';

const User = () => {
  const { data } = React.useContext(UserContext);
  return (
    <section>
      <UserHeader />
      <Head title="Minha Conta" />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="UserCardapioPost" element={<UserCardapioPost />} />
      </Routes>
    </section>
  );
};

export default User;
