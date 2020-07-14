import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Sobre = () => {
  return (
    <div>
      <PageTitle title='Sobre' />
      <h1>Nós do palpite rápido somos um facilitador para você que está buscando para sua empresa estar em contato com seus cliente.
      
      </h1>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </div>
    </div>

  )
}
export default Sobre
