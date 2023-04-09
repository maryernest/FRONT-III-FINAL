import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='err'>
      <h1>Esa ruta no existe</h1>
      <button>
        <Link to='/'>Volver</Link>
      </button>
    </div>
  )
}

export default Error
