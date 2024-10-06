import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect, useRef } from "react";
import GetCordinates from "./functions/locationLandsat";
import { landsatIcon, markerIcon, pinIcon } from "./components/icons";
import Interfaz from "./interfaz";

export function HandlerMap({ setClickedPosition }) {
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

  return null;
}

function Map() {
  const [landsatCoordinates, setLandsatCoordinates] = useState(null);
  const [userCoordinates, setUserCoordinates] = useState(null);
  const [clickedPosition, setClickedPosition] = useState(null);
  const markerRef = useRef(null); // Nueva referencia para el marcador del clic

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

  useEffect(() => {
    // Si se establece una posición al hacer clic, abrir el popup automáticamente
    if (markerRef.current) {
      markerRef.current.openPopup();
    }
  }, [clickedPosition]); // Solo cuando cambie `clickedPosition`

  return (
    <main className='relative w-screen h-screen overflow-hidden'>
      <MapContainer
        center={[0, 0]} // Coordenadas iniciales
        zoom={2} // Nivel de zoom inicial
        className='w-screen h-screen absolute z-0'
        zoomControl={false}
      >
        <TileLayer
          url='https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGVjaGF0bGFzZGV2IiwiYSI6ImNtMWw2anpnZTAyZG8ybm9rYjdsdmI0a2IifQ.e3n0BC8mLsl5rYgx9mBQKQ'
          attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        />

        {/* Evento para capturar los clics en el mapa */}
        <HandlerMap setClickedPosition={setClickedPosition} />

        {/* Mostrar marcador de Landsat */}
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
              <br /> You're here: {landsatCoordinates.latitude},{" "}
              {landsatCoordinates.longitude}
            </Popup>
          </Marker>
        )}

        {/* Mostrar marcador del usuario */}
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
                onClick={() => alert("Notify when Landsat is here")}
              >
                Notify when Landsat is here
              </button>
            </Popup>
          </Marker>
        )}

        {/* Mostrar marcador al hacer clic en el mapa y abrir popup automáticamente */}
        {clickedPosition && (
          <Marker
            position={clickedPosition}
            icon={pinIcon}
            ref={markerRef} // Referencia al marcador del clic
          >
            <Popup>
              <button
                className='btn btn-xs btn-outline btn-success'
                onClick={() => alert("Notify when Landsat is here")}
              >
                Notify when Landsat is here
              </button>
              <button
                className='btn btn-xs btn-outline btn-primary'
                onClick={() => alert("Mostrar metadatos")}
              >
                Mostrar metadatos
              </button>
            </Popup>
          </Marker>
        )}
      </MapContainer>

      <section className='w-screen absolute z-10 pointer-events-none'>
        <Interfaz />
      </section>
    </main>
  );
}

export default Map;
