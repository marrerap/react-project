import React from 'react';
import { MapContainer, GeoJSON} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './CovidMap.css'



const CovidMap = ({ states }) => {
    const mapStyle = {
        fillColor:'white',
        weight:"1",
        color:'black',
        fillOpacity:'1'
    }
    
    const onEachState = (state, layer) => {
        // console.log(state)
        layer.options.fillColor = state.properties.color
        const name = state.properties.name;
        const confirmedText = state.properties.confirmedText
        layer.bindPopup(`State: ${name}<br/> New Cases: ${confirmedText}`)
    }

    return ( 
        <div>
           <MapContainer style={{height: '70vh'}} zoom={2.5} center={[49.82, -109.58]} >
        <GeoJSON style={mapStyle} data={states} onEachFeature={onEachState} />
           </MapContainer>
        </div>
     );
}
 
export default CovidMap;