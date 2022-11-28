import React from 'react'
import xSalida from '../Assets/xSalir.png'
import Instagram from '../Assets/Instagram.webp'

import '../Modal/modal.css'


const Modal = ({ estado, cambiarEstado, nombre, ciudad, desc, imagen, linkInstagram }) => {
  return (
    <>
        {estado && 
        <div className='modal'>
            <div className='modalVentana'>
                <img onClick={()=> cambiarEstado (false)} className='xSalir' src={xSalida}/>
                <div>
                  <img className='participanteImg' src={require(`../Assets/${imagen}.jpeg`)}/>
                </div>
                <div className='infoParticipante'>
                  <h1 className='nombreParticipante'>{nombre}</h1>
                  <h2 className='ciudadParticipante'>{ciudad}</h2>
                  <p className='descParticipante'>{desc}</p>
                  <a href={linkInstagram} target='_BLANK'><img className='imgRedesParticipantes' src={Instagram}/></a>
                </div>
            </div>
        </div>
        }
    </>
  )
}

export default Modal

