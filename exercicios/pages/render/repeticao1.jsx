function Repeticao1() {
  const listAprovados = [
    'Jakson',
    'Lima',
    'Maria',
    'Bia',
    'Ana',
    'Daniela',
    'Laura',
  ]

  function renderList() {
    const itens = []

    for (let i = 0; i < listAprovados.length; i++) {
      itens.push(<li key={i}>{listAprovados[i]}</li>)
    }

    return itens
  }

  function renderListWithMap() {
    const newListWithMap = listAprovados.map(item => (
      <li key={item}>{item}</li>
    ))

    console.log(newListWithMap)

    return newListWithMap
  }

  return (
    <ul>
      {listAprovados.map(item => (
        <li key={item}>{item}</li>
      ))}

      <hr />

      {renderList()}

      {renderListWithMap()}
    </ul>
  )
}

export default Repeticao1;