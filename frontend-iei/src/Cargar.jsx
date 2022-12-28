import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './Cargar.css'
import MapWrapper from './MapWrapper'
import SplitPane from 'react-split-pane';
import ComboBox from 'react-responsive-combo-box'

function Cargar(){

    const[checkCV, setCheckCV] = useState(false);
    const[checkIB, setCheckIB] = useState(false);
    const[checkEu, setCheckEu] = useState(false);

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
                    <label><input type="checkbox" id="chCV" onChange={() => {setCheckCV(document.getElementById("chCV").checked)}}></input> Comunitat Valenciana</label>
                    <label><input type="checkbox" id="chIB" onChange={() => {setCheckIB(document.getElementById("chIB").checked)}}></input> Illes Balears</label>
                    <label><input type="checkbox" id="chEu" onChange={() => {setCheckEu(document.getElementById("chEu").checked)}}></input> Euskadi</label>
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