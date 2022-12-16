import React from 'react'
import ReactDOM from 'react-dom/client'
import SplitPane from 'react-split-pane';

import App from './App'
import MapWrapper from './MapWrapper'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SplitPane split="vertical" defaultSize="45%">
      <div className='Izquierda'>
        <h1>hola</h1>
      </div>
      <div className='Derecha'>
        <MapWrapper/>
      </div>
    </SplitPane>
    
  </React.StrictMode>,
)
