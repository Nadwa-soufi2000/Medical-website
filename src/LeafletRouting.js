import {useEffect} from 'react'
import L from 'leaflet'
import 'leaflet-routing-machine'
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import { useMap } from 'react-leaflet'

function LeafletRouting()
{
    const map = useMap();
    const routingControl = L.Routing.Control({
        waypoints: [
            L.latLng(33.5138 , 36.2765),
            L.latLng(35.52 , 35.78)
        ],
        routeWhileDragging: true,
        addWaypoints: false,
        routeWhileDragging: false,
        geocoder: L.Control.Geocoder.nominatim(1),
    });
    useEffect(() =>{
        return () => routingControl.addTo(map)
    }, [])
    return null;
}

export default LeafletRouting