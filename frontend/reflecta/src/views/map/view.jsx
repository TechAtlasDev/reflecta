import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import Interfaz from "./interfaz";

function HandlerMap() {
  const [clickedPosition, setClickedPosition] = useState(null);

  // Registrar el evento de clic en el mapa
  useMapEvents({
    click: (event) => {
      setClickedPosition(event.latlng); // Guarda la latitud y longitud del clic
    },
  });

  return clickedPosition === null ? null : (
    // Si hay una posición de clic, muestra un marcador
    <Marker position={clickedPosition}>
      <Popup>a</Popup>
    </Marker>
  );
}

function Map() {
  return (
    <main className='relative w-screen h-screen overflow-hidden'>
      {/* Mapa */}
      <MapContainer
        center={[10, 10]} // Coordenadas iniciales
        zoom={2} // Nivel de zoom inicial
        className='w-screen h-screen absolute z-0'
        zoomControl={false} // Deshabilita los controles de zoom predeterminados
      >
        <TileLayer
          url='https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGVjaGF0bGFzZGV2IiwiYSI6ImNtMWw2anpnZTAyZG8ybm9rYjdsdmI0a2IifQ.e3n0BC8mLsl5rYgx9mBQKQ'
          attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        />
        <HandlerMap />
      </MapContainer>

      {/* Sección de la interfaz */}
      <section className='w-screen absolute z-10 pointer-events-none'>
        <Interfaz />
      </section>
    </main>
  );
}

export default Map;
