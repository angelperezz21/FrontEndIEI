import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MapWrapper from './MapWrapper'
import SplitPane from 'react-split-pane';
import ComboBox from 'react-responsive-combo-box'

import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import {Icon, Style } from 'ol/style';

function App() {
  const [features, setFeatures] = useState([])
  const [localidad, setLocalidad] = useState('');
  const [codigoPosta, setCodigoPosta] = useState(''); 
  const [provincia, setProvincia] = useState('');
  const [tipo, setTipo] = useState('');

  const dataTipos = [
    "Hola1",
    "Hola2"
  ];

  useEffect(() => {

    const iconStyle = new Style({
      image: new Icon({
        scale: [0.1, 0.1],
        anchor: [0.5, 1.0],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        src: 'geo-alt-fill.svg',
      }),
    });

    let iconFeatures = [];

    let feature = new Feature({
      geometry: new Point([0, 0]),
      name: "test",
    });

    feature.setStyle(iconStyle);

    iconFeatures.push(feature);

    // fetch('/api/places')
    //   .then(res => res.json())
    //   .then(data => {

    //     const lug = Object.entries(data);

    //     for (var i = 0; i < lug.length; i++) {

    //       //Accedemos a las coordenadas del objeto
    //       let cord1 = parseFloat(lug[i][1].coordenadas[0]['$numberDecimal']);
    //       let cord2 = parseFloat(lug[i][1].coordenadas[1]['$numberDecimal']);
    //       const iconFeature2 = new Feature({
    //         geometry: new Point([cord1, cord2]),
    //         name: lug[i][1].nombre,
    //       });

    //       iconFeature2.setStyle(iconStyle);

    //       iconFeatures.push(iconFeature2);
    //     }

    //     setFeatures(iconFeatures);

    //   });

    setFeatures(iconFeatures);

  }, []);

  return (
    <div>
      <div className='titulo'>
        <h1>Buscar centros de salud</h1>
        <button onClick={() => {window.location='./cargar'}}>Cargar</button>
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
            <MapWrapper features={features}/>
          </div>
        </div>
      </SplitPane>
    </div>
  )
}

export default App
