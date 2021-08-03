import { useRouter } from 'next/router'

function Nome() {
  const router = useRouter()
  const id = +router.query.id
  const nome = router.query.nome

  return <div>Routes / id: {id} / Nome {nome}</div>;
}

export default Nome;