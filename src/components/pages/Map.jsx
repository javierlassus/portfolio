import React, { useEffect, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import mapStyle from "../../assets/styles/mapStyle";
import pin from "../../assets/icons/pin.svg";

export default function Map() {
  const libraries = ["places"];

  const options = { styles: mapStyle };

  //Size of the Map
  const mapContainerStyle = {
    height: "35vh",
    width: "100vw",
  };
  //Coordinates for the default location
  const center = {
    lat: 25.761681,
    lng: -80.191788,
  };

  //Wait for the call to the API
  const [isLoading, setLoading] = useState(true);

  //To allow the Map to render properly
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAfKca8q7YdQlPLgxYP-s0wOOw44m69st4",
    libraries,
  });

  //TIME FOR THE MAP TO LOAD THE FIRST TIME
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  //To provide information about the state of the Map
  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  //To provide information about the state of the API call
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="map">
      {/* Google Maps component */}
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={11}
        center={center}
        options={options}
      >
        <Marker
          position={center}
          // Chane default markers to custom ones

          icon={{
            url: pin,
            scaledSize: new window.google.maps.Size(35, 35),
          }}
        />
      </GoogleMap>
    </div>
  );
}
