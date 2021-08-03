import { useRouter } from 'next/router'

function Params() {
  const router = useRouter()
  const id = +router.query.id

  return <div>Routes / id: {id} / Params:  
  {Object.keys(router.query ?? {})
  .map((queryKey) => ` ${queryKey}: ${(router.query ?? {})[queryKey]}`)
  .sort(param => -1)
  .join(" | ")}
  </div>;
}

export default Params;