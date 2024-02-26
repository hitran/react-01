import React, { useState } from 'react'
import TabButton from '../TabButton/TabButton.jsx'
import { EXAMPLES } from '../../data.js'

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(null)
  function handleSelect(topic) {
    setSelectedTopic(topic)
  }
  let tabContent = <p>Please select a topic</p>
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    )
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === 'components'}
          onSelect={() => handleSelect('components')}
          type="Component"
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'jsx'}
          onSelect={() => handleSelect('jsx')}
          type="JSX"
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'props'}
          onSelect={() => handleSelect('props')}
          type="Props"
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'state'}
          onSelect={() => handleSelect('state')}
          type="State"
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </section>
  )
}
