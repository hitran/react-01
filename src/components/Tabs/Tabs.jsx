import React from 'react'

export default function Tabs({ children, buttons, ButtonContainer = 'menu' }) {
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  )
}

Tabs.propTypes = {
  children: React.ReactNode,
  buttons: React.ReactNode,
  ButtonContainer: React.ReactNode
}
