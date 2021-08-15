import styles from '../styles/Estatico2.module.css'

export async function getStaticProps() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return {
    revalidate: 10,
    props: {
      data: new Date().toLocaleDateString("pt-BR", options),
      horas: new Date().toLocaleTimeString()
    }
  }
}

export default function Estatico3(props) {
  return (
    <div className={styles.container}>
      <h1>#3 Estatico.</h1>
      <h2>getStaticProps {'->'} revalidate 10 segundos</h2>
      <h2>{props.data}</h2>
      <h2>{props.horas}</h2>
      <footer>
        <p> Author: Jakson Lima</p>
      </footer>
    </div>
  );
}

