import Link from 'next/link'
import routerD, { useRouter } from "next/router";

function Routes() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/routes/params?idade=jakson&faculdade=ciencias')
  }

  const handleNavigateParams = () => {
    routerD.push({
      pathname: '/routes/params',
      query: {
        idade: '24',
        faculdade: 'ciencias-da-computaçao'
      }
    })
  }
  return (
    <div>
      <h1>Rota index</h1>
      <ul>
        <Link href="/routes/params?idade=jakson&faculdade=ciencias" passHref>
          <li>
            <button>Params</button>
          </li>
        </Link>
      </ul>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}>
        <button onClick={handleNavigate}>
         Search Simple
        </button>
        <button onClick={handleNavigateParams}>
          Search With Params
        </button>
      </div>
    </div>
  );
}

export default Routes;