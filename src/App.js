import { useState } from "react";
import Modal from './Components/Modal/Modal.js'
import Nav from "./Components/Nav/Nav.js";
import Participantes from "./Components/Participantes/Participantes.js";
import Section1 from "./Components/Section1/Section1.jsx";


const App = () => {
  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  const [estadoModal2, cambiarEstadoModal2] = useState(false);
  const [estadoModal3, cambiarEstadoModal3] = useState(false);
  return (
    <div className="App">
      <Nav/>
      <Section1/>
      <div className="containerParticipantes">
      <button className="btn1" onClick={() => cambiarEstadoModal1(!estadoModal1)}>
          Ver Más
        </button>
        <button className="btn2" onClick={() => cambiarEstadoModal2(!estadoModal2)}>
          Ver Más
        </button>
        <button className="btn3" onClick={() => cambiarEstadoModal3(!estadoModal3)}>
          Ver Más
        </button> 
      <Participantes
      imagenParticipante= 'Diego'
      name='Diego Barrionuevo'
      />
       <Participantes 
      imagenParticipante= 'Guillermina'
      name='Guillermina Bousono'
      />
       <Participantes 
      imagenParticipante= 'Jonatan'
      name='Jonatan Ferrari'
      />
      </div>


      <Modal
       estado={estadoModal1}
       cambiarEstado={cambiarEstadoModal1}
       imagen='Diego'
       nombre='Diego Barrionuevo'
       ciudad='Rosario, Santa Fe, Argentina'
       desc='Tengo 28 años. Actualmente vivo en CABA. Las tecnologías que manejo son HTML, CSS,
       Javascript, React JS, VUE JS, Node Js, PHP.'
       linkInstagram='https://www.instagram.com/diegobarrionuevo1/'
       />
      <Modal
       estado={estadoModal2}
       cambiarEstado={cambiarEstadoModal2}
       imagen='Guillermina'
       nombre='Guillermina Bousono'
       ciudad='Rosario, Santa Fe, Argentina'
       desc='Tengo 28 años. Actualmente vivo en CABA. Las tecnologías que manejo son HTML, CSS,
       Javascript, React JS, VUE JS, Node Js, PHP.'
       linkInstagram={'https://www.instagram.com/guill3rmin4/'}
       />
      <Modal
       estado={estadoModal3}
       cambiarEstado={cambiarEstadoModal3}
       imagen='Jonatan'
       nombre='Jonatan Ferrari'
       ciudad='Rosario, Santa Fe, Argentina'
       desc='Tengo 28 años. Actualmente vivo en CABA. Las tecnologías que manejo son HTML, CSS,
       Javascript, React JS, VUE JS, Node Js, PHP.'
       linkInstagram={'https://www.instagram.com/jonatannnf/'}
       />
       </div>

    
  );
}

export default App;
