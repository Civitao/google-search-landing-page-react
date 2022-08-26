import React from 'react'

function Footer() {
  return (
    <div className='footer' >

      <div className='first-footer'>
        <text>Brasil</text> 
      </div>

      <div className='second-footer'>
        <div className='left-corner'>
          <a href='home'>Sobre</a>
          <a href='home'>Publicidade</a>
          <a href='home' >Negócios</a>
          <a href='home' >Como funciona a Pesquisa</a>
        </div>
        <div className='right-corner'>
          <a href='home'>Privacidade</a>
          <a href='home'>Termos</a>
          <a href='home'>Configurações</a>
        </div>
      </div>
    </div>
  )
}

export default Footer