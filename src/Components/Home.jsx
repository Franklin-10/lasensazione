import Introducao from './Home/Introducao';
import Promocao from './Home/Promocao';
import Contato from './Home/Contato';
import ImageCarrossel from './Feed/ImageCarrossel';
import Head from './Helper/Head';

const Home = () => {
  return (
    <section className=" mainContainer">
      <Head title="Home" />
      <Introducao />
      <Promocao />
      <ImageCarrossel />
      <Contato />
    </section>
  );
};

export default Home;
