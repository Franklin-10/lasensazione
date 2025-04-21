import React from 'react';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
import { CARDAPIO_POST } from '../../Api';
import styles from './UserCardapioPost.module.css';
import Head from '../Helper/Head';

const UserCardapioPost = () => {
  const nome = useForm();
  const descricao = useForm();
  const preco = useForm('preco');
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('descricao', descricao.value);
    formData.append('preco', preco.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = CARDAPIO_POST(formData, token);
    request(url, options);
  }

  function handleImageChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }
  return (
    <section className={`container ${styles.section}`}>
      <Head title="Enviar Produto" />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Descricao" type="text" name="descricao" {...descricao} />
        <Input label="Preco" type="text" name="preco" {...preco} />
        <input type="file" name="img" id="img" onChange={handleImageChange} />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      {img.preview && (
        <div
          className={styles.preview}
          style={{ backgroundImage: `url('${img.preview}')` }}
        ></div>
      )}
    </section>
  );
};

export default UserCardapioPost;
