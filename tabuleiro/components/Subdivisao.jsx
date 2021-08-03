import stylesSubdivisao from "../styles/Subdivisao.module.css";

function Subdivisao({ preto }) {
  return (
    <div style={{
      backgroundColor: preto ? '#000' : '#fff'
    }} 
    className={stylesSubdivisao.subdivisao}>

    </div>
  )
}

export default Subdivisao;