import React from 'react'
// No contiene export const con rafc como en el tutorial
import React from 'react'

export const segundoComponente = () => {
  return (
    <div>
      <div>segundoComponente</div>    // Se envuelven dos elementos dentro de un solo elemento
      <div>segundoComponente</div>
    </div>
    )
}

const primerComponente = () => {
  return (
    <div>
      primerComponente
    </div>
  )
}

export default primerComponente
