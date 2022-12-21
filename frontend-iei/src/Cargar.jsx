import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './Cargar.css'
import MapWrapper from './MapWrapper'
import SplitPane from 'react-split-pane';
import ComboBox from 'react-responsive-combo-box'

function Cargar(){
    return(
        <div>
            <div className='titulo'>
                <h1>Carga del almacen de datos</h1>
                <button onClick={() => {window.location='./busqueda'}}>Búsqueda</button>
            </div>
            <div>
                <label>Selecciona fuente:</label>
                <br></br>
                <br></br>
                <div className='gridCheckBox'>
                    <label><input type="checkbox" ></input> Comunitat Valenciana</label>
                    <label><input type="checkbox" ></input> Illes Balears</label>
                    <label><input type="checkbox" ></input> Euskadi</label>
                </div>
                <div className='botones'>
                    <button>Cancelar</button>
                    <button>Cargar</button>
                </div>
                <div className='divResultado'>
                    <label>Resultados de la búsqueda:</label>
                    <textarea className='textArea' readOnly></textarea>
                </div>
            </div>
            
        </div>
    );
}

export default Cargar