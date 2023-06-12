import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const GoogleMaps = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDRdudu_eum9tl_B_pXUUWy92LmhBcs1H8",
  });
  if (!isLoaded) return <div className="w-full h-full items-center justify-center">Loading...</div>;
  return (
    <>
      <div className=" w-[500px] h-[500px] max-lg:w-full py-20 flex items-center justify-center">
        <Map />
      </div>
    </>
  );
};

function Map() {
  const center = useMemo(() => ({ lat: 40.125, lng: 67.8808 }), []);
  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName="w-full h-full flex items-center justify-center"
    >
      <Marker position={center}></Marker>
    </GoogleMap>
  );
}

export default GoogleMaps
