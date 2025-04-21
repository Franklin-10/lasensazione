import React from 'react';
import Input from '../Forms/Input';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import { CARDAPIO_UPDATE } from '../../Api';
import Error from '../Helper/Error';
import Button from '../Forms/Button';
import ProdutoDelete from './ProdutoDelete';
import styles from './ProdutoContent.module.css';
import useMedia from '../../Hooks/useMedia';
import { useNavigate } from 'react-router-dom';

const ProdutoContent = ({ data }) => {
  const { produto } = data;
  const nome = useForm();
  const descricao = useForm();
  const preco = useForm('preco');
  const [img, setImg] = React.useState({});
  const { error, loading, request } = useFetch();
  const id = produto.id;
  const mobile = useMedia('(max-width: 50rem)');
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate]);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    if (img) formData.append('img', img.raw);
    if (nome) formData.append('nome', nome.value);
    if (descricao) formData.append('descricao', descricao.value);
    if (preco) formData.append('preco', preco.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = CARDAPIO_UPDATE(id, formData, token);
    const { response } = await request(url, options);
    if (response.ok) window.location.reload();
  }

  function handleImageChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }
  return (
    <div className={styles.div}>
      <h1>Editar Produto</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          type="text"
          label="Título"
          name="nome"
          {...nome}
          placeholder={produto.title}
          className={styles.input}
        />
        <Input
          label="Descrição"
          placeholder={produto.post_content}
          value={produto.post_content}
          type="text"
          name="descricao"
          {...descricao}
          className={styles.input}
        />
        <Input
          value={produto.preco}
          name="preco"
          label="Preço"
          {...preco}
          placeholder={produto.preco}
          className={styles.input}
        />
        {mobile ? (
          <div className={styles.uploadContainer}>
            <label htmlFor="file-upload" className={styles.customFileUpload}>
              {/* Ícone - Verifique se Font Awesome está configurado */}
              <i className="fa fa-cloud-upload" aria-hidden="true"></i>
            </label>
            <input
              id="file-upload" // ID é crucial para o 'htmlFor' do label
              className={styles.fileUpload} // Aplica a classe para esconder via CSS Modules
              type="file" // Adiciona o handler para atualizar o nome do arquivo
              aria-label="Upload de arquivo"
              onChange={handleImageChange} // Melhora a acessibilidade
            />
          </div>
        ) : (
          <input type="file" name="img" id="img" onChange={handleImageChange} />
        )}
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button style={{ backgroundColor: '#388E3C' }}>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
      <div className={styles.deletar}>
        <ProdutoDelete id={produto.id} />
      </div>
      <Error error={error} />
    </div>
  );
};

export default ProdutoContent;
