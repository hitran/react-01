import React, { useState } from 'react'
import TabButton from '../TabButton/TabButton.jsx'
import Section from '../Section/Section.jsx'
import { EXAMPLES } from '../../data.js'
import Tabs from '../Tabs/Tabs.jsx'

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
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onClick={() => handleSelect('components')}
              type="Component"
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onClick={() => handleSelect('jsx')}
              type="JSX"
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onClick={() => handleSelect('props')}
              type="Props"
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onClick={() => handleSelect('state')}
              type="State"
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  )
}
