import { Fragment } from 'react'

import Cliente from "../core/Cliente"
import { IconeEdit, IconeTrash } from "./Icons"

interface TabelaProps {
  clientes: Cliente[]
  clienteSelecionado?: (cliente: Cliente) => void
  clienteExcluido?: (cliente: Cliente) => void
}

function Tabela({ clientes, clienteExcluido, clienteSelecionado }: TabelaProps) {
  function handleExistsActions(jsx) {
    return (
      <Fragment>
        {clienteExcluido || clienteSelecionado ? (jsx) : (<Fragment />)}
      </Fragment>
    )
  }

  function handleClientes() {
    return clientes.map((cliente, index) => (
      <tr key={cliente.id} className={`
        ${index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}
      `}>
        <td className={`text-left p-4`}>{cliente.id}</td>
        <td className={`text-left p-4`}>{cliente.nome}</td>
        <td className={`text-left p-4`}>{cliente.idade}</td>
        {handleExistsActions(handleAction(cliente))}
      </tr>
    ))
  }

  function handleAction(cliente: Cliente) {
    return (
      <td className="flex justify-center items-center">
        {clienteSelecionado ? (
          <button onClick={() => clienteSelecionado(cliente)} className={`
          flex justify-center items-center
          text-green-600 rounded-full p-2 m-1
          hover:bg-purple-50
        `}>
            {IconeEdit()}
          </button>
        ) : (<Fragment />)}
        {clienteExcluido ? (
          <button onClick={() => clienteExcluido(cliente)} className={`
        flex justify-center items-center
        text-red-600 rounded-full p-2 m-1
        hover:bg-purple-50
      `}>
            {IconeTrash()}
          </button>
        ) : (<Fragment />)}
      </td>
    )
  }

  return (
    <table className={`w-full rounded-lg overflow-hidden`}>
      <thead className={`
      text-gray-100
        bg-gradient-to-t from-purple-500  to-purple-800
      `}>
        <tr>
          <th className={`text-left p-4`}>Código</th>
          <th className={`text-left p-4`}>Nome</th>
          <th className={`text-left p-4`}>Idade</th>
          {handleExistsActions(<th className={`p-4`}>Açôes</th>)}
        </tr>
      </thead>
      <tbody>
        {handleClientes()}
      </tbody>
    </table>
  )
}

export default Tabela