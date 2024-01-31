import React from 'react'
import PropTypes from 'prop-types'
import reactImg from './assets/config.png'
import { CORE_CONCEPTS } from './data.js'

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

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

CoreConcept.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((data, i) => (
              <CoreConcept
                key={i}
                image={data.image}
                title={data.title}
                description={data.description}
              />
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
