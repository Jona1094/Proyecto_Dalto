import React from 'react'
import '../Participantes/participantes.css'

const Participantes = ({children, name, imagenParticipante}) => {
  return (
    
      <div className='Participantes'>
        <img className='imgParticipante' src={require(`../Assets/${imagenParticipante}.jpeg`)}/>
      <h1 className='nombreParticipante'>{name}</h1>
      </div>
    
  )
}

export default Participantes