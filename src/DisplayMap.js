import './App.css';
import L from 'leaflet'
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import {MapContainer , TileLayer } from 'react-leaflet'
import LeafletRoutingMachine from './LeafletRoutingMachine';

function DisplayMap() {
  const position = [33.5138, 36.2765];
  return (
    <div>
         <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
             <TileLayer
               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
             />
           <LeafletRoutingMachine />
        </MapContainer>
    </div>
  );
}
let DefaultIcon = L.icon({
   iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png" ,
   iconSize: [22, 41],
   iconAnchor: [10, 41],
   popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon ;

export default DisplayMap
