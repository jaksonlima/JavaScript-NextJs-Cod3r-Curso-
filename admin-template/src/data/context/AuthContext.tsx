import router from 'next/router'
import { createContext, useState } from "react"

import firebase from '../../firebase/config'
import Usuario from '../../model/Usuario'

interface AuthProviderProps {
  children: any
}

interface ContextProps {
  usuario?: Usuario
  loginGoogle?: () => Promise<void>
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

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState<Usuario>(null)

  async function loginGoogle() {
    const response = await firebase.auth().signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
    if (response.user?.email) {
      const user = await normalizerUserFireBase(response.user)
      console.log(user)
      setUsuario(user)
      router.push('/')
    }
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        loginGoogle
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const Consumer = AuthContext.Consumer
export default AuthContext