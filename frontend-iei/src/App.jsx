import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MapWrapper from './MapWrapper'
import SplitPane from 'react-split-pane';
import ComboBox from 'react-responsive-combo-box'

function App() {
  
  const [localidad, setLocalidad] = useState('');
  const [codigoPosta, setCodigoPosta] = useState(''); 
  const [provincia, setProvincia] = useState('');
  const [tipo, setTipo] = useState('');

  const dataTipos = [
    "Hola1",
    "Hola2"
  ];

  return (
    <div>
      <div className='titulo'>
        <h1>Buscar centros de salud</h1>
      </div>
      <SplitPane split="vertical" defaultSize="45%">
        <div className='Izquierda'>
          <div className='grid'>
            <label>Localidad</label>
            <input className='inputAnyadir'
            placeholder='Mislata'
            onChange={(option) => setLocalidad(option.target.value)}>
            </input>

            <label>Código Postal</label>
            <input className='inputAnyadir'
            placeholder='13700'
            onChange={(option) => setCodigoPosta(option.target.value)}>
            </input>
            
            <label>Provincia</label>
            <input className='inputAnyadir'
            placeholder='Valencia'
            onChange={(option) => setCodigoPosta(option.target.value)}>
            </input>

            <label>Tipo</label>
            <ComboBox className='comboboxAnyadir'
                  options={dataTipos}
                  enableAutocomplete
                  editable={false}
                  onSelect={(option) => setTipo(option)}
            />
          </div>
          <div className='divBotones'>
            <button>Cancelar</button>
            <button>Buscar</button>
          </div>
          <div className='divResultado'>
            <label>Resultados de la búsqueda:</label>
            <textarea className='textArea' readOnly></textarea>
          </div>
        </div>
        <div className='Derecha'>
          <div className='mapa'>
            <MapWrapper/>
          </div>
        </div>
      </SplitPane>
    </div>
  )
}

export default App
