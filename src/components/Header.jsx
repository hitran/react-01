import React from 'react'
import reactImg from '../assets/config.png'

function Header() {
  const reactDescriptions = ['Core', 'Fundamental', 'Crucial']

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * (max + 1))
  }

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[getRandomInt(2)]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  )
}

export default Header
