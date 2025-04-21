import React from 'react';
import styles from './CardapioItemUpdate.module.css';
import EditIcon from '../../Assets/edit.svg?react';

const CardapioItemUpdate = ({ produto, setModalProduto }) => {
  function handleClick() {
    setModalProduto(produto);
  }
  return (
    <li className={styles.card}>
      <div className={styles.div}>
        <h2 className={styles.h2}>{produto.title}</h2>
        <div className={styles.linha}></div>
      </div>
      <img src={produto.src} alt={produto.title} className={styles.img} />
      <div className={styles.descricao}>
        <EditIcon onClick={handleClick} />
        <p>{produto.post_content}</p>
        <span>R$ {produto.preco}</span>
      </div>
    </li>
  );
};

export default CardapioItemUpdate;
