import React from 'react';
import styles from './Promocao.module.css';
import { motion } from 'framer-motion';
import fourtyBanner from '../../Assets/quarto-banner.png';

const Promocao = () => {
  function handleClick() {
    window.location.href = `https://api.whatsapp.com/send?phone=5511999999999&text=Olá 👋 Eu gostaria da Baratione, poderia continuar meu atendimento por favor.`;
  }
  return (
    <section className={styles.promocao}>
      <div className={styles.screen}></div>
      <div className={`${styles.container}`}>
        <div className={styles.produtoPromocao}>
          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.discount}>
              <span>25%</span>
              <span>OFF</span>
            </div>
            <img
              src={fourtyBanner}
              alt="Pizza Peperoni"
              className={styles.productImage}
            />
          </motion.div>
          <motion.div
            className={styles.produtoDescricao}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.h2
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              BARATIONE da Semana
            </motion.h2>
            <h3 className={styles.productTitle}>Pizza de Peperoni</h3>
            <p className={styles.productDescription}>
              Deliciosa pizza de peperoni feita com massa fina e crocante, molho
              de tomate caseiro, queijo mussarela premium derretido e generosas
              fatias de peperoni italiano.
            </p>
            <div className={styles.preco}>
              <span className={styles.oldPrice}>R$ 39,99</span>
              <span className={styles.newPrice}>R$ 29,99</span>
            </div>
            <motion.button
              className={styles.orderButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClick}
            >
              Pedir Agora
            </motion.button>
          </motion.div>
        </div>

        <div className={styles.promoRules}>
          <p>*Promoção válida até domingo. Apenas para pedidos online.</p>
        </div>
      </div>
    </section>
  );
};

export default Promocao;
