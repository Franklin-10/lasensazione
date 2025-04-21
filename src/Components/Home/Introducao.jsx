import React from 'react';
import { motion } from 'framer-motion';
import styles from './Introducao.module.css';
import firstBanner from '../../Assets/primeiro-banner.jpg';
import pizzaIcon from '../../Assets/pizza-icon.svg';
import tomateIcon from '../../Assets/tomate-icon.svg';
import bandeiraIcon from '../../Assets/bandeira-icon.svg';
import raio from '../../Assets/raio-icon.svg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <img
        src={firstBanner}
        alt="Pizza deliciosa"
        className={styles.heroImage}
      />

      <div className={styles.content}>
        <motion.div
          className={styles.textBox}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.title}>La Sensazione</h1>
          <p className={styles.subtitle}>
            A melhor pizza italiana do Rio de Janeiro
          </p>
          <div className={styles.actions}>
            <Link to="/cardapio">
              <motion.button
                className={`${styles.button} ${styles.primary}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Cardápio
              </motion.button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className={styles.highlights}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className={styles.highlight}>
            <img src={tomateIcon} alt="" className={styles.icon} />
            <span>Ingredientes Frescos</span>
          </div>
          <div className={styles.highlight}>
            <img src={bandeiraIcon} alt="" className={styles.icon} />
            <span>Receita Italiana</span>
          </div>
          <div className={styles.highlight}>
            <img src={raio} alt="" className={styles.icon} />
            <span>Entrega Rápida</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
