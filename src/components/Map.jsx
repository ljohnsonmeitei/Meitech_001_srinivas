// src/Map.js
import React, { useState, useRef, useCallback } from "react";
import {
  GoogleMap,
  LoadScript,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";

const containerStyle = {
  width: "85%",
  height: "400px",
  margin: "auto",
  border: "1px solid #047857",
  borderRadius: "10px"
};

const center = {
  lat: 15.2993,
  lng: 74.124,
};

const Map = () => {
  const [map, setMap] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(center);

  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        const { location } = place.geometry;
        setSelectedPlace({
          lat: location.lat(),
          lng: location.lng(),
        });
        map.panTo({ lat: location.lat(), lng: location.lng() });
        map.setZoom(15);
      }
    }
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyADd3g4yzANsvznP3Ml_DFegoTTiqujj0w" // Replace with your API key
      libraries={["places"]} // Make sure to include 'places' library
    >
      <div>
        <div className="flex items-center bg-white rounded-full shadow-md border border-gray-300 max-w-md m-auto mb-4">
          <div className="pl-4 text-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
              />
            </svg>
          </div>
          <Autocomplete
            onLoad={(autocomplete) => setAutocomplete(autocomplete)}
            onPlaceChanged={onPlaceChanged}
          >
            <input
              type="text"
              placeholder="Search for the location"
              className="flex-grow px-5 py-4 text-gray-600 rounded-full focus:outline-none h-[46px]"
              // style={{
              //   boxSizing: "border-box",
              //   border: "1px solid transparent",
              //   padding: "0 12px",
              //   borderRadius: "3px",
              //   fontSize: "16px",
              //   outline: "none",
              //   textOverflow: "ellipses",
              //   zIndex: 1,
              // }}
            />
          </Autocomplete>
        </div>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={selectedPlace}
          zoom={10}
          onLoad={onLoad}
        >
          {/* You can add markers or other map components here */}
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default Map;
