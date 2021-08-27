import Image from 'next/image'
import { Fragment, useState } from "react";

import AuthInput from "../components/auth/AuthInput";
import { IconWarn } from '../components/Icons';
import useAuthContext from '../data/hook/useAuthContext';

interface AutenticacaoProps {
}

export type AuthMode = 'login' | 'cadastro'

function Autenticacao(props: AutenticacaoProps) {
  const [modo, setModo] = useState<AuthMode>('login')
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const [erro, setErro] = useState(null)
  const { usuario, loginGoogle } = useAuthContext()

  function submit() {
    if (modo === 'login') {
      console.log('login')
      exibirErro('Ocorreu um erro no Login')
    } else {
      console.log('Cadastrar')
      exibirErro('Ocorreu um erro no Cadastro')
    }
  }

  function exibirErro(msg, tempoS = 5) {
    setErro(msg)
    setTimeout(() => setErro(null), tempoS * 1000)
  }

  return (
    <div className={`
    flex h-screen items-center justify-center
    `}>
      <div className={`
       hidden md:block md:w-1/2 lg:w-2/3
      `}>
        <img
          src="https://source.unsplash.com/random"
          alt="Auth"
          className={`h-screen w-full object-cover`}
        />
      </div>
      <div className={`
        m-10 w-full md:w-1/2 lg:w-1/3
      `}>
        <h1 className={`
        text-3xl font-bold mb-5
      `}>
          {modo === 'login' ? 'Entre com sua Conta' : 'Cadastre-se na plataforma'}
        </h1>

        {erro ? (
          <div style={{ position: 'absolute', top: '10px', right: '10px' }}
            className={`
          flex items-center
          bg-red-400 text-white py-3 px-5 my-2
          border border-red-700 rounded-lg
        `}>
            {IconWarn()}
            <span className={`ml-3`}>{erro}</span>
          </div>
        )
          : <Fragment />}

        <AuthInput
          type="email"
          label="Email"
          valor={email}
          obrigatorio
          onChange={setEmail}
        />
        <AuthInput
          type="password"
          label="Senha"
          valor={senha}
          obrigatorio
          onChange={setSenha}
        />

        <button onClick={submit} className={`
        w-full bg-indigo-500 hover:bg-indigo-400 
        text-white rounded-lg px-4 py-3 mt-6
      `}>
          {modo === 'login' ? 'Entre' : 'Cadastrar'}
        </button>

        <hr className={`
        my-6 border-gray-300 w-full
      `} />

        <button onClick={loginGoogle} className={`
        flex justify-center items-center
        w-full bg-red-500 hover:bg-red-400 
        text-white rounded-lg px-4 py-3 
      `}>
          <Image src="/google.svg" width="25" height="25" />
          <span className={`ml-4`}>Entre com Google</span>
        </button>

        {modo === 'login' ? (
          <p className={`mt-8`}>
            Novo por aqui?
            <a onClick={() => setModo('cadastro')} className={`
              text-blue-500 hover:text-blue-700 font-semibold
              cursor-pointer ml-2
            `}>
              Criar uma conta gratuitamente
            </a>
          </p>
        ) : (
          <p className={`mt-8`}>
            Já faz parte da nossa comunidade?
            <a onClick={() => setModo('login')} className={`
              text-blue-500 hover:text-blue-700 font-semibold
              cursor-pointer ml-2
            `}>
              Entre com suas Credenciais
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

export default Autenticacao;