import React from 'react'
import Logo from "../images/logo.png"

export const Header = () => {
  return (
    <header className='flex w-full'>
        <img src={Logo} alt="Logo of the company"/>
        <nav className='w-11/12 my-auto'>
          <ul className='flex justify-around'>
            <li>Mieszkania</li>
            <li>Deweloper</li>
            <li>Realizacje</li>
            <li>Kontakt</li>
            <li>Lokalizacja</li>
          </ul>
        </nav>
    </header>
  )
}
