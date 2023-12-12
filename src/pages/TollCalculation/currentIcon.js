import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; 


// Make sure to import the Leaflet CSS

const CurrentLocationIcon = L.icon({ 
    iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png', 
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png' 
});

export default CurrentLocationIcon;
