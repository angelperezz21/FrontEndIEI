import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MapWrapper from './MapWrapper'
import SplitPane from 'react-split-pane';
import ComboBox from 'react-responsive-combo-box'

import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import {Icon, Style } from 'ol/style';
import {transform} from 'ol/proj'

function App() {
  const [features, setFeatures] = useState([])
  const [localidad, setLocalidad] = useState('');
  const [codigoPostal, setCodigoPostal] = useState(''); 
  const [provincia, setProvincia] = useState('');
  const [tipo, setTipo] = useState('');
  const [centrosSanitarios, setCentrosSanitarios] = useState([]);

  const dataTipos = [
    "Cualquiera",
    "Hospital",
    "Centro de salud",
    "Otros"
  ];

  function buscarCentros(localidad, cp, provincia, tipo){
    const resultados = document.getElementById('resultados_txt');
    resultados.value = 'Buscando...';

    const iconStyle = new Style({
      image: new Icon({
        scale: [0.1, 0.1],
        anchor: [0.5, 1.0],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        src: 'geo-alt-fill.svg',
      }),
    });

    
    fetch(`http://localhost:8080/api/query/health-centers?loc=${localidad}&cp=${cp}&prov=${provincia}&tipo=${tipo}`)
      .then((res) => { return res.json() })
      .then(data => {
        //Cargar iconos en el mapa
        const lug = Object.entries(data);
        let iconFeatures = [];
        for (var i = 0; i < lug.length; i++) {

          //Accedemos a las coordenadas del objeto
          let cord1 = parseFloat(lug[i][1].longitud);
          let cord2 = parseFloat(lug[i][1].latitud);
          const iconFeature2 = new Feature({
            geometry: new Point(transform([cord1, cord2], 'EPSG:4326', 'EPSG:3857')),
            name: lug[i][1].nombre,
          });

          iconFeature2.setStyle(iconStyle);

          iconFeatures.push(iconFeature2);
        }

        if(iconFeatures.length == 0){
          iconFeatures.push(new Feature());
        }
        setFeatures(iconFeatures);

        //Dar feedback al usuario
        const cantidadCentros = data.length;
        let textoResultado = '';

        if(cantidadCentros === 0) textoResultado += 'No se ha encontrado ningún centro sanitario';
        else if(cantidadCentros === 1) textoResultado += 'Se ha encontrado 1 centro sanitario';
        else textoResultado += `Se ha encontrado ${cantidadCentros} centros sanitarios`;
        
        for(let i = 0; i < cantidadCentros; i++){
          textoResultado += `\n${i+1}. ${data[i].nombre}, ${data[i].localidad.nombre} (${data[i].provincia.nombre})`;
        }

        resultados.value = textoResultado;
      });
  }

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
            <input id='localidad_txt'
            className='inputAnyadir'
            placeholder='Mislata'
            onChange={(option) => setLocalidad(option.target.value)}>
            </input>

            <label>Código Postal</label>
            <input id='cp_txt'
            className='inputAnyadir'
            placeholder='13700'
            onChange={(option) => setCodigoPostal(option.target.value)}>
            </input>
            
            <label>Provincia</label>
            <input id='provincia_txt'
            className='inputAnyadir'
            placeholder='Valencia'
            onChange={(option) => setProvincia(option.target.value)}>
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
            <button onClick={() => { buscarCentros(
              localidad,
              codigoPostal,
              provincia,
              tipo,
            ) }}>Buscar</button>
          </div>
          <div className='divResultado'>
            <label>Resultados de la búsqueda:</label>
            <textarea id='resultados_txt' className='textArea' readOnly></textarea>
          </div>
        </div>
        <div className='Derecha'>
          <div className='mapa'>
            <MapWrapper features={features}/><div id="popup"></div>
          </div>
        </div>
      </SplitPane>
    </div>
  )
}

export default App
