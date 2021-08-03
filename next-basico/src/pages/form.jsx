import { useEffect, useState } from "react";

function Form() {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [usuarios, setUsuarios] = useState([])

  const enviar = () => {
      fetch('/api/form', {
        method: 'POST',
        body: JSON.stringify({
          nome,
          idade
        })
      })
  }

  const resultado = async () => {
    const reponse = await fetch('/api/form')
    const usuariosResponse = await reponse.json()
    setUsuarios(usuariosResponse)
  }
  
  return (
    <>
    
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '20%',
    }}>
      <h1>Integrando com API #1</h1>
      <input 
        type="text" 
        name="nome" 
        id="nome"
        value={nome}
        onChange={(env) => setNome(env.target.value)}
        />
      <input 
        type="number" 
        name="idade" 
        id="idade" 
        value={idade}
        onChange={(env) => setIdade(env.target.value)}
        />
        <button onClick={enviar}>Enviar</button>
        <button onClick={resultado}>Resultado</button>
    </div>
    <div>
      <ul>
        {usuarios.map((user, index) => (
          <li key={index}>{user.nome} | {user.idade}</li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default Form;