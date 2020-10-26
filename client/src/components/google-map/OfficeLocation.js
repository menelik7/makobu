import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

const getMapOptions = (maps: any) => {
  return {
    disableDefaultUI: true,
    mapTypeControl: true,
    streetViewControl: true,
    fullscreenControl: true,
    clickableIcons: false,
    gestureHandling: "cooperative",
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "on" }],
      },
    ],
  };
};

export default function OfficeLocation() {
  return (
    // Important! Always set the container height explicitly
    <div
      className="radius-map"
      style={{
        height: "500px",
        width: "100%",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={{ lat: 8.933691, lng: 38.762496 }}
        defaultZoom={15}
        options={getMapOptions}
      >
        <Marker
          lat="8.931022"
          lng="38.762547"
          name="MakoBu Enterprises P.L.C."
          address="Akaki Kality, Addis Ababa, Ethiopia"
          phone="+251114655464"
          directions="https://www.google.com/maps/dir//8.931087,38.762539/@8.931087,38.7603503,17z?hl=en-US"
        />
      </GoogleMapReact>
    </div>
  );
}
