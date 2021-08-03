import Filho from './Filho'

export default function Pai() {
  function handlePai(props) {
    console.log('handlePai')
    console.log(props)
  }

   return (
    <>
     <Filho function={handlePai}/>
    </>
  )
}