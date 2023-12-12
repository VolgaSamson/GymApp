

import './TollCalculation.css'
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer ,Marker,Popup ,Polyline ,Tooltip } from 'react-leaflet';
import CustomIcon from './customIcon'; 
import 'leaflet/dist/leaflet.css';
import polyline from 'polyline';
import SearchBox from './SearchBox';

import CurrentLocationIcon from './currentIcon';







const TollCalculation = () => {
  const [NearbyPOIs, setNearbyPOIs] = useState([]);
  const [currentLocation, setcurrentLocation] = useState(null);
  const [selectedPOI, setSelectedPOI] = useState(null);
  const [routePolyline, setRoutePolyline] = useState(null);
  const [amenity, setamenity] = useState('');
  const [TollCost, setTollCost] = useState(null);
  
  


  // Search for location

  const handleSearch = (value) => {
    // Perform search logic using the query
    console.log('Searching for:', value);
    setamenity(value);
  };


 // Get current position

  const handleLocateClick = () => {
    navigator.geolocation.getCurrentPosition(
      (location) => {
        const { latitude, longitude } = location.coords;
        setcurrentLocation([latitude, longitude]);
      },
      (error) => {
        console.error('Error getting the current location:', error.message);
      }
    );
    
  };
  // Fetch route when user location or POI location changes
  const fetchRoute = async () => {
    if (currentLocation && selectedPOI) {
      const osrmEndpoint = 'https://router.project-osrm.org/route/v1/driving/';
      const coordinates = `${currentLocation[1]},${currentLocation[0]};${selectedPOI.lng},${selectedPOI.lat}`;

      try {
        const response = await fetch(`${osrmEndpoint}${coordinates}`);
        const data = await response.json();

        if (data.routes && data.routes.length > 0) {
          const decodedPolyline = polyline.decode(data.routes[0].geometry);
          
          setRoutePolyline(decodedPolyline);
        } else {
          console.error('No route found');
        }
      } catch (error) {
        console.error('Error fetching route:', error);
      }
    }
  };

// Fetch cost  when routePolyline displayed
 
  const getTripCostFromTollGuru = async () => {
    if (routePolyline) {
    const apiKey = 'BB7RtJ7PrF2bLdhMLJBbthqhpN2tQgHL';
    const tollGuruPolylineEndpoint = 'https://apis.tollguru.com/toll/v2/complete-polyline-from-mapping-service';
    const tollGuruPolylineParams = {
      mapProvider: "here", // Adjust vehicle type as needed
      polyline: polyline.encode(routePolyline),
    };
  
    try {
      const response = await fetch(tollGuruPolylineEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey
        },
        body: JSON.stringify(tollGuruPolylineParams),
      });
  
      const data = await response.json();
      // Handle the response data, which may include details about the trip cost
      console.log("Tollguru"+JSON.stringify(data));
      setTollCost(data);
      
    } catch (error) {
      console.error('Error fetching trip cost from TollGuru Polyline API:', error);
      return null;
    }
    }
  };
 console.log("routePolyline",routePolyline);
  console.log("selectedPOI",selectedPOI);

  useEffect(() => {
    // Get current position
      navigator.geolocation.getCurrentPosition(
      (location) => {
        console.log(location);
        const { latitude, longitude } = location.coords;
        setcurrentLocation([latitude, longitude]);
      },
      (error) => {
        console.error('Error getting the current location:', error.message);
      }
    );
  
}, []);


    

useEffect(() => {
  // Fetch nearby restaurants and cafes using Overpass API
  if (currentLocation) {
    const overpassEndpoint = 'https://overpass-api.de/api/interpreter';
    const overpassQuery =   `[out:json][timeout:25];
(nwr["amenity"=${amenity}](around:2000,${currentLocation[0]},${currentLocation[1]});) -> .results;
.results out center;`;

    fetch(`${overpassEndpoint}?data=${encodeURIComponent(overpassQuery)}`)
      .then((response) => response.json())
      .then((data) => {
        // Process the data from Overpass API

        if(data !== null){
          
          const pois = data.elements.map((element) => ({
            id: element.id,
            lat: element.lat || (element.center ? element.center.lat : null),
            lon: element.lon || (element.center ? element.center.lon : null),
            name: element.tags && element.tags.name ? element.tags.name : 'Unnamed POI',
          }));
          setNearbyPOIs(pois.slice(0, 5)); 
        }
        else{
          alert("There are no restaurant nearby");
        }
        

        
      })
      .catch((error) => {
        console.error('Error fetching data from Overpass API:', error);
      });
  }
}, [currentLocation,amenity]);



useEffect(() => {
  // Fetch route when user location or POI location changes
    fetchRoute();
  }, [currentLocation, selectedPOI]);

  useEffect(() => {
    // Fetch cost  when routePolyline displayed
      
      getTripCostFromTollGuru();
    }, [routePolyline]);


  console.log(currentLocation);
  console.log(TollCost);

  return (
    <div className='MapmainContainer'>
      <div className='searchcontainer'>
        <div>
      <SearchBox onSearch={handleSearch} />
      </div>
      <div>
        <p>Select Current Location</p>
      <button onClick={handleLocateClick}
      >Get My Location</button>
      </div> 
    </div>
      <MapContainer
      center={[10.092544, 76.2609664]}
      zoom={13}
      scrollWheelZoom={false}
      className='MapContainer'
    >
      <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        
      {NearbyPOIs.map((coord, index) => (

        <Marker 
        key={index} 
        position={coord} 
        icon={CustomIcon}
        eventHandlers={{
          click: (e) => {
            setSelectedPOI(e.latlng);
          },
        }}
      >
        <Popup>
          <span>{coord.name}</span>
        </Popup>
        
      </Marker>
      ))}

{currentLocation && <Marker position={currentLocation} icon={CurrentLocationIcon}> <Popup>
          <span>Current Location</span>
        </Popup> </Marker>}

{routePolyline && <Polyline positions={routePolyline} color="green">
{TollCost && TollCost.route?.hasTolls? (<Tooltip>

  
  Toll Costs:{TollCost.route.costs.minimumTollCost},
{TollCost.summary.currency},
{TollCost.route.distance.metric},
{TollCost.route.distance.text},
Fuel:{TollCost.route.costs.fuel}
</Tooltip>) : <Tooltip>Toll free route</Tooltip>}
</Polyline>}


    </MapContainer>
    
    </div>
  );
};

export default TollCalculation;