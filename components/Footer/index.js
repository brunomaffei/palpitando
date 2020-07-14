import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-700 p-4'>
      <div className='container mx-auto text-center font-bold text-white'>
        Projeto desenvolvido por: {' '}
        <a className='hover:underline' href='https://palpiteaqui.com.br'>Palpite Aqui</a> / {' '}
        <a className='hover:underline' href='https://linkedin.com/in/brunomaffei'>Linkedin</a> / {' '}
        <a className='hover:underline' href='https://github.com/brunomaffei'>Github</a>
    
      </div>

    </div>
  )
}
export default Footer
