import { useState } from "react"

function useTabelaOrForme() {
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  const exibirForm = () => setVisible('form')
  const exibirTable = () => setVisible('table')

  return {
    isFormulario: visible === 'form',
    isTabela: visible === 'table',
    exibirForm,
    exibirTable
  }
}

export default useTabelaOrForme