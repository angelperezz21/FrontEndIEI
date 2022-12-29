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

    function enviarPeticionCarga() {
        const jsonBody =
        {
            ib: checkIB,
            cv: checkCV,
            eus: checkEu
        };

        const textArea = document.getElementById('text-area');

        textArea.value = 'Extrayendo centros sanitarios de las fuentes de datos...';

        fetch('http://localhost:8080/api/load/health-centers',
            {
                method: 'POST',
                body: JSON.stringify(jsonBody)
            })
            .then((res) => { return res.json() })
            .then((data) => {
                textArea.value = data.results;
            })

    }


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
                    <label class="grid-element"><input type="checkbox" id="chCV" onChange={() => {setCheckCV(document.getElementById("chCV").checked)}}></input> Comunitat Valenciana</label>
                    <label class="grid-element"><input type="checkbox" id="chIB" onChange={() => {setCheckIB(document.getElementById("chIB").checked)}}></input> Illes Balears</label>
                    <label class="grid-element"><input type="checkbox" id="chEu" onChange={() => {setCheckEu(document.getElementById("chEu").checked)}}></input> Euskadi</label>
                </div>
                <br></br>
                <div className='botones'>
                    <button>Borrar</button>
                    <button onClick={() => { enviarPeticionCarga() }}>Cargar</button>
                </div>

                <br></br>
                
                <label>Resultados de la búsqueda:</label>
                <div className='divResultado2'>
                    <textarea className='textArea2' readOnly id='text-area'></textarea>
                </div>
            </div>
        </div>
    );
}

export default Cargar