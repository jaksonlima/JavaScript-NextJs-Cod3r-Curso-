import styles from '../styles/Estatico2.module.css'

export async function getStaticProps() {
  console.log('Server')
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const response = await fetch('http://localhost:3000/api/produto')
  const data = await response.json()
  return {
    // revalidate: 10,
    props: {
      data,
      date: new Date().toLocaleDateString("pt-BR", options),
      horas: new Date().toLocaleTimeString()
    }
  }
}

export default function Estatico4(props) {
  console.log('Browser')
  return (
    <div className={styles.container}>
      <h1>#4 Estatico.</h1>
      <h2>getStaticProps {'->'} revalidate 10 segundos</h2>
      <h2>{props.date}</h2>
      <h2>{props.horas}</h2>
      <ul>
        {props.data && props.data.map(item => (
          <li key={item.id}>
            {item.nome} tem preço de R${item.preco}
          </li>
        ))}
      </ul>
      <footer>
        <p> Author: Jakson Lima</p>
      </footer>
    </div>
  );
}

