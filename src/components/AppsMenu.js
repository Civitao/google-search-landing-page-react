import React from 'react'
import { useRef } from 'react'
import appsButton from '../assets/apps.png'
import {
  Search,
  Maps,
  Youtube,
  Playstore,
  Gmail,
  Contacts,
  Drive,
  Schedule,
  Translate,
  Meet,
  Photos,
  Duo,
  News,
  Chat
} from '../assets/apps-icons/index.js'
// import { useOutsideClick } from './useOutsideClick'
import { useState } from 'react'
import '../components-css/AppsMenu.css'


function AppsMenu() {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false)
  const onClick = () => setIsActive(!isActive)
   
  console.log(isActive)



  return (
    <div className="apps-menu">
      <button className="apps" onClick={onClick}>
        <img className='apps-img' alt="apps-icon" src={appsButton} />
      </button>
      <div ref={dropDownRef} className={`menu ${isActive ? "active" : "inactive"}`} >
        <div className='apps-div'>

          <div className='first-row'>
          <div className='single-app'>
            <img src={Search} alt="search-b"></img>
            <text>Search</text>
          </div>
          <div className='single-app'>
            <img src={Maps} alt="maps-b"></img>
            <text>Maps</text>
          </div>
          <div className='single-app'>
            <img src={Youtube} alt="youtube-b"></img>
            <text>Youtube</text>
          </div>
          </div>

          <div className='second-row'>
          <div className='single-app'>
            <img src={Playstore} alt="playstore-b"></img>
            <text>Play</text>
          </div>
          <div className='single-app'>
            <img src={Gmail} alt="gmail-b"></img>
            <text>Gmail</text>
          </div>
          <div className='single-app'>
            <img src={Contacts} alt="contacts-b"></img>
            <text>Contacts</text>
          </div>
          </div>
          
          <div className='third-row'>
          <div className='single-app'>
            <img src={Drive} alt="drive-b"></img>
            <text>Drive</text>
          </div>
          <div className='single-app'>
            <img src={Schedule} alt="schedule-b"></img>
            <text>Schedule</text>
          </div>
          <div className='single-app'>
            <img src={Translate} alt="translate-b"></img>
            <text>Translate</text>
          </div>
          </div>

          <div className='fourth-row'>          
          <div className='single-app'>
            <img src={Meet} alt="meet-b"></img>
            <text>Meet</text>
          </div>
          <div className='single-app'>
            <img src={Photos} alt="photos-b"></img>
            <text>Photos</text>
          </div>
          <div className='single-app'>
            <img src={Duo} alt="duo-b"></img>
            <text>Duo</text>
          </div>
          </div>
          <div className='fifth-row'>
          <div className='single-app'>
            <img src={News} alt="news-b"></img>
            <text>News</text>
          </div>
          <div className='single-app'>
            <img src={Chat} alt="chat-b"></img>
            <text>Chat</text>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppsMenu
