import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; 
import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
// Make sure to import the Leaflet CSS

const CustomIcon = L.icon({ 
    iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
    iconUrl: iconMarker, 
    shadowUrl: iconShadow 
});

export default CustomIcon;
