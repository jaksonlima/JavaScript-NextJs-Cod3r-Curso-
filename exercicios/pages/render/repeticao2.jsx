import listProdutos from '../../data/listaProduto'

function Repeticao2() {
  
  function renderizarLinhas() {
    return listProdutos.map(produto => (
        <tr key={produto.id}>
          <td>  
            {produto.id}
          </td>
          <td>  
            {produto.nome}
          </td>
          <td>  
            {produto.preco}
          </td>
        </tr>
    ))
  }

  return (
    <div>
      <table border="1">
        <thead >
          <tr>
            <th>Codigo</th>
            <th>Nome</th>
            <th>Preco</th>
          </tr>
        </thead>
        <tbody>
          {renderizarLinhas()}
        </tbody>
      </table>
    </div>
  )
}

export default Repeticao2;