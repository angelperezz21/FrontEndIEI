import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MapWrapper from './MapWrapper'
import SplitPane from 'react-split-pane';
import ComboBox from 'react-responsive-combo-box'

function Cargar(){
    return(
        <div>
            <div className='titulo'>
                <h1>Buscar centros de salud</h1>
            </div>
            
        </div>
    );
}

export default Cargar