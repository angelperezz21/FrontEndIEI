import './MapWrapper.css'

// react
import React, { useState, useEffect, useRef } from 'react';
import SplitPane from 'react-split-pane';

// openlayers
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import XYZ from 'ol/source/XYZ'
import {transform} from 'ol/proj'
import {toStringXY} from 'ol/coordinate';
import OSM from 'ol/source/OSM';
import Overlay from 'ol/Overlay';
import TileJSON from 'ol/source/TileJSON';

function MapWrapper(props) {

    // set intial state
    const [ map, setMap ] = useState(new Map())
    const [ featuresLayer, setFeaturesLayer ] = useState()

    // pull refs
    const mapElement = useRef()

     // create state ref that can be accessed in OpenLayers onclick callback function
    //  https://stackoverflow.com/a/60643670
    const mapRef = useRef()
    mapRef.current = map

    useEffect( () => {

        // create and add vector source layer
        const initalFeaturesLayer = new VectorLayer({
            source: new VectorSource()
        })

        const initialMap = new Map({
            target: mapElement.current,
            layers: [
              
                // USGS Topo
                // new TileLayer({
                //   source: new XYZ({
                //     url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}',
                //   })
                // }),
        
                // Google Maps Terrain
                //Mapa OSM
                new TileLayer({
                    source: new OSM()
                }),
      
              initalFeaturesLayer
              
            ],
            view: new View({
                projection: 'EPSG:3857',
                center: [-41963.928529, 4789727.64075],
                zoom: 10
              
            }),
            controls: []
          })


        // save map and vector layer references to state
        setMap(initialMap)
        setFeaturesLayer(initalFeaturesLayer)
    },[]);

    useEffect( () => {

        if (props.features.length) { // may be null on first render
    
          // set features to map
            featuresLayer.setSource(
                new VectorSource({
                    features: props.features // make sure features is an array
                })
            )
    
          // fit map to feature extent (with 100px of padding)
          //map.getView().fit(featuresLayer.getSource().getExtent(), {
          //   padding: [100,100,100,100]
          // })
    
        }
    
    },[props.features])

      // render component
    return (
        <div>
            <div ref={mapElement} className="map-container"></div>
        </div> 
    ) 
}

export default MapWrapper