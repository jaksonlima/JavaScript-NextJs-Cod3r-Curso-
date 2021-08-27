interface ConteudoProps {
  children?: any
}

function Conteudo(props: ConteudoProps) {
  return (
    <div
      className={`
      flex flex-col mt-7
      dark:text-gray-200
      `}
    >
      {props.children}
    </div>
  )
}

export default Conteudo;