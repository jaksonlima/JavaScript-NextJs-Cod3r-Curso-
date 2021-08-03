import Head from 'next/head'
import { useState } from 'react'

import Porta from '../components/Porta'
import Presente from '../components/Presente'

import PortaModel from '../model/portaModel'


export default function Home() {
  const [porta1, setPorta1] = useState<PortaModel>(new PortaModel(1, false, true, false))

  return (
    <div style={{
      display: 'flex'
    }}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head> 

        <Presente />
        <Porta value={porta1} onChange={setPorta1} />
    </div>
  )
}
