import { useRouter } from 'next/router'

function Buscar() {
  const router = useRouter()
  const id = +router.query.id

  return <div>Routes / id: {id} / Buscar</div>;
}

export default Buscar;