import { useState, Fragment } from "react";

import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
  className?: string
  cliente: Cliente
  cancelado?: () => void
  clienteSalvo?: (cliente: Cliente) => void
}

function Formulario(props: FormularioProps) {
  const id = props.cliente?.id;

  const [nome, setNome] = useState(props.cliente?.nome ?? '')
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

  return (
    <div>
      {id ? (<Entrada texto="Código" valor={id} readOnly className={`mb-2`} />)
        : (<Fragment />)}
      <Entrada
        texto="nome"
        valor={nome}
        onChange={setNome}
        className={`mb-2`}
      />
      <Entrada
        type="number"
        texto="idade"
        valor={idade}
        onChange={setIdade}
      />
      <div className={`flex justify-end mt-3`}>
        <Botao
          cor="blue"
          className="mr-2"
          onClick={() => props.clienteSalvo(new Cliente(nome, idade, id))}
        >
          {id ? 'Alterar' : 'Salvar'}
        </Botao>
        <Botao onClick={props.cancelado}>
          Cancelar
        </Botao>
      </div>
    </div>
  )
}

export default Formulario