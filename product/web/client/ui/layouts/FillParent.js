import React from 'react'
import radium from 'radium'
import colors from '../configuration/colors'
const { primaryBackground } = colors

const FillParent = ({ children, style }) =>(
  <div style={[defaultStyles, style]}>
    {children}
  </div>
)

const defaultStyles = {
  flex: 1,
  alignItems: 'stretch',
  justifyContent: 'center',
  background: primaryBackground,
}

export default radium(FillParent)
