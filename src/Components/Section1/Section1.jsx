import React from 'react'
import './section1.css'
import DaltoPresentacion from '../Assets/DaltoPresentacion.mp4'

const Section1 = () => {
  return (
    <div className='section1'>
        <div className='containerVideo'>
            <video controls src={DaltoPresentacion}/>
        </div>
        <div className='containerTexto'>
            <h1 className='tituloTexto'>¿Qué es el Proyecto Dalto?</h1>
            <p className='texto'>El Proyecto Dalto busca demostrar como se puede formar un perfil profesional en el mundo del Desarrollo en tal solo 
            6 meses. Para eso fueron seleccionados 3 participantes, que fueron capacitados desde cero en Programación Web.</p>
        </div>
        
    </div>
  )
}

export default Section1