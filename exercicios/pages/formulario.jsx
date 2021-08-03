import { useState } from "react";

function Form() {
  const [get, set] = useState('Inicio')
  return (
    <form action="">
      <input type="text" value={get} onChange={(e) => set(e.target.value)} />
    </form>
  );
}

export default Form;