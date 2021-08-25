import Selecao from "./Selecao";

interface ListaItemProps {
  valor: string
  concluida: boolean
  alterarStatus: () => void
}

function ListaItem(props: ListaItemProps) {
  const extiloTexto = props.concluida ? 'line-through text-gray-300'
    : 'text-gray-500'
  return (
    <li
      onClick={props.alterarStatus}
      className={`
        flex items-center
         text-black
        p-5
        border-b border-gray-400
      `}
    >
      <Selecao valor={props.concluida} />
      <span className={`
        ml-5
        font-light
        cursor-pointer
        text-xl
        ${extiloTexto}
      `}>
        {props.valor}
      </span>
    </li>
  )
}

export default ListaItem