import styles from './ItemCarrossel.module.css';
import { motion } from 'framer-motion';

const ItemCarrossel = ({ produto, setContent }) => {
  function handleClick() {
    setContent([
      produto.post_content,
      produto.preco,
      produto.title,
      produto.src,
    ]);
  }
  return (
    <section id="ImagemPrincipal">
      <motion.img
        src={produto.src}
        alt={produto.title}
        className={styles.img}
        onClick={handleClick}
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 2,
        }}
      />
    </section>
  );
};

export default ItemCarrossel;
