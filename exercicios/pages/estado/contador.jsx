import { useState } from 'react';

function Contador() {
  const [get, set] = useState(0)

  const styleDic = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }

  return (
    <div style={styleDic}>
      <h1>Contador</h1>
      <div>Valor: {get}</div>
      <button onClick={() => set(old => old + 1)}>+</button>
      <button onClick={() => set(old => old - 1)}>-</button>
    </div>
  );
}

export default Contador;