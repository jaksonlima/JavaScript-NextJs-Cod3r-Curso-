import Link from 'next/link'

interface MenuItemProps {
  url?: string
  texto: string
  icone: any
  className?: string
  onClick?: (evento) => void
}

function MenuItem(props: MenuItemProps) {
  function handleRouter() {
    return (
      <a className={`
      flex flex-col justify-center items-center
      h-20 w-20 
      dark:text-gray-200
       ${props.className}
    `}>
        {props.icone}
        <span className={`text-xs font-light`}>
          {props.texto}
        </span>
      </a>
    )
  }
  return (
    <li onClick={props.onClick} className={`
      hover:bg-gray-300 
      dark:hover:bg-gray-800
       cursor-pointer
    `}>
      {props.url ? (
        <Link href={props.url}>
          {handleRouter()}
        </Link>

      ) : (
        handleRouter()
      )}
    </li>
  )
}

export default MenuItem;