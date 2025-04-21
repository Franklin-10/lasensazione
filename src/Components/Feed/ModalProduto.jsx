import React from 'react';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import { PRODUTO_GET } from '../../Api';
import ProdutoContent from '../Produto/ProdutoContent';
import Loading from '../Helper/Loading';
import styles from './ModalProduto.module.css';

const ModalProduto = ({ produto, setModalProduto }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PRODUTO_GET(produto.id);
    request(url, options);
    console.log(url);
  }, [produto, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalProduto(null);
  }
  return (
    <div className={`${styles.modal} animeLeft`} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <ProdutoContent data={data} />}
    </div>
  );
};

export default ModalProduto;
