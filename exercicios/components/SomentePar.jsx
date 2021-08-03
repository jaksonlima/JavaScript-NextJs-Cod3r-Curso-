function SomentePar({numero}) {
  return (
    <>
      {numero % 2 === 0 ? <span>{numero}</span> : <div/>}
    </>
  )
}

export default SomentePar;