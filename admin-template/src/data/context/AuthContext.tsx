import { createContext, useEffect, useState } from "react"
import router from 'next/router'
import Cookies from 'js-cookie'

import firebase from '../../firebase/config'
import Usuario from '../../model/Usuario'

export enum TypeCookieAuth {
  LABEL_COOKIE_AUTH = 'admin-template-auth'
}

interface AuthProviderProps {
  children: any
}

interface ContextProps {
  usuario?: Usuario
  load?: boolean
  login?: (email: string, senha: string) => Promise<void>
  cadastrar?: (email: string, senha: string) => Promise<void>
  loginGoogle?: () => Promise<void>
  logout?: () => Promise<void>
}

const AuthContext = createContext<ContextProps>({})

async function normalizerUserFireBase(userFirebase: firebase.User): Promise<Usuario> {
  const token = await userFirebase.getIdToken()
  return {
    uid: userFirebase.uid,
    nome: userFirebase.displayName,
    email: userFirebase.email,
    token,
    provedor: userFirebase.providerData[0].providerId,
    imagemUrl: userFirebase.photoURL,
  };
}

function generatedCookie(isLogin: boolean) {
  if (isLogin) {
    Cookies.set(TypeCookieAuth.LABEL_COOKIE_AUTH, `${isLogin}`, {
      expires: 7
    })
  } else {
    Cookies.remove(TypeCookieAuth.LABEL_COOKIE_AUTH)
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState<Usuario>(null)
  const [load, setLoad] = useState<boolean>(true)

  useEffect(() => {
    if (Cookies.get(TypeCookieAuth.LABEL_COOKIE_AUTH)) {
      const cancel = firebase.auth().onIdTokenChanged(sessionUser)
      return cancel
    } else {
      setLoad(false)
    }
  }, [])


  async function logout() {
    try {
      setLoad(true)
      await firebase.auth().signOut()
      await sessionUser(null)
    } finally {
      setLoad(false)
      router.push('/autenticacao')
    }
  }

  async function sessionUser(userFirebase: firebase.User) {
    try {
      if (userFirebase?.email) {
        const user = await normalizerUserFireBase(userFirebase)
        setUsuario(user)
        generatedCookie(true)
        return userFirebase?.email
      } else {
        setUsuario(null)
        generatedCookie(false)
        return false
      }
    } finally {
      setLoad(false)
    }
  }

  async function loginGoogle() {
    try {
      setLoad(true)
      const response = await firebase.auth().signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      )

      await sessionUser(response.user)
      router.push('/')
    } finally {
      setLoad(false)
    }
  }

  async function login(email: string, senha: string) {
    try {
      setLoad(true)
      const response = await firebase.auth()
        .signInWithEmailAndPassword(email, senha)

      await sessionUser(response.user)
      router.push('/')
    } finally {
      setLoad(false)
    }
  }

  async function cadastrar(email: string, senha: string) {
    try {
      setLoad(true)
      const response = await firebase.auth()
        .createUserWithEmailAndPassword(email, senha)

      await sessionUser(response.user)
      router.push('/')
    } finally {
      setLoad(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        load,
        login,
        loginGoogle,
        cadastrar,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const Consumer = AuthContext.Consumer
export default AuthContext