interface EntradaProps {
  className?: string
  texto: string
  type?: string
  valor: any
  readOnly?: boolean,
  onChange?: (env) => void
}

function Entrada(props: EntradaProps) {
  return (
    <div className={`
      flex flex-col
      ${props.className}
    `}>
      <label className={`mb-4`}>{props.texto}</label>
      <input
        value={props.valor}
        type={props.type ?? 'text'}
        readOnly={props.readOnly}
        onChange={env => props?.onChange(env.target.value)}
        className={`
          border border-purple-500 rounded-lg
          focus:outline-none bg-gray-100 px-4 py-2
          ${props.readOnly ? '' : 'focus:bg-white'}
        `}
      />

    </div>
  )
}

export default Entrada