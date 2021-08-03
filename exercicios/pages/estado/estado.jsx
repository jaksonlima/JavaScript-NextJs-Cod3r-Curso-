import { useState } from 'react'

function Estado() {
  const [get, set] = useState({})

  function handleEventMouse(ev) {
    set({x: ev.clientX, y: ev.clientY})
  }

  const styleSpan = {color: 'white'}
  const styleDic = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }

  return (
    <div style={styleDic} onMouseMove={handleEventMouse}>
      <span style={styleSpan}>Eixo X: {get.x}</span>
      <span style={styleSpan}>Eixo Y: {get.y}</span>
    </div>
  );
}

export default Estado;