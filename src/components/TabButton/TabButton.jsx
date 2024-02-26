import React from 'react'
import PropTypes from 'prop-types'

export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  )
}

TabButton.propTypes = {
  children: React.ReactNode,
  onSelect: PropTypes.function,
  isSelected: PropTypes.bool
}
