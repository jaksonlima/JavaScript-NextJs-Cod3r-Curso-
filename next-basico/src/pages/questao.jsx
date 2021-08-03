import { useEffect, useState } from "react";

function Questao() {
  const [questao, setQuestao] = useState()

  useEffect(() => {
    fetch('http://localhost:3000/api/questao/200.000')
    .then(res => res.json())
    .then(setQuestao)
  }, [])

  return (
    <div>
      <h1>Questão</h1>
      <div>
        {questao && (
          <>
          <span>
            {questao.enunciado}
          </span>
          <ul>
            {questao
            .respostas?.map((res, index) => <li key={index}>{res}</li>)}
          </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default Questao;