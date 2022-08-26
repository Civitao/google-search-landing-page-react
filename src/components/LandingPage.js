import React from 'react'
import '../components-css/LandingPage.css'
import CornerItems from './CornerItems'
import myLogo from '../../src/assets/logo.png'
import SearchBar from './SearchBar'
import Footer from './Footer'
import SearchButtons from './SearchButtons'

function LandingPage() {
  return (
    <div className="body">
      <CornerItems />
      <img className="logo" alt="google-logo" src={myLogo} />
      <SearchBar />
      <SearchButtons />
      <text className="available">
        Disponibilizado pelo Google em:{' '}
        <a
          href="https://en.wikipedia.org/wiki/English_language"
          className="civitao"
        >
          Civitao
        </a>
      </text>
      <Footer />
    </div>
  )
}

export default LandingPage
