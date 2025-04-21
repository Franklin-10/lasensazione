import mapa from '../../Assets/mapa.jpg';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import styles from './Contato.module.css';
import useForm from '../../Hooks/useForm';

const Contato = () => {
  const nome = useForm('text');
  const telefone = useForm('text');

  function sendMessage() {
    if (nome.error || !nome.value) {
      return alert('Por favor, informe seu nome.');
    }
    const mensagem = `Olá, meu nome é ${nome.value}, desejo mais informações`;
    const numeroWhatsapp = '5511999999999';
    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsapp}&text=${encodeURIComponent(
      mensagem,
    )}`;
    window.location.href = url;
  }

  return (
    <section className={styles.section}>
      <div className={`${styles.div} container`}>
        <div className={styles.titulo}>
          <h1 className={`${styles.h1} title`}>CONTATO</h1>
        </div>
        <div className={styles.dados}>
          <div className={styles.horario}>
            <h3>Horario</h3>
            <p>De sexta à Sábado Das 06:00 às 14:00</p>
          </div>
          <div className={styles.contato}>
            <h3>Email & Telefone</h3>
            <p>contato@lasensazione.com</p>
            <p>21 99999-9999</p>
          </div>
          <div className={styles.endereco}>
            <h3>Endereço</h3>
            <p>
              Praia Mansa nº 47, Rio de Janeiro - RJ Procure a barraca vermelha
            </p>
          </div>
          <img src={mapa} alt="" className={styles.mapa} />
        </div>
        <div className={styles.whatsapp}>
          <h3>Contate-nos pelo WhatsApp</h3>
          <Input label="Nome" name="nome" type="text" {...nome} />
          <Input label="Telefone" name="telefone" type="text" {...telefone} />
          <Button onClick={sendMessage}>ENVIAR </Button>
        </div>
      </div>
    </section>
  );
};

export default Contato;
