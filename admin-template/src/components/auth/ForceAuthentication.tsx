import Head from 'next/head'
import Image from 'next/image'
import router from 'next/router'
import { Fragment } from 'react'

import Load from '../../../public/loading.gif'
import useAuthContext from '../../data/hook/useAuthContext'

interface AutenticaoForceProps {
  children?: any
}

function AutenticaoForce(props: AutenticaoForceProps) {
  const { usuario, load } = useAuthContext()

  function handleContent() {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              if (!document.cookie?.includes('admin-template-auth')) {
                window.location.href = "/autenticacao"
              }
            `
            }}
          />
        </Head>
        {props.children}
      </>
    )
  }

  function handleLoad() {
    return (
      <div className={`
        flex justify-center items-center h-screen
      `}>
        <Image src={Load} />
      </div>
    )
  }

  if (!load && usuario?.email) {
    return handleContent()
  } else if (load) {
    return handleLoad()
  } else {
    router.push('/autenticacao')
    return <Fragment />;
  }
}

export default AutenticaoForce;