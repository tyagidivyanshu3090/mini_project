import React from 'react'

// Best Practice: Use 'children' prop for button content
// This allows both text and JSX to be passed
const Button = ({ onClick, children, color }) => {
  return (
    <button 
      onClick={onClick} 
      style={{ color: color, padding: "10px", margin: "10px" }}
    >
      {children}
    </button>
  )
}

export default Button