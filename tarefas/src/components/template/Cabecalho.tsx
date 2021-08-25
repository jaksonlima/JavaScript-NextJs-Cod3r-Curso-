function Cabecalho(props) {
  return (
    <div className={`
      bg-img-tarefas bg-no-repeat 
      bg-cover flex h-1/3
    `}>
      <div className={` 
        flex flex-1 h-full
        justify-center items-center
        bg-gradient-to-r
        from-purple-600 via-transparent to-blue-600
      `}>
        {props.children}
      </div>
    </div>
  )
}

export default Cabecalho