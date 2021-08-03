function SomaUm(props) {
  console.log(process.env.NODE_ENV)
  return (
    <>
      <h1>soma um {props.numero + 1}</h1>
      <h1>{process.env.NODE_ENV}</h1>
    </>
  );
}

export default SomaUm;