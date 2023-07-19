'use client'

import React, { CSSProperties } from 'react'

const listCss: CSSProperties = {
}

const listItemCss: CSSProperties = {
  color: 'white',
  display: 'flex'
}

const textCss: CSSProperties = {
  flex: 1
}

const checkCss: CSSProperties = {
  marginRight: '1rem',
  display: 'flex',
  alignItems: 'center',
}

const ModalCheckItems = () =>
  <div style={listCss}>
    <div style={listItemCss}>
      <div style={checkCss}>✓</div>
      <div style={textCss}>Experience Outcome-based Immersive Learning</div>
    </div>
    <div style={listItemCss}>
      <div style={checkCss}>✓</div>
      <div style={textCss}>Globally Recognized Accredidations, Case Studies and Real-World Simulations</div>
    </div>
    <div style={listItemCss}>
      <div style={checkCss}>✓</div>
      <div style={textCss}>Training by Renowned Industry Experts</div>
    </div>
  </div>

export default ModalCheckItems
