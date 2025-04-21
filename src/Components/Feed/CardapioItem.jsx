import React from 'react';
import styles from './CardapioItem.module.css';
import Button from '../../Components/Forms/Button';

const CardapioItem = ({ produto }) => {
  function handleClick() {
    window.location.href = `https://api.whatsapp.com/send?phone=5511999999999&text=Olá 👋 Eu gostaria de uma Pizza 🍕 de ${produto.title} , poderia continuar meu atendimento por favor.`;
  }
  return (
    <li className={styles.card}>
      <div className={styles.div}>
        <h2 className={styles.h2}>{produto.title}</h2>
        <div className={styles.linha}></div>
      </div>
      <img src={produto.src} alt={produto.title} className={styles.img} />
      <div className={styles.descricao}>
        <p>{produto.post_content}</p>
        <span>R$ {produto.preco}</span>
        <Button onClick={handleClick}>PEÇA JÁ</Button>
      </div>
    </li>
  );
};

export default CardapioItem;
