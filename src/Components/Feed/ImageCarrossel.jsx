import React, { useState } from 'react';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import styles from './ImageCarrossel.module.css';
import ItemCarrossel from './ItemCarrossel';
import { CARDAPIO_GET } from '../../Api';
import Button from '../Forms/Button';
import { motion } from 'framer-motion';
import useMedia from '../../Hooks/useMedia';

const sectionVariant = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const ImageCarrossel = () => {
  const { data, error, request } = useFetch();
  const [content, setContent] = useState(null);
  const mobile = useMedia('(max-width: 50rem)');

  function sendMessage() {
    window.location.href = `https://api.whatsapp.com/send?phone=5511999999999&text=Olá 👋 Eu gostaria de uma Pizza 🍕 de ${content[2]} , poderia continuar meu atendimento por favor.`;
  }

  React.useEffect(() => {
    if (content) {
      const contentAnimate = document.querySelector(`.${styles.informacoes}`);
      const imgAnimate = document.querySelector(`.${styles.Image}`);
      if (contentAnimate && imgAnimate) {
        contentAnimate.classList.add('animeLeft');
        imgAnimate.classList.add('animeLeft');
        setTimeout(() => {
          contentAnimate.classList.remove('animeLeft');
          imgAnimate.classList.remove('animeLeft');
        }, 300);
      }
    }
  }, [content]);

  React.useEffect(() => {
    async function fetchCardapio() {
      const { url, options } = CARDAPIO_GET({
        user: 0,
        imagens: 3,
      });
      const { json } = await request(url, options);
    }
    fetchCardapio();
  }, [request]);

  if (error) return <Error error={error} />;
  if (data)
    return (
      <motion.section
        className={`${styles.section} container`}
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {content ? (
          <div className={`${styles.informacoes} animeLeft`}>
            <h2 className={`subtitle`}>{content[2]}</h2>
            <p>{content[0]}</p>
            <span>R$ {content[1]}</span>
            <Button style={{ maxWidth: '8rem' }} onClick={sendMessage}>
              PEÇA JÁ
            </Button>
          </div>
        ) : (
          <div></div>
        )}

        <div
          className={`${content ? styles.carrossel : styles.noneCarrossel} `}
        >
          {mobile
            ? data
                .slice(0, 2)
                .map((produto) => (
                  <ItemCarrossel
                    key={produto.id}
                    produto={produto}
                    content={content}
                    setContent={setContent}
                  />
                ))
            : data
                .slice(0, 3)
                .map((produto) => (
                  <ItemCarrossel
                    key={produto.id}
                    produto={produto}
                    content={content}
                    setContent={setContent}
                  />
                ))}
        </div>
        {content && (
          <div className={`${styles.Image} animeLeft`} id="ImagemPrincipal">
            <img src={content[3]} alt={content[2]} />
          </div>
        )}
      </motion.section>
    );
};

export default ImageCarrossel;
