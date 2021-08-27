import { Fragment } from "react";

interface AuthInputProps {
  label: string
  valor: any
  type?: 'text' | 'email' | 'password'
  obrigatorio?: boolean
  notRender?: boolean
  onChange?: (novoValor: any) => void
}

function AuthInput(props: AuthInputProps) {
  return props.notRender ? <Fragment /> : (
    <div className={`flex flex-col mt-4`}>
      <label htmlFor="">{props.label}</label>
      <input
        type={props.type ?? 'text'}
        value={props.valor}
        required={props.obrigatorio}
        onChange={env => props.onChange?.(env.target.value)}
        className={`
          px-4 py-3 rounded-lg
          bg-gray-200 mt-2
          border focus:border-blue-500 focus:outline-none focus:bg-white
        `}
      />
    </div>
  );
}

export default AuthInput;