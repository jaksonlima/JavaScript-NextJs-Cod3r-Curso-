import { useState } from "react"

function mega(number = 6, numeros = []) {
  number = +number
  if(number < 6 && number > 60) {
    throw new Error('Quantidade inválida.')
  }

  if(numeros.length === number) {
    return numeros.sort((n1, n2) => n1 - n2)
  }

  const total = parseInt(Math.random() * 60) + 1

  if(!numeros.includes(total)) {
      return mega(number, [...numeros, total])
  } else {
    return mega(number, numeros)
  }
}

function MegaSena() {
  const [get, set] = useState(mega())
  const [getGe, setGe] = useState()

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    
    }}>
     <h3>Mega-Sena</h3>

     <input type="number" name="qtd" id="qtd" min={6} max={20} value={getGe}
      onChange={e => setGe(e.target.value)}/>

      <input  type="button" value="Gerar Aposta" onClick={(event) => set(mega(getGe))} style={{
       margin: '13px'
     }}/>
   
     <div style={{
       display: 'flex',
       width: '60%',
       flexWrap: 'wrap'
    }} >
      {get.map(numero => (
        <div key={numero} style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '3px',
          borderRadius: '50px',
          backgroundColor: '#222',
          width: '50px',
          height: '50px',
          
        }}>
          <span style={{
            color: 'white',
          }}>
           {numero}
          </span>
        </div>
      ))}
      </div>

    </div>
  );
}

export default MegaSena;