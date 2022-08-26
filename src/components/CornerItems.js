import React from 'react'
import AppsMenu from './AppsMenu'


function CornerItems() {
  return (
    <div className="corner-items">
      <a className="gmail" href="https://www.gmail.com" target="_blank" rel="noreferrer">
        Gmail
      </a>
      <a className="imagens" href="null">
        Imagens
      </a>
      <AppsMenu />

      <img
        className="profile"
        alt="profile"
        src="https://lh3.googleusercontent.com/a-/AFdZucqvfshebgtMJDnGnsKiaritlCpr2hzKmUFv8259MA=s432-p-rw-no"
      />
    </div>
  )
}

export default CornerItems
