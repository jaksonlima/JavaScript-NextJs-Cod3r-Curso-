import { useEffect, useState } from "react"

import ColectionCliente from "../backend/db/ColectionCliente"
import Cliente from "../core/Cliente"
import ClienteRepository from "../core/ClienteRepository"
import useTabelaOrForme from "./useTabelaOrForme"

function useClientes() {
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  const { exibirForm, exibirTable, isFormulario, isTabela } = useTabelaOrForme()

  const repoCliente: ClienteRepository = new ColectionCliente()

  useEffect(handlFindAll, []);

  function handlFindAll() {
    repoCliente.findAll()
      .then(clientes => {
        setClientes(clientes)
        exibirTable()
      })
  }

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    exibirForm()
  }

  async function clienteExcluido(cliente: Cliente) {
    await repoCliente.excluir(cliente)
    handlFindAll()
  }

  async function salvarCliente(cliente: Cliente) {
    await repoCliente.salvar(cliente)
    handlFindAll()
  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    exibirForm()
  }

  return {
    isTabela,
    cliente,
    clientes,
    clienteSelecionado,
    clienteExcluido,
    salvarCliente,
    novoCliente,
    exibirTable
  }
}

export default useClientes