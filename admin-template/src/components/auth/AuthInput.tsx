import { Fragment, useState } from "react";
import { IconEve, IconEveOff } from "../Icons";

type Type = 'text' | 'email' | 'password'

interface AuthInputProps {
  label: string
  valor: any
  type?: Type
  placeholder?: string
  obrigatorio?: boolean
  notRender?: boolean
  onChange?: (novoValor: any) => void
}

function AuthInput(props: AuthInputProps) {
  const [type, setType] = useState<Type>(props.type)

  function handlePassword() {
    setType(old => old === 'password' ? 'text' : 'password')
  }

  return props.notRender ? <Fragment /> : (
    <div className={`flex flex-col mt-4 relative`}>
      <label htmlFor="">{props.label}</label>
      <input
        placeholder={props.placeholder ?? 'Preenchimento obrigatório'}
        type={type ?? 'text'}
        value={props.valor}
        required={props.obrigatorio}
        onChange={env => props.onChange?.(env.target.value)}
        className={`
          px-4 py-3 rounded-lg
          bg-gray-200 mt-2
          border focus:border-blue-500 focus:outline-none focus:bg-white
        `}
      />
      {props?.type === 'password' && (
        <div className={`absolute right-2 bottom-2  text-gray-500`}>
          <button onClick={handlePassword}>
            {type === 'text' ? IconEve(5) : IconEveOff(5)}
          </button>
        </div>
      )}
    </div>
  );
}

export default AuthInput;