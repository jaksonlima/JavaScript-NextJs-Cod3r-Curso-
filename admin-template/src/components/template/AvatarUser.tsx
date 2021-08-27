import Link from 'next/link'
import useAuthContext from "../../data/hook/useAuthContext"

interface AvatarUserProps {
  className?: string
}

function AvatarUser({ className }: AvatarUserProps) {
  const { usuario } = useAuthContext()
  return (
    <Link href="/perfil">
      <img
        src={usuario?.imagemUrl ?? '/homem.png'}
        alt="avatar usuario"
        className={`h-10 w-10 rounded-full cursor-pointer ${className}`} />
    </Link>
  )
}

export default AvatarUser