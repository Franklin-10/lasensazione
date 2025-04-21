import React from 'react';
import useFetch from '../../Hooks/useFetch';
import CardapioItem from './CardapioItem';
import { CARDAPIO_GET } from '../../Api';
import Error from '../Helper/Error';
import styles from './FeedCardapio.module.css';
import CardapioItemUpdate from './CardapioItemUpdate';
import Loading from '../Helper/Loading';

const FeedCardapio = ({ page, user, setModalProduto }) => {
  const { data, loading, error, request } = useFetch();
  const pathname = window.document.location.pathname;

  React.useEffect(() => {
    async function fetchCardapio() {
      const total = 6;
      const { url, options } = CARDAPIO_GET({ page, total, user });
      const { json } = await request(url, options);
    }
    fetchCardapio();
  }, [request, user, page]);
  console.log(data);
  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <>
        <section>
          {pathname === '/conta' ? (
            <ul className={`${styles.grade} container`}>
              {data.map((produto) => (
                <CardapioItemUpdate
                  key={produto.id}
                  produto={produto}
                  setModalProduto={setModalProduto}
                />
              ))}
            </ul>
          ) : (
            <div>
              <div className={styles.div}>
                <h1 className="title">CARDÁPIO</h1>
              </div>
              <ul className={`${styles.grade} container`}>
                {data.map((produto) => (
                  <CardapioItem key={produto.id} produto={produto} />
                ))}
              </ul>
            </div>
          )}
        </section>
      </>
    );
};

export default FeedCardapio;
