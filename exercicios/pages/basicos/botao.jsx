function handlClick_1(event) {
  console.log(event)
}

function Botao() {

  return (
    <>
      <button onClick={handlClick_1}>Click</button>
      <input onChange={event => console.log(event.target.value)}/>
    </>
  );
}

export default Botao;