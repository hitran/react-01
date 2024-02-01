import React from 'react'
import PropTypes from 'prop-types'

export default function TabButton(props) {
  return (
    <li>
      <button onClick={props.onSelect}>{props.children}</button>
    </li>
  )
}

TabButton.propTypes = {
  children: React.ReactNode,
  onSelect: PropTypes.function
}
