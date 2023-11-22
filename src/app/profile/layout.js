import React from 'react'

function layout({children}) {
  return (
    <div>
    <h1>This is a Profile header</h1>
    {children}
    <h2>This is a Profile footer</h2>
    </div>
  )
}

export default layout