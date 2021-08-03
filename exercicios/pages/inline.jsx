import { useEffect, useState } from "react";

function Inline() {
  const [getClock, setClock] = useState(new Date().getMinutes())

  useEffect(() => {
    setInterval(() => {
      const minutes = new Date().getMinutes()

      setClock(minutes)

      console.log(minutes * 100)
    }, 60000)

    
  }, [])

  
  return (
    <>
      <div style={{
        background: '#222',
        height: '100vh',
        position: 'relative'
      }}>
        <div style={{
          width: '100vh',
          height: '1px',
          background: 'tomato',
          position: 'absolute',
          bottom: `${getClock}px`,
        }} className="sobreposicao"></div>

        <div style={{
          color: 'white'
        }} className="children02">
          Agenda 16:58
        </div>

        <div style={{
          color: 'white'
        }} className="children01">
          Agenda 17:58
          </div>

      </div>
    </>
  );
}

export default Inline;