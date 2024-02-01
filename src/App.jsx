import React from 'react'
import { CORE_CONCEPTS } from './data.js'
import Header from './components/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'

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
