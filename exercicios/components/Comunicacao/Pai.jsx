import Filho from './Filho'

function Pai(props) {
  return (
    <>
      <Filho {...props} nome="Jakson" />
    </>
  )
}

export default Pai;