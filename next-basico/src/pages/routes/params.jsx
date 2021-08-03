import { useRouter } from "next/router";
import Link from 'next/link'

function Params() {
  const router = useRouter()

  return (
    <div>
         Param: idade: {router.query.idade}, faculdade: {router.query.faculdade}
      <div>
       <Link href="/routes" passHref>
          <button>Voltar</button>
       </Link>
      </div>
    </div>
  );
}

export default Params;