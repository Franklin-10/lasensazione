import React from 'react';
import ModalProduto from './ModalProduto';
import FeedCardapio from './FeedCardapio';

const Feed = ({ user }) => {
  const [modalProduto, setModalProduto] = React.useState(null);
  return (
    <div>
      {modalProduto && (
        <ModalProduto
          produto={modalProduto}
          setModalProduto={setModalProduto}
        />
      )}
      <FeedCardapio user={user} setModalProduto={setModalProduto} />
    </div>
  );
};

export default Feed;
