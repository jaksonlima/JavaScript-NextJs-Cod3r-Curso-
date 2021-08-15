import styles from '../styles/Estatico2.module.css'

export function getServerSideProps() {
  console.log('[Server]')
  return {
    props: {
      data: Math.random()
    }
  }
}

export default function Dinamico1(props) {
  console.log('[Browser]')
  return (
    <div className={styles.container}>
      <h1>#1 Dinamico.</h1>
      <ul>
        <li>{props.data}</li>
      </ul>
      <footer>
        <p> Author: Jakson Lima</p>
      </footer>
    </div>
  );
}

