import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './Cargar.css'
import MapWrapper from './MapWrapper'
import SplitPane from 'react-split-pane';
import ComboBox from 'react-responsive-combo-box'

function Cargar(){
    return(
        <div className='todo'>
            <div className='titulo'>
                <h1>Carga del almacen de datos</h1>
                <button onClick={() => {window.location='./busqueda'}}>Búsqueda</button>
            </div>
            
            <br></br>

            <div className='fuentes'>
                <label>Selecciona fuente:</label>
                <br></br>
                <br></br>
                <div className='gridCheckBox'>
                    <label><input type="checkbox" ></input> Comunitat Valenciana</label>
                    <label><input type="checkbox" ></input> Illes Balears</label>
                    <label><input type="checkbox" ></input> Euskadi</label>
                </div>
                <br></br>
                <div className='botones'>
                    <button>Borrar</button>
                    <button>Cargar</button>
                </div>

                <br></br>
                
                <label>Resultados de la búsqueda:</label>
                <div className='divResultado2'>
                    <textarea className='textArea2' readOnly></textarea>
                </div>
            </div>
        </div>
    );
}

export default Cargar