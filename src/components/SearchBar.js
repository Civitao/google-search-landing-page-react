import React from 'react'
import searchGlass from '../assets/search-glass.svg'
import { BsKeyboardFill } from '../../node_modules/react-icons/bs'
import voiceSearch from '../assets/voice-search.svg'

function SearchBar() {
  return (
    <div className="search-bar">
      <img className='search-glass' src={searchGlass} alt="search-glass" />
      <input maxLength={2848} className="search-input" type="text"></input>
      <button className="active-keyboard">
        <BsKeyboardFill />
      </button>
      <img className='voice-search' src={voiceSearch} alt='voice-search-icon' />
    </div>
  )
}

export default SearchBar
