import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect, useRef } from "react";
import L from "leaflet"; // Importa Leaflet para crear el icono personalizado
import Interfaz from "./interfaz";
import GetCordinates from "./functions/locationLandsat";

// Define el icono personalizado
const landsatIcon = L.icon({
  iconUrl: "/icons/landsat.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const markerIcon = L.icon({
  iconUrl: "/icons/marker.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const pinIcon = L.icon({
  iconUrl: "/icons/pin.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

function HandlerMap() {
  const [clickedPosition, setClickedPosition] = useState(null);
  const markerRef = useRef(null); // Referencia para el marcador

  // Registrar el evento de clic en el mapa
  useMapEvents({
    click: (event) => {
      setClickedPosition(event.latlng); // Guarda la latitud y longitud del clic

      // Si el marcador ya está creado, abrir automáticamente el popup
      if (markerRef.current) {
        markerRef.current.openPopup();
      }
    },
  });

  return clickedPosition === null ? null : (
    // Si hay una posición de clic, muestra un marcador con el popup abierto automáticamente
    <Marker position={clickedPosition} ref={markerRef} icon={pinIcon}>
      <Popup autoPan={false}>
        <button
          className='btn btn-xs btn-outline btn-success'
          onClick={() => alert("Botón presionado")}
        >
          Notificar cuando Landsat pase aquí
        </button>
        <button
          className='btn btn-xs btn-outline btn-primary'
          onClick={() => alert("Botón presionado")}
        >
          Mostrar metadatos
        </button>
      </Popup>
    </Marker>
  );
}

function Map() {
  const [landsatCoordinates, setLandsatCoordinates] = useState(null);
  const [userCoordinates, setUserCoordinates] = useState(null);

  // Función para obtener las coordenadas del usuario
  function getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserCoordinates({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  async function DrawLandsat() {
    try {
      const response = await GetCordinates();
      setLandsatCoordinates(response);
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  }

  useEffect(() => {
    DrawLandsat();
    getUserLocation(); // Obtener la ubicación del usuario
  }, []); // Ejecutar solo una vez al montar el componente

  return (
    <main className='relative w-screen h-screen overflow-hidden'>
      {/* Mapa */}
      <MapContainer
        center={[10, 10]} // Coordenadas iniciales
        zoom={2} // Nivel de zoom inicial
        className='w-screen h-screen absolute z-0'
        zoomControl={false}
      >
        <TileLayer
          url='https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGVjaGF0bGFzZGV2IiwiYSI6ImNtMWw2anpnZTAyZG8ybm9rYjdsdmI0a2IifQ.e3n0BC8mLsl5rYgx9mBQKQ'
          attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        />
        <HandlerMap />

        {landsatCoordinates && (
          <Marker
            alt='Landsat9'
            icon={landsatIcon}
            position={[
              landsatCoordinates.latitude,
              landsatCoordinates.longitude,
            ]}
          >
            <Popup>
              <b>¡El Landsat 9 se encuentra aquí!</b>
              <br /> Coordenadas: {landsatCoordinates.latitude},{" "}
              {landsatCoordinates.longitude}
            </Popup>
          </Marker>
        )}

        {userCoordinates && (
          <Marker
            position={[userCoordinates.latitude, userCoordinates.longitude]}
            icon={markerIcon}
          >
            <Popup>
              Tu ubicación: {userCoordinates.latitude},{" "}
              {userCoordinates.longitude}
              <button
                className='btn btn-xs btn-outline btn-success'
                onClick={() => alert("Botón presionado")}
              >
                Notificar cuando Landsat pase aquí
              </button>
            </Popup>
          </Marker>
        )}
      </MapContainer>

      {/* Sección de la interfaz */}
      <section className='w-screen absolute z-10 pointer-events-none'>
        <Interfaz />
      </section>
    </main>
  );
}

export default Map;
