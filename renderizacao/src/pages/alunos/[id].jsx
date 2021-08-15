import { useRouter } from 'next/router'

export async function getStaticPaths() {
  const response = await fetch('http://localhost:3000/api/tutores')
  const data = await response.json()

  const paths = data.map((tutores) => {
    return { params: { ...tutores } }
  })

  return {
    fallback: 'blocking',
    paths
  }
}

export async function getStaticProps({ params: { id } }) {
  console.log(id)
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const reponse = await fetch(`http://localhost:3000/api/alunos/${id}`)
  const data = await reponse.json()

  return {
    revalidate: 10,
    props: {
      data,
      date: new Date().toLocaleDateString("pt-BR", options),
      time: new Date().toLocaleTimeString()
    }
  }
}

function Alunos({ data: aluno, date, time }) {
  const router = useRouter()

  return (
    <div>
      <h1>Aluno</h1>
      <ul>
        <li>{aluno.id}</li>
        <li>{aluno.nome}</li>
        <li>{aluno.email}</li>
        <li>{date}</li>
        <li>{time}</li>
      </ul>
    </div>
  );
}

export default Alunos;