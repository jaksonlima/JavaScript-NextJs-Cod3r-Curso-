export default function Filho(props) {
  console.log(props)
  return (
    <div>
       filho

       <button onClick={() => props.function('Passei no Enem')} >Handle Button Pai</button>
    </div>
  )
}