import useFetch from '../../Hooks/useFetch';
import { PRODUTO_DELETE } from '../../Api';
import Button from '../Forms/Button';

const ProdutoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleclick() {
    const confirm = window.confirm('Tem certeza que deseja deletar?');
    if (confirm) {
      const { url, options } = PRODUTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <Button disabled>Deletar</Button>
      ) : (
        <Button onClick={handleclick}>Deletar</Button>
      )}
    </>
  );
};

export default ProdutoDelete;
